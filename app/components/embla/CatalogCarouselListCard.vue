<template>
  <div class="emblaCatalogCarouselListCard">
    <div class="emblaCatalogCarouselListCard__title">{{ item.title }}</div>

    <IconStep
      v-if="item.route === '/step'"
      class="emblaCatalogCarouselListCard__clip emblaCatalogCarouselListCard__clip_step"
    />
    <IconTile
      v-if="item.route === '/tile'"
      class="emblaCatalogCarouselListCard__clip emblaCatalogCarouselListCard__clip_tile"
    />
    <IconSill
      v-if="item.route === '/sill'"
      class="emblaCatalogCarouselListCard__clip emblaCatalogCarouselListCard__clip_sill"
    />
    <IconInterior
      v-if="item.route === '/interior'"
      class="emblaCatalogCarouselListCard__clip emblaCatalogCarouselListCard__clip_interior"
    />
    <IconSouvenir
      v-if="item.route === '/souvenir'"
      class="emblaCatalogCarouselListCard__clip emblaCatalogCarouselListCard__clip_souvenir"
    />
    <IconMonument
      v-if="item.route === '/monument'"
      class="emblaCatalogCarouselListCard__clip emblaCatalogCarouselListCard__clip_monument"
    />
    <IconBaluster
      v-if="item.route === '/baluster'"
      class="emblaCatalogCarouselListCard__clip emblaCatalogCarouselListCard__clip_baluster"
    />
    <IconWorktop
      v-if="item.route === '/worktop'"
      class="emblaCatalogCarouselListCard__clip emblaCatalogCarouselListCard__clip_worktop"
    />

    <div class="emblaCatalogCarouselListCard__forward">
      <ButtonLinkIcon
        place="embla"
        :route="`/catalog${item.route}`"
        class="ultrabetonPromo__buttonLink"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Catalog } from "~/types/catalog";

const props = defineProps<{
  item: Catalog;
}>();
</script>

<style lang="scss" scoped>
.emblaCatalogCarouselListCard {
  position: relative;
  display: block;
  width: 100%;
  min-height: 200px;
  background: $gradient-white-two;
  border-radius: $br-m;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: grab;

  &__title {
    position: absolute;
    top: 30px;
    right: 10px;
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 28px;
    letter-spacing: 2px;
    color: $white-mask-one;
    text-align: center;
    z-index: 2;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  &__forward {
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    justify-content: right;
  }

  &__clip {
    position: absolute;
    fill: $black-one;

    &_step {
      bottom: -44px;
      left: -20px;
      width: 200px;
      height: 200px;
    }

    &_tile {
      bottom: -20px;
      left: -6px;
      width: 150px;
      height: 150px;
      transform: rotate(157deg);
    }

    &_baluster {
      bottom: -44px;
      left: -20px;
      width: 130px;
      height: 130px;
    }

    &_sill {
      bottom: -20px;
      left: 20px;
      width: 140px;
      height: 140px;
    }

    &_worktop {
      bottom: -30px;
      left: 50px;
      width: 150px;
      height: 150px;
    }

    &_interior {
      bottom: -34px;
      left: -24px;
      width: 150px;
      height: 150px;
    }

    &_souvenir {
      bottom: -20px;
      left: 0;
      width: 130px;
      height: 130px;
    }

    &_monument {
      bottom: -50px;
      left: 0;
      width: 150px;
      height: 150px;
    }
  }
}
</style>
