<template>
  <section class="catalog">
    <CatalogListCard v-for="item in catalog" :key="item.id" :item="item" />
  </section>
</template>

<script setup lang="ts">
import { catalog } from "~/mock/catalog";
</script>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  padding-bottom: 1rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}
</style>
