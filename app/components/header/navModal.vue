<script setup lang="ts">
const props = defineProps<{
  place: string;
  title: string;
  name: string;
}>();

const emits = defineEmits(["closeModal"]);
</script>

<template>
  <div class="headerNavModal" click.stop>
    <div class="headerNavModal__container">
      <div class="headerNavModal__top">
        <span v-if="props.name === 'chat'"> {{ props.title }}</span>
        <HeaderNavButton name="close" @click="emits('closeModal')" />
        <span v-if="props.name === 'nav'"> {{ props.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.headerNavModal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  animation: filter 3s ease;
  backdrop-filter: blur(15px) grayscale(50%);
  overflow-y: auto;
  z-index: 10;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    height: 100%;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid $white-mask-three;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
