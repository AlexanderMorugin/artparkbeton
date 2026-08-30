<template>
  <button @click="emits('openImageModal')" class="emblaButtonFullScreen">
    <IconFullScreen class="emblaButtonFullScreen__icon" />
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(["openImageModal"]);
</script>

<style lang="scss" scoped>
.emblaButtonFullScreen {
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid $white-mask-three;
  backdrop-filter: blur(5px);
  z-index: 1;
  transition: 0.2s ease;

  @media (max-width: 1280px) {
    width: 30px;
    height: 30px;
  }

  &:hover {
    backdrop-filter: blur(15px) grayscale(50%);
    border: 1px solid $white-one;
  }

  &__icon {
    fill: $white-one;
  }
}
</style>
