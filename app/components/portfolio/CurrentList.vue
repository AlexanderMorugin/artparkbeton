<template>
  <section class="portfolioCurrentList">
    <div class="portfolioCurrentList__grid">
      <PortfolioCurrentListCard
        v-for="item in props.imageList"
        :key="item.id"
        :item="item"
        :imageList="props.imageList"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IPortfolioImageList } from "~/types/portfolio";

const props = defineProps<{
  imageList: IPortfolioImageList[];
}>();
</script>

<style lang="scss" scoped>
.portfolioCurrentList {
  display: flex;
  flex-direction: column;
  gap: 100px;

  &__grid {
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
      column-gap: 10px;
      row-gap: 30px;
    }
  }
}
</style>
