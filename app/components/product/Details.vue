<template>
  <section class="productDetails">
    <p v-if="props.details.textAccent" class="productDetails__textAccent">
      {{ props.details.textAccent }}
    </p>

    <div class="productDetails__priceBox">
      <AnimationCircle />
      <ProductPriceBlock v-if="props.prices" :prices="props.prices" />
      <p v-if="props.details.textAddition" class="stepDetails__textAddition">
        {{ props.details.textAddition }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProductDetails, IProductPrices } from "~/types/product";

const props = defineProps<{
  details: IProductDetails;
  prices: IProductPrices[];
}>();
</script>

<style lang="scss" scoped>
.productDetails {
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

  &__textAccent {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
  }

  &__textAddition {
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
