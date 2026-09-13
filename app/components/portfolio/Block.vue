<template>
  <div class="portfolioBlock">
    <div class="portfolioBlock__grid">
      <div class="portfolioBlock__element portfolioBlock__element_one">
        <img
          :src="props.imageList[0]?.image550"
          :alt="props.imageList[0]?.title"
          class="portfolioBlock__image"
        />
      </div>
      <div class="portfolioBlock__element portfolioBlock__element_two">
        <img
          :src="props.imageList[1]?.image550"
          :alt="props.imageList[1]?.title"
          class="portfolioBlock__image"
        />
      </div>
      <div class="portfolioBlock__element portfolioBlock__element_three">
        <img
          :src="props.imageList[2]?.image550"
          :alt="props.imageList[2]?.title"
          class="portfolioBlock__image"
        />
      </div>
    </div>
    <div class="portfolioBlock__grid">
      <div class="portfolioBlock__element portfolioBlock__element_four">
        <img
          :src="props.imageList[3]?.image550"
          :alt="props.imageList[3]?.title"
          class="portfolioBlock__image"
        />
      </div>
      <div class="portfolioBlock__element portfolioBlock__element_five">
        <img
          :src="props.imageList[4]?.image550"
          :alt="props.imageList[4]?.title"
          class="portfolioBlock__image"
        />
      </div>
      <div class="portfolioBlock__element portfolioBlock__element_six">
        <img
          :src="props.imageList[5]?.image550"
          :alt="props.imageList[5]?.title"
          class="portfolioBlock__image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPortfolioForCard } from "~/types/product";

const props = defineProps<{
  imageList: IPortfolioForCard[];
}>();
</script>

<style lang="scss" scoped>
.portfolioBlock {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-top: 20px;
  padding: 5px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 3vw);
    gap: 5px;

    @media (max-width: 767px) {
      grid-template-rows: repeat(8, 8vw);
    }
  }

  &__element {
    background: $black-one;
    border-radius: $br-xs;
    overflow: hidden;

    &_one {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 5;
      animation: opacity-move 8s ease infinite;
    }

    &_two {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 5;
      animation: opacity-move 9s ease infinite;
    }

    &_three {
      grid-column-start: 1;
      grid-column-end: 9;
      grid-row-start: 5;
      grid-row-end: 9;
      animation: opacity-move 10s ease infinite;
    }

    &_four {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 9;
      animation: opacity-move 11s ease infinite;
    }

    &_five {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 5;
      animation: opacity-move 12s ease infinite;
    }

    &_six {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 5;
      grid-row-end: 9;
      animation: opacity-move 13s ease infinite;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

@keyframes opacity-move {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
