<template>
  <ul class="stepOptionBlock">
    <li
      v-if="props.place === 'options'"
      v-for="(item, i) in props.data"
      :key="i"
      class="stepOptionBlock__item"
    >
      <span class="stepOptionBlock__name">{{ item.optionName }}</span>
      <div class="stepOptionBlock__text">
        <div v-for="(n, i) in item.optionDescription" :key="i">
          <span>{{ n }}</span>
          <span class="stepOptionBlock__slash">
            {{
              i < item.optionDescription.length - 1
                ? `&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;`
                : ""
            }}
          </span>
        </div>
      </div>
    </li>

    <li
      v-if="props.place === 'delivery'"
      v-for="(item, i) in props.data"
      :key="i"
      class="stepOptionBlock__item"
    >
      <span class="stepOptionBlock__name">{{ item.optionName }}</span>
      <div class="stepOptionBlock__textPlane">
        <span>{{ item.optionDescription }}</span>
        <span>{{ item.optionDescriptionTwo }}</span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { CatalogStepOptions } from "~/types/catalog";

const props = defineProps<{
  place: string;
  data: CatalogStepOptions[];
}>();
</script>

<style lang="scss" scoped>
.stepOptionBlock {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10px;

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

    @media (max-width: 576px) {
      font-size: 14px;
    }
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
}
</style>
