<template>
  <div class="headerNavModal" click.stop>
    <div class="headerNavModal__container">
      <div class="headerNavModal__top">
        <span v-if="props.name === 'chat'" class="headerNavModal__topTitle">
          {{ props.title }}</span
        >
        <HeaderNavButton name="close" @click="emits('closeModal')" />
        <span v-if="props.name === 'nav'" class="headerNavModal__topTitle">
          {{ props.title }}</span
        >
      </div>

      <HeaderNav
        v-if="props.name === 'nav'"
        place="mobile"
        @closeModal="emits('closeModal')"
      />

      <HeaderChat v-if="props.name === 'chat'" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  name: string;
}>();

const emits = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.headerNavModal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  animation: filter 3s ease;
  backdrop-filter: blur(15px) grayscale(50%) brightness(50%);
  overflow-y: auto;
  z-index: 10;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    height: 100%;

    @media (max-width: 1024px) {
      gap: 1rem;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
    border-bottom: 1px solid $white-mask-three;
    padding-left: 1rem;
    padding-right: 1rem;

    @media (max-width: 1024px) {
      min-height: 60px;
    }
  }

  &__topTitle {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: $orange-four;
  }
}
</style>
