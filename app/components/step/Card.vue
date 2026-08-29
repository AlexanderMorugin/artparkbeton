<template>
  <section class="stepCard">
    <div class="embla stepCard__imageBlock">
      <div class="embla__viewport stepCard__imageBigBlock" ref="emblaRef">
        <div class="embla__container">
          <div v-for="item in imageList" :key="item.id" class="embla__slide">
            <img :src="item.image" alt="Step" class="stepCard__imageBig" />
          </div>
        </div>

        <button
          :class="[
            'stepCard__control stepCard__control_prev',
            { stepCard__control_disabled: !canScrollPrev },
          ]"
          @click="scrollPrev"
          :disabled="!canScrollPrev"
        >
          <IconArrowIos
            :class="[
              'stepCard__controlIcon stepCard__controlIcon_prev',
              { stepCard__controlIcon_disabled: !canScrollPrev },
            ]"
          />
        </button>
        <button
          :class="[
            'stepCard__control stepCard__control_next',
            { stepCard__control_disabled: !canScrollNext },
          ]"
          @click="scrollNext"
          :disabled="!canScrollNext"
        >
          <IconArrowIos
            :class="[
              'stepCard__controlIcon',
              { stepCard__controlIcon_disabled: !canScrollNext },
            ]"
          />
        </button>

        <button class="stepCard__full">
          <IconFullScreen class="stepCard__controlIcon" />
        </button>
      </div>

      <div class="stepCard__imageThumbsList">
        <button
          v-for="item in imageList"
          :key="item.id"
          :class="[
            'stepCard__imageThumbsBlock',
            { stepCard__imageThumbsBlock_active: activeThumb === item.id },
          ]"
          @click="goToSlide(item.id)"
        >
          <img :src="item.image" alt="Step" class="stepCard__imageThumb" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-vue";

const [emblaRef, emblaApi] = useEmblaCarousel();

const imageList = ref([
  { id: 0, image: "/images/catalog/step/step-outside-800-500.webp" },
  { id: 1, image: "/images/catalog/step/step-inside-800-500.webp" },
  { id: 2, image: "/images/catalog/step/step-curved-800-500.webp" },
  { id: 3, image: "/images/catalog/step/step-outside-800-500.webp" },
  { id: 4, image: "/images/catalog/step/step-inside-800-500.webp" },
]);

const activeThumb = ref(1);

const canScrollPrev = ref(false);
const canScrollNext = ref(false);
const scrollNextDisabled = ref(false);
const scrollPrevDisabled = ref(false);

const onSelect = (emblaApi: EmblaCarouselType) => {
  scrollNextDisabled.value = !emblaApi.canScrollNext();
  scrollPrevDisabled.value = !emblaApi.canScrollPrev();
};

const goToSlide = (index: number) => {
  if (!emblaApi.value) return;

  activeThumb.value = index;
  emblaApi.value.scrollTo(index, false);
};

const scrollNext = () => emblaApi?.value?.scrollNext();
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
.embla__viewport {
  border-radius: $br-xs;
  overflow: hidden;
}

.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
}

.embla__slide {
  position: relative;
  flex: 0 0 100%;
  min-width: 0;
  min-height: 400px;

  @media (max-width: 767px) {
    min-height: 200px;
  }
}

// .embla__prev {
//   background: red;
// }
// .embla__next {
//   background: green;
// }

.stepCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &__imageBlock {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__imageBigBlock {
    position: relative;
    border-radius: $br-xs;
    overflow: hidden;
    height: 100%;
  }

  &__imageBig {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__imageThumbsList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }

  &__imageThumbsBlock {
    height: 100px;
    border-radius: $br-xs;
    overflow: hidden;

    @media (max-width: 1280px) {
      height: 60px;
    }

    @media (max-width: 576px) {
      height: 50px;
    }

    &_active {
      cursor: auto;
      transition: 0.3s ease-in-out;
      filter: blur(2px);
      opacity: 0.4;
    }
  }

  &__imageThumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // border: 2px solid red;
    // backdrop-filter: blur(15px) grayscale(50%) brightness(50%);
  }

  &__control {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid $white-one;
    backdrop-filter: blur(5px);
    z-index: 1;
    transition: 0.2s ease;

    @media (max-width: 1280px) {
      width: 30px;
      height: 30px;
    }

    &:hover {
      backdrop-filter: blur(15px) grayscale(50%);
    }

    &_prev {
      left: 10px;
    }

    &_next {
      right: 10px;
    }

    &_disabled {
      backdrop-filter: blur(0) grayscale(0);
      border: 1px solid $white-mask-three;

      cursor: default;

      &:hover {
        backdrop-filter: blur(0) grayscale(0);
        border: 1px solid $white-mask-three;
      }
    }
  }

  &__controlIcon {
    fill: $white-one;
    // transition: 0.2s ease;

    &_prev {
      transform: rotate(180deg);
    }

    &_disabled {
      fill: $white-mask-three;
    }
  }

  &__full {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid $white-mask-three;
    backdrop-filter: blur(5px);
    z-index: 1;
    transition: 0.2s ease;

    @media (max-width: 1280px) {
      width: 30px;
      height: 30px;
    }

    &:hover {
      backdrop-filter: blur(15px) grayscale(50%);
      border: 1px solid $white-one;
    }
  }
}
</style>
