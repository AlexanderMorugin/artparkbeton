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
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
