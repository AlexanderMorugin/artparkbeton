<template>
  <div class="emblaModalCatalogImage" click.stop>
    <div class="emblaModalCatalogImage__container">
      <HeaderNavButton
        name="close"
        @click="emits('closeModal')"
        class="emblaModalCatalogImage__close"
      />

      <EmblaCatalogCard :list="props.list" :isModal="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogList } from "~/types/catalog";

const props = defineProps<{
  list: CatalogList[];
}>();

const emits = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.emblaModalCatalogImage {
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
