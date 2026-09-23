<template>
  <div class="productOptionBlock">
    <div
      v-if="props.name === 'options' || props.name === 'payment'"
      v-for="(item, i) in props.data"
      :key="i"
      class="productOptionBlock__item"
    >
      <span class="productOptionBlock__name">{{ item.optionName }}</span>
      <div class="productOptionBlock__text">
        <div v-for="(n, i) in item.optionDescription" :key="i">
          <span>{{ n }}</span>
          <span class="productOptionBlock__slash">
            {{
              i < item.optionDescription.length - 1
                ? `&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;`
                : ""
            }}
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="props.name === 'delivery'"
      v-for="(item, i) in props.data"
      :key="i"
      class="productOptionBlock__item"
    >
      <span class="productOptionBlock__name">{{ item.optionName }}</span>
      <div class="productOptionBlock__textPlane">
        <span>{{ item.optionDescription }}</span>
        <span>{{ item.optionDescriptionTwo }}</span>
      </div>
    </div>

    <div
      v-if="
        props.name === 'time' ||
        props.name === 'description' ||
        props.name === 'installation'
      "
      class="productOptionBlock__description"
    >
      <p v-if="props.data[0]?.optionDescription">
        {{ props.data[0]?.optionDescription }}
      </p>
      <p v-if="props.data[0]?.optionDescriptionTwo">
        {{ props.data[0]?.optionDescriptionTwo }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProductOptions } from "~/types/product";

const props = defineProps<{
  name: string;
  data: IProductOptions[];
}>();
</script>

<style lang="scss" scoped>
.productOptionBlock {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1px solid $white-mask-five;
  }

  &__name {
    font-size: 14px;
    letter-spacing: 2px;
    opacity: 0.7;
    background: $white-mask-five;
    padding-left: 10px;
    padding-right: 10px;
  }

  &__text {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
  }

  &__slash {
    font-size: 10px;
    color: $white-mask-four;
  }

  &__textPlane {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;

    @media (max-width: 576px) {
      font-size: 14px;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
