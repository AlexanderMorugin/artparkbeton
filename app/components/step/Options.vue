<template>
  <StepBlock>
    <TitleCatalogBlock title="Характеристики" />
    <StepLine />
    <ul class="stepOptions">
      <li
        v-for="item in catalogStepOutsideOptions"
        :key="item.id"
        class="stepOptions__item"
      >
        <span class="stepOptions__name">{{ item.optionName }}</span>
        <!-- <StepLineDashed /> -->
        <div class="stepOptions__text">
          <div v-for="(n, i) in item.optionDescription" :key="i">
            <span>{{ n }}</span>
            <span class="stepOptions__slash">
              {{
                i < item.optionDescription.length - 1
                  ? `&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;`
                  : ""
              }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </StepBlock>
</template>

<script lang="ts" setup>
import { catalogStepOutsideOptions } from "~/mock/steps/catalog-step-outside";
</script>

<style lang="scss" scoped>
.stepOptions {
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
}
</style>
