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
      <ButtonForward />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Portfolio } from "~/types/portfolio";

const props = defineProps<{
  item: Portfolio;
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
  padding: 1rem;
  overflow: hidden;
  transition: 0.2s ease;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.6) 0px 5px 15px;
  }

  &__title {
    text-align: end;
    height: 38px;
    border-bottom: 1px solid $white-mask-three;
    transition: 0.2s ease;
  }

  &__forward {
    display: flex;
    justify-content: right;
  }

  &__imageBlock {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 210px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
.portfolioListCard:hover .portfolioListCard__title {
  border-bottom: 1px solid $orange-four;
}
</style>
