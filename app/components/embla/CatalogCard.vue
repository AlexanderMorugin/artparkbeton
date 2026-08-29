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
            class="emblaCatalogCard__slideImage"
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
      <EmblaButtonFullScreen />
    </div>

    <EmblaCatalogThumbs
      :list="props.list"
      :activeThumb="activeThumb"
      @goToSlide="goToSlide"
    />
  </div>
</template>

<script setup lang="ts">
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-vue";
import type { CatalogList } from "~/types/catalog";

const [emblaRef, emblaApi] = useEmblaCarousel();

const props = defineProps<{
  list: CatalogList[];
}>();

const activeThumb = ref(0);

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
  emblaApi.value.scrollTo(slide.id, false);
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
  }
}
</style>
