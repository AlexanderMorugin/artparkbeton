<template>
  <div class="footerBottomBlock">
    <span class="footerBottomBlock__company"
      >{{ COMPANY_UR }} {{ fullYear }}</span
    >
    <div class="footerBottomBlock__links">
      <NuxtLink to="/doc/requisites" class="footerBottomBlock__link"
        >Данные о продавце</NuxtLink
      >
      <NuxtLink to="/doc/privacy" class="footerBottomBlock__link"
        >Политика конфиденциальности</NuxtLink
      >
      <NuxtLink to="/doc/cooperation" class="footerBottomBlock__link"
        >Сотрудничество</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { COMPANY_UR } from "~/mock/info";

const { fullYear } = useDate();
</script>

<style lang="scss" scoped>
.footerBottomBlock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding-top: 20px;
  margin-top: 40px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  &__company {
    font-size: 14px;
    line-height: 22px;
  }

  &__links {
    display: flex;
    gap: 10px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  &__link {
    width: fit-content;
    font-size: 14px;
    line-height: 22px;
    border-bottom: 1px dashed $white-mask-three;
  }
}
</style>
