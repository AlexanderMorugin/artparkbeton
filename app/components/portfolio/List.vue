<template>
  <section class="portfolio">
    <PortfolioListCard v-for="item in portfolio" :key="item.id" :item="item" />
  </section>
</template>

<script setup lang="ts">
import { portfolio } from "~/mock/portfolio";
</script>

<style lang="scss" scoped>
.portfolio {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  padding-bottom: 1rem;

  // border: 1px solid red;

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
