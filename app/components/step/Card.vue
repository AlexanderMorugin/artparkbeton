<template>
  <section class="stepCard">
    <EmblaCatalogCard :list="catalogStepInside" :isModal="false" />
  </section>
</template>

<script setup lang="ts">
import { catalogStepInside } from "~/mock/catalog-step-inside";
</script>

<style lang="scss" scoped>
.stepCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
