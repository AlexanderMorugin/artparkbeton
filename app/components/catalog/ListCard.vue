<template>
  <NuxtLink :to="`/catalog${item.route}`" class="catalogListCard">
    <div class="catalogListCard__titleBlock">
      <div class="catalogListCard__title">
        <TitleBlock :title="item.title" />
      </div>
      <span class="catalogListCard__subtitle">{{ item.subtitle }}</span>
    </div>

    <IconStep
      v-if="item.route === '/step'"
      class="catalogListCard__clip catalogListCard__clip_step"
    />
    <IconTile
      v-if="item.route === '/tile'"
      class="catalogListCard__clip catalogListCard__clip_tile"
    />
    <IconSill
      v-if="item.route === '/sill'"
      class="catalogListCard__clip catalogListCard__clip_sill"
    />
    <IconInterior
      v-if="item.route === '/interior'"
      class="catalogListCard__clip catalogListCard__clip_interior"
    />
    <IconSouvenir
      v-if="item.route === '/souvenir'"
      class="catalogListCard__clip catalogListCard__clip_souvenir"
    />
    <IconMonument
      v-if="item.route === '/monument'"
      class="catalogListCard__clip catalogListCard__clip_monument"
    />
    <IconBaluster
      v-if="item.route === '/baluster'"
      class="catalogListCard__clip catalogListCard__clip_baluster"
    />
    <IconWorktop
      v-if="item.route === '/worktop'"
      class="catalogListCard__clip catalogListCard__clip_worktop"
    />

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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  background: $white-one;
  border-radius: $br-m;
  padding: 1rem;
  transition: 0.2s ease;
  overflow: hidden;

  &:hover {
    background: $white-mask-four;
  }

  &__titleBlock {
    display: flex;
    flex-direction: column;
  }

  &__title {
    color: $black-one;
    min-height: 75px;
    border-bottom: 1px solid $black-mask-two;

    @media (max-width: 1024px) {
      min-height: 62px;
    }
  }

  &__subtitle {
    font-size: 14px;
    color: $black-mask-two;
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

  &__clip {
    position: absolute;

    fill: $black-one;

    &_step {
      bottom: -20px;
      left: -20px;
      width: 200px;
      height: 200px;
    }

    &_tile {
      bottom: -20px;
      left: 0;
      width: 150px;
      height: 150px;
      transform: rotate(157deg);
    }

    &_baluster {
      bottom: -20px;
      left: 20px;
      width: 120px;
      height: 120px;
    }

    &_sill {
      bottom: 0;
      left: 20px;
      width: 150px;
      height: 150px;
    }

    &_worktop {
      bottom: -30px;
      left: 50px;
      width: 150px;
      height: 150px;
    }

    &_interior {
      bottom: -30px;
      left: 50px;
      width: 150px;
      height: 150px;
    }

    &_souvenir {
      bottom: 0;
      left: 50px;
      width: 100px;
      height: 100px;
    }

    &_monument {
      bottom: -30px;
      left: 50px;
      width: 150px;
      height: 150px;
    }
  }
}

.catalogListCard:hover .catalogListCard__mark {
  background: $orange-one;
}
</style>
