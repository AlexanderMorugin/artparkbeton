<template>
  <div class="portfolioBlock">
    <div class="portfolioBlock__grid">
      <div class="portfolioBlock__element portfolioBlock__element_one">
        <img
          src="/images/catalog/step/outside/steps-outside-5-n.webp"
          alt="image"
          class="portfolioBlock__image"
        />
      </div>
      <div class="portfolioBlock__element portfolioBlock__element_two">
        <img
          src="/images/catalog/step/outside/steps-outside-1-n.webp"
          alt="image"
          class="portfolioBlock__image"
        />
      </div>
      <div class="portfolioBlock__element portfolioBlock__element_three">
        <img
          src="/images/catalog/step/outside/steps-outside-2-n.webp"
          alt="image"
          class="portfolioBlock__image"
        />
      </div>
    </div>
    <div class="portfolioBlock__grid">
      <div class="portfolioBlock__element portfolioBlock__element_four">
        <img
          src="/images/catalog/step/outside/steps-outside-3-n.webp"
          alt="image"
          class="portfolioBlock__image"
        />
      </div>
      <div class="portfolioBlock__element portfolioBlock__element_five">
        <img
          src="/images/catalog/step/outside/steps-outside-4-n.webp"
          alt="image"
          class="portfolioBlock__image"
        />
      </div>
      <div class="portfolioBlock__element portfolioBlock__element_six">
        <img
          src="/images/catalog/step/outside/steps-outside-5-n.webp"
          alt="image"
          class="portfolioBlock__image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.portfolioBlock {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  // background: $white-mask-one;
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
      grid-template-rows: repeat(8, 5vw);
    }
  }

  &__element {
    background: $black-one;
    border-radius: $br-xs;
    overflow: hidden;
    // border: 1px solid red;

    &_one {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 5;
    }

    &_two {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 5;
    }

    &_three {
      grid-column-start: 1;
      grid-column-end: 9;
      grid-row-start: 5;
      grid-row-end: 9;
    }

    &_four {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 9;
    }

    &_five {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 5;
    }

    &_six {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 5;
      grid-row-end: 9;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
