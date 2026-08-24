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
    width: 50%;
    height: 40%;
    border-radius: 50%;
    background: $orange-one;
  }
}
</style>
