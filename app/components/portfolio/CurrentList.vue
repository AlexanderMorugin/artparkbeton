<template>
  <section class="portfolioCurrentList">
    <PortfolioCurrentListCard
      v-for="item in portfolioStep"
      :key="item.id"
      :item="item"
      :list="portfolioStep"
    />
  </section>
</template>

<script setup lang="ts">
import { portfolioStep } from "~/mock/portfolio/portfolio-step";
</script>

<style lang="scss" scoped>
.portfolioCurrentList {
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
    row-gap: 20px;
  }
}
</style>
