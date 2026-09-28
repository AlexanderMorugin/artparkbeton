<template>
  <div class="docRequisites">
    <p class="docRequisites__row docRequisites__left">Наименование</p>
    <p class="docRequisites__row docRequisites__right">{{ COMPANY_UR_FULL }}</p>

    <p class="docRequisites__row docRequisites__left">Юридический адрес</p>
    <p class="docRequisites__row docRequisites__right">{{ ADDRESS_UR }}</p>

    <p class="docRequisites__row docRequisites__left">ИНН</p>
    <p class="docRequisites__row docRequisites__right">{{ COMPANY_INN }}</p>

    <p class="docRequisites__row docRequisites__left">ОГРН/ОГРНИП</p>
    <p class="docRequisites__row docRequisites__right">{{ COMPANY_OGRN }}</p>

    <p class="docRequisites__row docRequisites__left">Р/С</p>
    <p class="docRequisites__row docRequisites__right">
      {{ COMPANY_RAS_SCHET }}
    </p>

    <p class="docRequisites__row docRequisites__left">Банк</p>
    <p class="docRequisites__row docRequisites__right">{{ COMPANY_BANK }}</p>

    <p class="docRequisites__row docRequisites__left">ИНН Банка</p>
    <p class="docRequisites__row docRequisites__right">
      {{ COMPANY_BANK_INN }}
    </p>

    <p class="docRequisites__row docRequisites__left">БИК Банка</p>
    <p class="docRequisites__row docRequisites__right">
      {{ COMPANY_BANK_BIK }}
    </p>

    <p class="docRequisites__row docRequisites__left">К/С банка</p>
    <p class="docRequisites__row docRequisites__right">
      {{ COMPANY_BANK_KOR_SCHET }}
    </p>

    <p class="docRequisites__row docRequisites__left">
      Юридический адрес банка
    </p>
    <p class="docRequisites__row docRequisites__right">
      {{ COMPANY_BANK_ADDRESS_UR }}
    </p>
  </div>
</template>

<script setup lang="ts">
import {
  ADDRESS_UR,
  COMPANY_BANK,
  COMPANY_BANK_ADDRESS_UR,
  COMPANY_BANK_BIK,
  COMPANY_BANK_INN,
  COMPANY_BANK_KOR_SCHET,
  COMPANY_INN,
  COMPANY_OGRN,
  COMPANY_RAS_SCHET,
  COMPANY_UR_FULL,
} from "~/mock/info";
</script>

<style lang="scss" scoped>
.docRequisites {
  display: grid;
  grid-template-columns: auto 1fr;
  border-top: 1px solid $white-mask-four;
  border-right: 1px solid $white-mask-four;
  border-left: 1px solid $white-mask-four;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  &__row {
    padding: 20px;

    @media (max-width: 767px) {
      padding: 0 10px;
    }
  }

  &__left {
    color: $white-mask-two;
    border-bottom: 1px solid $white-mask-four;
    border-right: 1px solid $white-mask-four;

    @media (max-width: 767px) {
      border-bottom: none;
      padding-top: 20px;
    }
  }

  &__right {
    border-bottom: 1px solid $white-mask-four;

    @media (max-width: 767px) {
      padding-bottom: 20px;
    }
  }
}
</style>
