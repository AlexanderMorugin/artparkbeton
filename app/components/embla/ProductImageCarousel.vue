<template>
  <section class="emblaProductImageCarousel">
    <div class="emblaProductImageCarousel__viewport" ref="emblaRef">
      <div class="emblaProductImageCarousel__container">
        <!-- Карусель не в модалке -->
        <div
          v-if="!props.isModal"
          v-for="item in props.imageList"
          :key="item.id"
          class="emblaProductImageCarousel__slide"
          @click="isImageModalOpen = true"
        >
          <img
            :src="isScreenMobile ? item.image550 : item.image1000"
            :alt="item.title"
            :class="[
              'emblaProductImageCarousel__slideImage',
              { emblaProductImageCarousel__slideImage_modal: props.isModal },
            ]"
          />
        </div>

        <!-- Карусель в модалке -->
        <div
          v-if="props.isModal"
          v-for="item in props.imageList"
          :key="item.id"
          class="emblaProductImageCarousel__slide"
        >
          <img
            :src="isScreenMobile ? item.image1080 : item.image1920"
            :alt="item.title"
            :class="[
              'emblaProductImageCarousel__slideImage',
              { emblaProductImageCarousel__slideImage_modal: props.isModal },
            ]"
          />
          <span class="emblaProductImageCarousel__title">
            {{ item.title }}
          </span>
        </div>
      </div>

      <EmblaButtonControl
        v-if="props.imageList.length > 1"
        :canScroll="canScrollPrev"
        direction="prev"
        @scroll="scrollPrev"
      />
      <EmblaButtonControl
        v-if="props.imageList.length > 1"
        :canScroll="canScrollNext"
        direction="next"
        @scroll="scrollNext"
      />
      <!-- <EmblaButtonFullScreen
        v-if="!props.isModal"
        @openImageModal="isImageModalOpen = true"
      /> -->
    </div>

    <EmblaProductImageThumbs
      v-if="props.imageList.length > 1"
      :isModal="props.isModal"
      :imageList="props.imageList"
      :activeThumb="activeThumb"
      @goToSlide="goToSlide"
    />
  </section>

  <!-- Модалка картинки -->
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalProductImageFullScreen
        v-if="isImageModalOpen"
        :imageList="props.imageList"
        @closeModal="isImageModalOpen = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-vue";
import type { IPortfolioImageList } from "~/types/portfolio";

const props = defineProps<{
  imageList: IPortfolioImageList[];
  isModal: boolean;
}>();

const { isScreenMobile } = useResizeMobile();

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

const activeThumb = ref(0);
const isImageModalOpen = ref(false);

const canScrollPrev = ref(false);
const canScrollNext = ref(false);
const scrollNextDisabled = ref(false);
const scrollPrevDisabled = ref(false);

const onSelect = (emblaApi: EmblaCarouselType) => {
  scrollNextDisabled.value = !emblaApi.canScrollNext();
  scrollPrevDisabled.value = !emblaApi.canScrollPrev();
};

const goToSlide = (slide: IPortfolioImageList) => {
  if (!emblaApi.value) return;

  activeThumb.value = slide.id;
  emblaApi.value.scrollTo(slide.id);
};

const scrollNext = () => {
  activeThumb.value = activeThumb.value + 1;
  emblaApi.value?.scrollNext();
};
const scrollPrev = () => {
  activeThumb.value = activeThumb.value - 1;
  emblaApi.value?.scrollPrev();
};

function updateButtonStates(emblaApi: EmblaCarouselType) {
  canScrollPrev.value = emblaApi.canScrollPrev();
  canScrollNext.value = emblaApi.canScrollNext();
}

onMounted(() => {
  if (!emblaApi.value) return;

  updateButtonStates(emblaApi.value);
  emblaApi.value.on("select", updateButtonStates);

  emblaApi.value.on("select", () => {
    activeThumb.value = Number(emblaApi.value?.selectedScrollSnap());
  });

  onSelect(emblaApi.value);
});
</script>

<style lang="scss" scoped>
.emblaProductImageCarousel {
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: min-content;

  &__viewport {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  &__container {
    display: flex;
    touch-action: pan-y pinch-zoom;
  }

  &__slide {
    position: relative;
    flex: 0 0 100%;
    min-width: 0;
    min-height: 282px;

    @media (max-width: 576px) {
      min-height: 162px;
    }
  }

  &__slideImage {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &_modal {
      height: 100vh;
    }
  }

  &__title {
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    width: fit-content;
    padding: 6px 20px;
    backdrop-filter: blur(15px) brightness(90%);
    line-height: 1;
    text-align: center;
  }
}
</style>
