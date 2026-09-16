<template>
  <section class="productPortfolioForCard">
    <ButtonLinkToPage :path="props.path" :title="props.title" />
    <PortfolioBlock :imageList="props.imageList" />
  </section>
</template>

<script setup lang="ts">
import type { IPortfolioForCard } from "~/types/product";

const props = defineProps<{
  path: string;
  title: string;
  imageList: IPortfolioForCard[];
}>();
</script>

<style lang="scss" scoped>
.productPortfolioForCard {
  margin-top: 100px;
}
</style>
