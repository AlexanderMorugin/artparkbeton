<template>
  <NuxtLink :to="props.item.route" class="catalogPictureCard">
    <div class="catalogPictureCard__imageBlock">
      <img
        :src="props.item.image"
        :alt="props.item.title"
        class="catalogPictureCard__image"
      />
      <div class="catalogPictureCard__forward">
        <ButtonForward />
      </div>
    </div>
    <div class="catalogPictureCard__textBlock">
      <div class="catalogPictureCard__titleBlock">
        <TitleBlock :title="props.item.title" />
        <div class="catalogPictureCard__subtitle">
          {{ props.item.subtitle }}
        </div>
      </div>
    </div>
  </NuxtLink>
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
  flex-direction: column;
  gap: 20px;
  background: $white-mask-five;
  border-radius: $br-l;
  padding: 6px;

  &__imageBlock {
    position: relative;
    height: 300px;
    border-radius: $br-m;
    overflow: hidden;

    @media (max-width: 767px) {
      height: 200px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease;
  }

  &__forward {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 14px;
    padding-right: 14px;

    @media (max-width: 767px) {
      padding-left: 4px;
      padding-right: 4px;
    }
  }

  &__subtitle {
    color: $white-mask-one;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 20px;
    border-top: 1px solid $white-mask-three;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    transition: 0.2s ease;

    @media (max-width: 767px) {
      -webkit-line-clamp: 2;
    }
  }
}
.catalogPictureCard:hover .catalogPictureCard__image {
  transform: scale(1.05);
}
.catalogPictureCard:hover .catalogPictureCard__subtitle {
  border-top: 1px solid $orange-one;
}
</style>
