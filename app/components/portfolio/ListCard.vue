<template>
  <NuxtLink :to="`/portfolio${item.route}`" class="portfolioListCard">
    <div class="portfolioListCard__title">
      <TitleCatalogListCard :title="item.title" />
    </div>

    <div class="portfolioListCard__imageBlock">
      <img
        :src="item.image"
        :alt="item.title"
        class="portfolioListCard__image"
      />
    </div>

    <div class="portfolioListCard__forward">
      <span class="portfolioListCard__text">Смотреть галерею</span>
      <ButtonForward />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IPortfolio } from "~/types/portfolio";

const props = defineProps<{
  item: IPortfolio;
}>();
</script>

<style lang="scss" scoped>
.portfolioListCard {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  background: $gradient-white-three;
  border-radius: $br-m;
  border: 1px solid $white-mask-four;
  overflow: hidden;
  transition: 0.2s ease;
  // padding: 2px;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.6) 0px 5px 15px;
  }

  &__title {
    padding: 10px;
  }

  &__forward {
    position: relative;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 20px;
    background: $gradient-black-one;
    padding: 16px 20px;
  }

  &__text {
    position: relative;
    font-size: 14px;
    letter-spacing: 1px;
  }

  &__imageBlock {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 170px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
