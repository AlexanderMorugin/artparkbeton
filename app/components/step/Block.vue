<template>
  <section class="stepBlock">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.stepBlock {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: $br-s;

  background: $gradient-blue-one;
  margin-top: 40px;
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 10px;
  }
}
</style>
