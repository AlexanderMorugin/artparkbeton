<template>
  <nav class="footerNav">
    <div class="footerNav__block">
      <NuxtLink
        v-for="item in footerCatalogOne"
        :key="item.id"
        :to="item.route"
        class="footerNav__link"
        >{{ item.title }}</NuxtLink
      >
    </div>

    <div class="footerNav__block">
      <NuxtLink
        v-for="item in footerCatalogTwo"
        :key="item.id"
        :to="item.route"
        class="footerNav__link"
        >{{ item.title }}</NuxtLink
      >
    </div>

    <div class="footerNav__block">
      <NuxtLink
        v-for="item in footerCatalogThree"
        :key="item.id"
        :to="item.route"
        class="footerNav__link"
        >{{ item.title }}</NuxtLink
      >
    </div>

    <div class="footerNav__block">
      <NuxtLink
        v-for="item in footerMenu"
        :key="item.id"
        :to="item.route"
        class="footerNav__link"
        >{{ item.title }}</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import {
  footerCatalogOne,
  footerCatalogThree,
  footerCatalogTwo,
  footerMenu,
} from "~/mock/footer-menu";
</script>

<style lang="scss" scoped>
.footerNav {
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 40px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__link {
    width: fit-content;
    font-size: 14px;
    line-height: 22px;
    transition: 0.05s ease;

    &:hover {
      color: $orange-one;
    }
  }
}
</style>
