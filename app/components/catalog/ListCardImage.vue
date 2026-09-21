<template>
  <section class="catalogListCardImage">
    <CatalogPictureCard
      v-for="item in props.list"
      :key="item.id"
      :item="item"
    />
  </section>
</template>

<script setup lang="ts">
import type { ICatalogListCardImage } from "~/types/catalog";

const props = defineProps<{
  list: ICatalogListCardImage[];
}>();
</script>

<style lang="scss" scoped>
.catalogListCardImage {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
