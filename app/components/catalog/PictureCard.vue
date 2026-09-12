<template>
  <div
    :class="[
      'catalogPictureCard',
      { catalogPictureCard_right: props.item.float === 'right' },
      { catalogPictureCard_center: props.item.float === 'center' },
    ]"
  >
    <NuxtLink :to="props.item.route" class="catalogPictureCard__link">
      <div class="catalogPictureCard__imageBlock">
        <img
          :src="props.item.image"
          :alt="props.item.title"
          class="catalogPictureCard__image"
        />
      </div>
      <div class="catalogPictureCard__textBlock">
        <div class="catalogPictureCard__titleBlock">
          <TitleBlock :title="props.item.title" />
          <div class="catalogPictureCard__subtitle">
            {{ props.item.subtitle }}
          </div>
        </div>

        <div class="catalogPictureCard__forward">
          <ButtonForward />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { ICatalogListCardImage } from "~/types/catalog";

const props = defineProps<{
  item: ICatalogListCardImage;
}>();
</script>

<style lang="scss" scoped>
.catalogPictureCard {
  display: flex;

  &_right {
    justify-content: right;
  }

  &_center {
    justify-content: center;
  }

  &__link {
    display: grid;
    grid-template-columns: 60% 1fr;
    gap: 20px;
    max-width: 1000px;
    background: $white-mask-five;
    border-radius: $br-l;
    padding: 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      padding: 10px;
    }
  }

  &__imageBlock {
    height: 350px;
    border-radius: $br-m;
    overflow: hidden;

    @media (max-width: 767px) {
      height: 260px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__subtitle {
    color: $white-mask-one;
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid $white-mask-three;
  }

  &__forward {
    display: flex;
    justify-content: right;

    @media (max-width: 767px) {
      padding-bottom: 10px;
      padding-right: 10px;
    }
  }
}
</style>
