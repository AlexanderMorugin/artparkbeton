<template>
  <div class="footerBottomBlock">
    <span class="footerBottomBlock__company"
      >ООО «Алла+Коля=Любовь» {{ fullYear }}</span
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
const { fullYear } = useDate();
</script>

<style lang="scss" scoped>
.footerBottomBlock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  // border-top: 1px solid $white-mask-three;
  padding-top: 20px;
  margin-top: 40px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  &__company {
    line-height: 24px;
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
    // color: var(--white-primary);
    border-bottom: 1px dashed $white-mask-three;
  }
}
</style>
