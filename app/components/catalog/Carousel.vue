<template>
  <section class="catalogCarousel">
    <ButtonLinkToPage
      path="/catalog"
      title="Каталог изделий"
      class="catalogCarousel__buttonLinkToPage"
    />
    <EmblaCatalogCarousel :catalog="catalog" />
  </section>
</template>

<script setup lang="ts">
import { catalog } from "~/mock/catalog";
</script>

<style lang="scss" scoped>
.catalogCarousel {
  max-width: $screen-xxl;
  margin: 0 auto;
  margin-top: 100px;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow: hidden;

  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__buttonLinkToPage {
    padding-left: 0;
    padding-right: 0;

    @media (max-width: 576px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}
</style>
