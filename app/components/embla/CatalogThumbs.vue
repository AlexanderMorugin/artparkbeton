<template>
  <div
    :class="['emblaCatalogThumbs', { emblaCatalogThumbs_modal: props.isModal }]"
  >
    <button
      v-for="item in props.list"
      :key="item.id"
      :class="[
        'emblaCatalogThumbs__button',
        { emblaCatalogThumbs__button_active: props.activeThumb === item.id },
        { emblaCatalogThumbs__button_modal: props.isModal },
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
  isModal: boolean;
}>();

const emits = defineEmits<{
  goToSlide: [slide: CatalogList];
}>();
</script>

<style lang="scss" scoped>
.emblaCatalogThumbs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;

  &_modal {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 20;
    margin-left: auto;
    margin-right: auto;
    padding: 4px;
    backdrop-filter: blur(15px) grayscale(50%) brightness(50%);
  }

  &__button {
    width: 100%;
    max-width: 100px;
    height: 100%;
    padding: 0;

    &_modal {
      border-radius: 0;
      border: 1px solid $black-mask-two;
    }

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
