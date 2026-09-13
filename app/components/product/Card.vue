<template>
  <div class="productCard">
    <EmblaProductImageCarousel :imageList="props.imageList" :isModal="false" />
    <ProductDetails :details="props.details" :prices="props.prices" />
  </div>
</template>

<script setup lang="ts">
import type { IPortfolioImageList } from "~/types/portfolio";
import type { IProductDetails, IProductPrices } from "~/types/product";

const props = defineProps<{
  imageList: IPortfolioImageList[];
  details: IProductDetails;
  prices: IProductPrices[];
}>();
</script>

<style lang="scss" scoped>
.productCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}
</style>
