<template>
  <div class="blockGradientPrime">
    <div class="blockGradientPrime__overlay" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.blockGradientPrime {
  position: relative;
  overflow: hidden;

  &__overlay {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 60%;
    border-radius: 50%;
    background: $orange-one;

    @media (max-width: 576px) {
      display: none;
    }
  }
}
</style>
