<template>
  <section class="productPortfolioForCard">
    <ButtonLinkToPage path="/portfolio/step" title="Смотреть портфолио" />
    <PortfolioBlock :imageList="props.imageList" />
  </section>
</template>

<script setup lang="ts">
import type { IPortfolioForCard } from "~/types/product";

const props = defineProps<{
  imageList: IPortfolioForCard[];
}>();
</script>

<style lang="scss" scoped>
.productPortfolioForCard {
  margin-top: 100px;
}
</style>
