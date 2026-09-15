<template>
  <div
    @click="isPortfolioImageModalOpen = true"
    class="portfolioCurrentListCard"
  >
    <div class="portfolioCurrentListCard__imageBlock">
      <img
        :src="isScreenMobile ? item.image300 : item.image550"
        :alt="item.title"
        class="portfolioCurrentListCard__image"
      />
    </div>
    <span class="portfolioCurrentListCard__title">
      {{ item.title }}
    </span>

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
  </div>
</template>

<script setup lang="ts">
import type { IPortfolioImageList } from "~/types/portfolio";

const props = defineProps<{
  item: IPortfolioImageList;
  imageList: IPortfolioImageList[];
}>();

const { isScreenMobile } = useResizeMobile();

const isPortfolioImageModalOpen = ref(false);
</script>

<style lang="scss" scoped>
.portfolioCurrentListCard {
  display: flex;
  flex-direction: column;
  background: $white-mask-five;
  border-radius: $br-m;
  height: fit-content;
  overflow: hidden;
  cursor: pointer;

  &__imageBlock {
    display: block;
    width: 100%;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
