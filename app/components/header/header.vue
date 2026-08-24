<template>
  <header class="header">
    <ContainerPage class="header__container">
      <HeaderNavButton v-if="isScreenLarge" name="nav" @click="openNavModal" />
      <Logo />
      <HeaderNav v-if="!isScreenLarge" place="desktop" />
      <HeaderNavButton
        v-if="isScreenLarge"
        name="chat"
        @click="openChatModal"
      />
    </ContainerPage>
  </header>

  <!-- Модалка меню -->
  <Teleport to="#teleports">
    <Transition name="left">
      <HeaderNavModal
        v-if="isNavModalOpen"
        title="Меню"
        name="nav"
        @close-modal="isNavModalOpen = false"
      />
    </Transition>
  </Teleport>

  <!-- Модалка чата -->
  <Teleport to="#teleports">
    <Transition name="right">
      <HeaderNavModal
        v-if="isChatModalOpen"
        title="Связь"
        name="chat"
        @close-modal="isChatModalOpen = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { isScreenLarge } = useResizeLarge();

const isNavModalOpen = ref(false);
const isChatModalOpen = ref(false);

const openNavModal = () => (isNavModalOpen.value = true);
const openChatModal = () => (isChatModalOpen.value = true);
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  animation: filter 3s ease;
  backdrop-filter: blur(15px) grayscale(50%);
  z-index: 3;
  border-bottom: 1px solid $white-mask-three;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 70px;
  }
}
.left-enter-active,
.left-leave-active {
  transition: all 0.3s ease;
}
.left-enter-from,
.left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
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
