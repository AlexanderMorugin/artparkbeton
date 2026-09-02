<template>
  <div class="containerPage">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.containerPage {
  max-width: $screen-xxl;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  overflow: hidden;
}
</style>
