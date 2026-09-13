<template>
  <section class="portfolioCurrentList">
    <div class="portfolioCurrentList__container">
      <TitleBlock title="Ступени для крыльца" />
      <div class="portfolioCurrentList__grid">
        <PortfolioCurrentListCard
          v-for="item in props.imageList"
          :key="item.id"
          :item="item"
          :imageList="props.imageList"
        />
      </div>
    </div>

    <!-- <div class="portfolioCurrentList__container">
      <TitleBlock title="Ступени для лестницы" />
      <div class="portfolioCurrentList__grid">
        <PortfolioCurrentListCard
          v-for="item in portfolioStepInside"
          :key="item.id"
          :item="item"
          :list="portfolioStepInside"
        />
      </div>
    </div> -->

    <!-- <div class="portfolioCurrentList__container">
      <TitleBlock title="Ступени криволинейные" />
      <div class="portfolioCurrentList__grid">
        <PortfolioCurrentListCard
          v-for="item in portfolioStepCurved"
          :key="item.id"
          :item="item"
          :list="portfolioStepCurved"
        />
      </div>
    </div> -->
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

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-bottom: 1rem;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
}
</style>
