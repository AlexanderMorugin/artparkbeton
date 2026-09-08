<template>
  <div class="emblaCatalogCarousel">
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

    <div class="embla">
      <div class="embla__viewport" ref="emblaRef">
        <div class="embla__container">
          <div
            v-for="item in props.catalog"
            :key="item.id"
            class="embla__slide"
          >
            <EmblaCatalogCarouselListCard :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import type { EmblaCarouselType } from "embla-carousel";
import type { Catalog } from "~/types/catalog";

const props = defineProps<{
  catalog: Catalog[];
}>();

const [emblaRef, emblaApi] = emblaCarouselVue({
  align: "start",
});

const canScrollPrev = ref(false);
const canScrollNext = ref(false);
const scrollNextDisabled = ref(false);
const scrollPrevDisabled = ref(false);

const onSelect = (emblaApi: EmblaCarouselType) => {
  scrollNextDisabled.value = !emblaApi.canScrollNext();
  scrollPrevDisabled.value = !emblaApi.canScrollPrev();
};

// Листать влево, по нажатию на стрелку Prev
const scrollNext = () => emblaApi?.value?.scrollNext();

// Листать враво, по нажатию на стрелку Next
const scrollPrev = () => emblaApi?.value?.scrollPrev();

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
.emblaCatalogCarousel {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.embla {
  max-width: 92vw;
  // max-width: 90vw;
  --slide-spacing: 1rem;
  --slide-size: 340px;
  // --slide-size-m: 280px;
  --slide-size-m: 90%;

  // border: 1px solid red;

  @media (max-width: 768px) {
    // max-width: 85vw;
    width: 100%;
  }
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);

  // width: 90%;
}
.embla__slide {
  // min-width: 0;
  flex: 0 0 var(--slide-size);
  padding-left: var(--slide-spacing);
  // padding-top: 30px;

  // min-height: 200px;
  // border: 1px solid yellow;

  @media (max-width: 768px) {
    flex: 0 0 var(--slide-size-m);
  }
}
</style>
