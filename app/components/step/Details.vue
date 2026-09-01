<template>
  <section class="stepDetails">
    <TitleCatalogCard
      title="Накладные ступени и проступи из ультрабетона, долговечные, по доступной цене."
    />
    <StepPriceBlock :list="catalogStepOutsideSize" />
  </section>
</template>

<script setup lang="ts">
import { catalogStepOutsideSize } from "~/mock/steps/catalog-step-outside";
</script>

<style lang="scss" scoped>
.stepDetails {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
