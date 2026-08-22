<script setup lang="ts">
import Logo from "../logo/logo.vue";

const { isScreenLarge } = useResizeLarge();
</script>

<template>
  <header class="header">
    <ContainerPage class="header__container">
      <Logo />
      <HeaderNavButton v-if="isScreenLarge" />
      <HeaderNav v-else />
    </ContainerPage>
  </header>

  <!-- Модалка меню -->
  <Teleport to="#teleports">
    <Transition name="right">
      <HeaderNavModal />
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid $white-mask-three;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 70px;
  }
}
.right-enter-active,
.right-leave-active {
  transition: all 0.3s ease;
}
.right-enter-from,
.right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
