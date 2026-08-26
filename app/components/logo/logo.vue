<template>
  <NuxtLink to="/" title="На главную" class="logo">
    <img src="/logo/logo.png" alt="Лого" class="logo__icon" />
    <div class="logo__text">Арт П.А.Р.К</div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  &__icon {
    width: 48px;

    @media (max-width: 576px) {
      width: 36px;
    }
  }

  &__text {
    font-family: "Oswald-SemiBold", sans-serif;
    font-size: 22px;
    letter-spacing: 1px;

    @media (max-width: 576px) {
      font-size: 18px;
    }
  }
}
</style>
