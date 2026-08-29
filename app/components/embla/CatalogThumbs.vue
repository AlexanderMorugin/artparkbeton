<template>
  <div class="emblaCatalogThumbs">
    <button
      v-for="item in props.list"
      :key="item.id"
      :class="[
        'emblaCatalogThumbs__button',
        { emblaCatalogThumbs__button_active: props.activeThumb === item.id },
      ]"
      @click="emits('goToSlide', item)"
    >
      <img
        :src="item.imageThumb"
        :alt="item.title"
        class="emblaCatalogThumbs__image"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { CatalogList } from "~/types/catalog";

const props = defineProps<{
  list: CatalogList[];
  activeThumb: number;
}>();

const emits = defineEmits<{
  goToSlide: [slide: CatalogList];
}>();
</script>

<style lang="scss" scoped>
.emblaCatalogThumbs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  &__button {
    width: 100%;
    padding: 0;
    border-radius: $br-xs;
    overflow: hidden;

    &_active {
      cursor: auto;
      transition: 0.3s ease-in-out;
      filter: blur(2px);
      opacity: 0.4;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
