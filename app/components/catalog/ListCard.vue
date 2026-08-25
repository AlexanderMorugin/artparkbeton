<template>
  <NuxtLink :to="`/catalog${item.route}`" class="catalogListCard">
    <div class="catalogListCard__titleBlock">
      <div class="catalogListCard__title">
        <TitleBlock :title="item.title" />
      </div>
      <span class="catalogListCard__subtitle">{{ item.subtitle }}</span>
    </div>

    <div class="catalogListCard__markBlock">
      <div class="catalogListCard__mark">
        <IconArrowIos class="catalogListCard__markIcon" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Catalog } from "~/types/catalog";

const props = defineProps<{
  item: Catalog;
}>();
</script>

<style lang="scss" scoped>
.catalogListCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  background: $white-mask-five;
  border-radius: $br-m;
  padding: 1rem;
  transition: 0.2s ease;

  &:hover {
    background: $white-mask-four;
  }

  &__titleBlock {
    display: flex;
    flex-direction: column;
  }

  &__title {
    min-height: 75px;
    border-bottom: 1px solid $white-mask-three;

    @media (max-width: 1024px) {
      min-height: 62px;
    }
  }

  &__subtitle {
    font-size: 14px;
    color: $white-mask-two;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    padding-top: 1rem;
  }

  &__markBlock {
    display: flex;
    justify-content: right;
  }

  &__mark {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: $orange-four;
  }

  &__markIcon {
    width: 16px;
    height: 16px;
    fill: $black-one;
  }
}

.catalogListCard:hover .catalogListCard__mark {
  background: $orange-one;
}
</style>
