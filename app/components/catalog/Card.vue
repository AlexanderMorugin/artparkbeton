<template>
  <div class="catalogCard">
    <EmblaCatalogCard :imageList="props.imageList" :isModal="false" />
    <StepDetails />
  </div>
</template>

<script setup lang="ts">
import type { IPortfolioImageList } from "~/types/portfolio";

const props = defineProps<{
  imageList: IPortfolioImageList[];
}>();
</script>

<style lang="scss" scoped>
.catalogCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}
</style>
