<template>
  <section class="catalogCarousel">
    <ButtonLinkToPage path="/catalog" title="Каталог изделий" />
    <EmblaCatalogCarousel :catalog="catalog" />
  </section>
</template>

<script setup lang="ts">
import { catalog } from "~/mock/catalog";
</script>

<style lang="scss" scoped>
.catalogCarousel {
  margin-top: 40px;
}
</style>
