<template>
  <div class="modalProductImageFullScreen" click.stop>
    <div class="modalProductImageFullScreen__container">
      <HeaderNavButton
        name="close"
        @click="emits('closeModal')"
        class="modalProductImageFullScreen__close"
      />

      <EmblaProductImageCarousel :imageList="props.imageList" :isModal="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPortfolioImageList } from "~/types/portfolio";

const props = defineProps<{
  imageList: IPortfolioImageList[];
}>();

const emits = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.modalProductImageFullScreen {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  backdrop-filter: blur(15px) grayscale(50%) brightness(50%);
  z-index: 10;
  overflow: hidden;

  &__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 11;
  }
}
</style>
