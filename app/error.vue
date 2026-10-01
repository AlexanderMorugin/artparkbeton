<template>
  <ContainerPage class="errorPage">
    <span class="errorPage__title">Ошибка 404</span>
    <span class="errorPage__subtitle">страница не найдена</span>
    <NuxtLink to="/" class="errorPage__link">пройдите на главную</NuxtLink>
  </ContainerPage>
</template>

<script setup>
useHead({
  title: "Страница не найдена - Ошибка 404",
  meta: [{ name: "description", content: "Страница не найдена - Ошибка 404" }],
});
</script>

<style lang="scss" scoped>
.errorPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 100vh;

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1px;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 28px;
  }

  &__link {
    text-decoration: underline;
  }
}
</style>
