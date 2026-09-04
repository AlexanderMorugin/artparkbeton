<template>
  <section class="stepBlock">
    <slot />
    <ButtonOptionToogle />
  </section>
</template>

<style lang="scss" scoped>
.stepBlock {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: $br-s;
  border: 1px solid $white-mask-five;
  background: $gradient-blue-one;
  margin-top: 40px;
  padding: 20px;

  height: 36px;
  // overflow: hidden;

  @media (max-width: 1024px) {
    padding: 10px;
  }
}
</style>
