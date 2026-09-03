<template>
  <section class="stepDetails">
    <TitleCatalogCard
      title="Накладные ступени и проступи из ультрабетона, долговечные, по доступной цене."
    />
    <div class="stepDetails__priceBox">
      <AnimationCircle />
      <StepPriceBlock :list="catalogStepOutsideSize" />
      <p class="stepDetails__text">
        Стоимость подступёнка в цену ступени не включена и расчитывается от 800
        руб./п.м. Помимо размера, дополнительно на цену влияет цвет и узор
        поверхности.
      </p>
    </div>
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

  &__priceBox {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 40px;

    @media (max-width: 1280px) {
      gap: 20px;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__text {
    text-shadow:
      1px 1px 2px $black-one,
      0 0 25px $white-mask-two,
      0 0 5px $deep-blue-one;

    @media (max-width: 576px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
