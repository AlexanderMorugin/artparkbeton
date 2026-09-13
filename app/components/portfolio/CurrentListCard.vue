<template>
  <div
    @click="isPortfolioImageModalOpen = true"
    class="portfolioCurrentListCard"
  >
    <div class="portfolioCurrentListCard__imageBlock">
      <img
        :src="item.image550"
        :alt="item.title"
        class="portfolioCurrentListCard__image"
      />
    </div>
    <span class="portfolioCurrentListCard__title">
      {{ item.title }}
    </span>
  </div>

  <!-- Модалка картинки -->
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalProductImageFullScreen
        v-if="isPortfolioImageModalOpen"
        :imageList="props.imageList"
        @closeModal="isPortfolioImageModalOpen = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { IPortfolioImageList } from "~/types/portfolio";

const props = defineProps<{
  item: IPortfolioImageList;
  imageList: IPortfolioImageList[];
}>();

const isPortfolioImageModalOpen = ref(false);
</script>

<style lang="scss" scoped>
.portfolioCurrentListCard {
  display: flex;
  flex-direction: column;
  background: $white-mask-five;
  border-radius: $br-m;
  overflow: hidden;
  cursor: pointer;

  &__imageBlock {
    display: block;
    width: 100%;
    height: 210px;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    text-align: center;
  }
}
</style>
