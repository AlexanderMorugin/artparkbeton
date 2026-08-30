<template>
  <div class="emblaCatalogCard">
    <div class="emblaCatalogCard__viewport" ref="emblaRef">
      <div class="emblaCatalogCard__container">
        <div
          v-for="item in props.list"
          :key="item.id"
          class="emblaCatalogCard__slide"
        >
          <img
            :src="item.imageNormal"
            :alt="item.title"
            :class="[
              'emblaCatalogCard__slideImage',
              { emblaCatalogCard__slideImage_modal: props.isModal },
            ]"
          />
        </div>
      </div>

      <EmblaButtonControl
        :canScroll="canScrollPrev"
        direction="prev"
        @scroll="scrollPrev"
      />
      <EmblaButtonControl
        :canScroll="canScrollNext"
        direction="next"
        @scroll="scrollNext"
      />
      <EmblaButtonFullScreen
        v-if="!props.isModal"
        @openImageModal="isImageModalOpen = true"
      />
    </div>

    <EmblaCatalogThumbs
      :isModal="props.isModal"
      :list="props.list"
      :activeThumb="activeThumb"
      @goToSlide="goToSlide"
    />
  </div>

  <!-- Модалка картинки -->
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalCatalogImage
        v-if="isImageModalOpen"
        :list="props.list"
        @closeModal="isImageModalOpen = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-vue";
import type { CatalogList } from "~/types/catalog";

const props = defineProps<{
  list: CatalogList[];
  isModal: boolean;
}>();

const [emblaRef, emblaApi] = useEmblaCarousel();

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

const goToSlide = (slide: CatalogList) => {
  if (!emblaApi.value) return;

  activeThumb.value = slide.id;
  emblaApi.value.scrollTo(slide.id);
};

const scrollNext = () => {
  activeThumb.value = activeThumb.value + 1;
  emblaApi?.value?.scrollNext();
};
const scrollPrev = () => {
  activeThumb.value = activeThumb.value - 1;
  emblaApi?.value?.scrollPrev();
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
.emblaCatalogCard {
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 767px) {
    gap: 4px;
  }

  &__viewport {
    position: relative;
    height: 100%;
    border-radius: $br-xs;
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
  }

  &__slideImage {
    width: 100%;
    height: 100%;

    object-fit: cover;

    &_modal {
      height: 100vh;
    }
  }
}

.top-enter-active,
.top-leave-active {
  transition: all 0.3s ease;
}
.top-enter-from,
.top-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
