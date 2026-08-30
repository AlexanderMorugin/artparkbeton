<template>
  <section class="stepCard">
    <EmblaCatalogCard :list="props.list" :isModal="false" />
  </section>
</template>

<script setup lang="ts">
import type { CatalogList } from "~/types/catalog";

const props = defineProps<{
  list: CatalogList[];
}>();
</script>

<style lang="scss" scoped>
.stepCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
