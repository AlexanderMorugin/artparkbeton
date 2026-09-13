<template>
  <div class="productPriceBlock">
    <div class="productPriceBlock__titleBox">
      <span class="productPriceBlock__title">Размеры</span>
    </div>
    <div
      v-for="item in props.prices"
      :key="item.id"
      :class="[
        'productPriceBlock__sizes',
        {
          productPriceBlock__sizes_min:
            item.sizeName === 'Min' || item.sizeName === 'Max',
        },
      ]"
    >
      <span
        :class="[
          'productPriceBlock__accent',
          {
            productPriceBlock__accent_min:
              item.sizeName === 'Min' || item.sizeName === 'Max',
          },
        ]"
        >{{ item.sizeName }} размер</span
      >
      <div class="productPriceBlock__grid">
        <div class="productPriceBlock__gridCenter productPriceBlock__gridLine">
          <span class="productPriceBlock__gridName">д * ш * в</span>
        </div>
        <div class="productPriceBlock__gridCenter productPriceBlock__gridLine">
          <span class="productPriceBlock__gridName">вес</span>
        </div>
        <div class="productPriceBlock__gridRight productPriceBlock__gridLine">
          <span class="productPriceBlock__gridName">цена / шт</span>
        </div>
        <div class="productPriceBlock__gridLeft">
          <span
            >{{ item.sizeOptions
            }}<span v-if="item.sizePrice !== 'договорная'">, мм</span></span
          >
        </div>
        <div class="productPriceBlock__gridCenter">
          <span>{{ item.sizeWeight }}</span>
        </div>
        <div class="productPriceBlock__gridRight">
          <span
            :class="[
              'productPriceBlock__accent',
              {
                productPriceBlock__accent_min:
                  item.sizeName === 'Min' || item.sizeName === 'Max',
              },
            ]"
            >{{ item.sizePrice }}</span
          ><span v-if="item.sizePrice !== 'договорная'"> руб</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProductPrices } from "~/types/product";

const props = defineProps<{
  prices: IProductPrices[];
}>();
</script>

<style lang="scss" scoped>
.productPriceBlock {
  display: flex;
  flex-direction: column;
  max-width: 370px;
  border-radius: $br-s;
  border: 1px solid $white-mask-four;
  overflow: hidden;

  @media (max-width: 576px) {
    max-width: 100%;
  }

  &__titleBox {
    background: $gradient-white-one;
    padding: 10px;
  }

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  &__sizes {
    display: flex;
    flex-direction: column;
    padding: 30px 10px 20px 10px;

    &_min {
      background: $white-mask-five;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  &__accent {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 1;
    color: $white-one;

    &_min {
      font-family: "Montserrat-Regular", sans-serif;
      color: $white-mask-one;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: end;
    row-gap: 3px;
  }

  &__gridName {
    font-size: 12px;
    line-height: 1.5;
    color: $white-mask-two;

    @media (max-width: 390px) {
      font-size: 10px;
    }
  }

  &__gridLeft {
    font-size: 14px;
    line-height: 1;
    color: $white-mask-one;
    padding-right: 10px;

    @media (max-width: 576px) {
      font-size: 12px;
      padding-right: 5px;
    }

    @media (max-width: 390px) {
      font-size: 10px;
    }
  }

  &__gridCenter {
    font-size: 14px;
    line-height: 1;
    text-align: center;
    color: $white-mask-one;
    padding-left: 10px;
    padding-right: 10px;

    @media (max-width: 576px) {
      font-size: 12px;
      padding-left: 5px;
      padding-right: 5px;
    }

    @media (max-width: 390px) {
      font-size: 10px;
    }
  }

  &__gridRight {
    font-size: 14px;
    line-height: 1;
    text-align: right;
    color: $white-mask-one;
    padding-left: 10px;

    @media (max-width: 576px) {
      font-size: 12px;
      padding-left: 5px;
    }

    @media (max-width: 390px) {
      font-size: 10px;
    }
  }

  &__gridLine {
    border-bottom: 1px solid $white-mask-four;
  }
}
</style>
