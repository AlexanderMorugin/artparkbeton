<template>
  <div class="footerBottomBlock">
    <div class="footerBottomBlock__companyBlock">
      <span>{{ fullYear }} {{ COMPANY_UR }}</span>
      <span>ИНН: {{ COMPANY_INN }}</span>
    </div>
    <span class="footerBottomBlock__companySpan"
      >Данный интернет-сайт носит информационный характер и ни при каких
      условиях не является публичной офертой. Для получения информации о
      стоимости товаров, обращайтесь по указанным телефонам.</span
    >
    <div class="footerBottomBlock__linkBlock">
      <NuxtLink to="/doc/privacy" class="footerBottomBlock__link"
        >Политика конфиденциальности</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { COMPANY_INN, COMPANY_UR } from "~/mock/info";

const { fullYear } = useDate();
</script>

<style lang="scss" scoped>
.footerBottomBlock {
  display: grid;
  grid-template-columns: 290px 1fr 290px;
  gap: 20px;
  border-top: 1px solid $white-mask-three;
  padding-top: 20px;
  margin-top: 40px;
  font-size: 14px;
  color: $white-mask-one;

  @media (max-width: 1024px) {
    grid-template-columns: 290px 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &__companyBlock {
    display: flex;
    flex-direction: column;
  }

  &__companySpan {
    font-size: 12px;
  }

  &__linkBlock {
    display: flex;
    justify-content: end;
    height: fit-content;

    @media (max-width: 1024px) {
      justify-content: start;
    }
  }

  &__link {
    font-size: 14px;
    color: $white-mask-one;
    transition: 0.2s ease;

    &:hover {
      color: $white-one;
    }
  }
}
</style>
