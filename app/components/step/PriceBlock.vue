<template>
  <div class="stepPriceBlock">
    <div class="stepPriceBlock__titleBox">
      <span class="stepPriceBlock__title">Размеры</span>
    </div>
    <div
      v-for="item in props.list"
      :key="item.id"
      :class="[
        'stepPriceBlock__sizes',
        {
          stepPriceBlock__sizes_min:
            item.sizeName === 'Min' || item.sizeName === 'Max',
        },
      ]"
    >
      <span
        :class="[
          'stepPriceBlock__accent',
          {
            stepPriceBlock__accent_min:
              item.sizeName === 'Min' || item.sizeName === 'Max',
          },
        ]"
        >{{ item.sizeName }} размер</span
      >
      <div class="stepPriceBlock__grid">
        <div class="stepPriceBlock__gridCenter stepPriceBlock__gridLine">
          <span class="stepPriceBlock__gridName">мм</span>
        </div>
        <div class="stepPriceBlock__gridCenter stepPriceBlock__gridLine">
          <span class="stepPriceBlock__gridName">вес</span>
        </div>
        <div class="stepPriceBlock__gridRight stepPriceBlock__gridLine">
          <span class="stepPriceBlock__gridName">цена / шт</span>
        </div>
        <div class="stepPriceBlock__gridLeft">
          <span
            >{{ item.sizeOptions
            }}<span v-if="item.sizePrice !== 'договорная'">, мм</span></span
          >
        </div>
        <div class="stepPriceBlock__gridCenter">
          <span>{{ item.sizeWeight }}</span>
        </div>
        <div class="stepPriceBlock__gridRight">
          <span
            :class="[
              'stepPriceBlock__accent',
              {
                stepPriceBlock__accent_min:
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
import type { CatalogStep } from "~/types/catalog";

const props = defineProps<{
  list: CatalogStep[];
}>();
</script>

<style lang="scss" scoped>
.stepPriceBlock {
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
