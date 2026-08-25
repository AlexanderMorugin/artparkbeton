<template>
  <NuxtLink :to="`/catalog${item.route}`" class="catalogListCard">
    <TitleBlock :title="item.title" />
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
</style>
