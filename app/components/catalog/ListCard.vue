<template>
  <NuxtLink :to="`/catalog${item.route}`" class="catalogListCard">
    <div class="catalogListCard__titleHide">{{ item.title }}</div>
    <div class="catalogListCard__titleBlock">
      <div class="catalogListCard__title">
        <TitleCatalog :title="item.title" />
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

    <div class="catalogListCard__forward">
      <ButtonForward />
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
  // background: $white-one;
  background: $white-mask-four;
  border-radius: $br-m;
  padding: 1rem;
  overflow: hidden;
  transition: 0.2s ease;

  // &:hover {
  //   background: $black-mask-three;
  // }

  &__titleHide {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 32px;
    letter-spacing: 2px;
    color: $white-mask-one;
    text-align: center;
    z-index: 2;
    transition: 0.8s ease;
    opacity: 0;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  &__titleBlock {
    display: flex;
    flex-direction: column;
  }

  &__title {
    // color: $black-one;
    min-height: 75px;
    // border-bottom: 1px solid $black-mask-two;
    border-bottom: 1px solid $white-mask-three;

    @media (max-width: 1024px) {
      min-height: 62px;
    }
  }

  &__subtitle {
    font-size: 14px;
    // color: $black-mask-two;
    color: $white-mask-one;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    padding-top: 1rem;
  }

  &__forward {
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

.catalogListCard:hover .catalogListCard__titleBlock {
  opacity: 0;
}

.catalogListCard:hover .catalogListCard__titleHide {
  opacity: 1;
}

// .catalogListCard:hover .catalogListCard__clip {
//   opacity: 0;
// }
</style>
