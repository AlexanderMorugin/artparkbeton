<template>
  <section class="portfolioList">
    <PortfolioListCard
      v-for="item in props.portfolioList"
      :key="item.id"
      :item="item"
    />
  </section>
</template>

<script setup lang="ts">
import type { IPortfolio } from "~/types/portfolio";

const props = defineProps<{
  portfolioList: IPortfolio[];
}>();
</script>

<style lang="scss" scoped>
.portfolioList {
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
