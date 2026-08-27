<template>
  <section class="stepCard">
    <div class="stepCard__imageBlock">
      <div class="stepCard__imageBigBlock">
        <img
          src="/images/catalog/step/step-inside-800-500.webp"
          alt="Step"
          class="stepCard__imageBig"
        />
        <button class="stepCard__control stepCard__control_prev">
          <IconArrowIos
            class="stepCard__controlIcon stepCard__controlIcon_prev"
          />
        </button>
        <button class="stepCard__control stepCard__control_next">
          <IconArrowIos class="stepCard__controlIcon" />
        </button>
      </div>
      <div class="stepCard__imageList">
        <div class="stepCard__imageSmallBlock">
          <img
            src="/images/catalog/step/step-outside-800-500.webp"
            alt="Step"
            class="stepCard__imageSmall"
          />
        </div>
        <div class="stepCard__imageSmallBlock">
          <img
            src="/images/catalog/step/step-curved-800-500.webp"
            alt="Step"
            class="stepCard__imageSmall"
          />
        </div>
        <div class="stepCard__imageSmallBlock">
          <img
            src="/images/catalog/step/step-inside-800-500.webp"
            alt="Step"
            class="stepCard__imageSmall"
          />
        </div>
        <div class="stepCard__imageSmallBlock">
          <img
            src="/images/catalog/step/step-outside-800-500.webp"
            alt="Step"
            class="stepCard__imageSmall"
          />
        </div>
        <div class="stepCard__imageSmallBlock">
          <img
            src="/images/catalog/step/step-curved-800-500.webp"
            alt="Step"
            class="stepCard__imageSmall"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.stepCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-height: 400px;

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
  }

  &__imageBig {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__imageList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }

  &__imageSmallBlock {
    height: 100px;
    border-radius: $br-xs;
    overflow: hidden;

    @media (max-width: 1280px) {
      height: 60px;
    }

    @media (max-width: 576px) {
      height: 50px;
    }
  }

  &__imageSmall {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    border: 1px solid $white-mask-three;
    backdrop-filter: blur(5px);
    z-index: 1;
    transition: 0.2s ease;

    &:hover {
      backdrop-filter: blur(15px) grayscale(50%);
      border: 1px solid $white-one;
    }

    &_prev {
      left: 10px;
    }

    &_next {
      right: 10px;
    }
  }

  &__controlIcon {
    fill: $white-one;
    transition: 0.2s ease;

    &_prev {
      transform: rotate(180deg);
    }
  }
}
</style>
