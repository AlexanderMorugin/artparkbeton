<script setup lang="ts">
import Logo from "../logo/logo.vue";
</script>

<template>
  <header class="header">
    <ContainerPage class="header__container">
      <Logo />
      <HeaderNav />
      <Connect />
    </ContainerPage>
  </header>
</template>

<style lang="scss" scoped>
.header {
  // border: 1px solid $white-one;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
