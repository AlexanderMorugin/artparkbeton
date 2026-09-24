<template>
  <div class="containerPageMobile">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.containerPageMobile {
  max-width: $screen-xxl;
  margin: 0 auto;

  @media (max-width: 576px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
