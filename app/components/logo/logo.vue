<template>
  <NuxtLink to="/" title="На главную" class="logo">
    <img src="/images/logo/logo.png" alt="Лого" class="logo__icon" />
    <div class="logo__text">
      Арт <span class="logo__text logo__text_span">П.А.Р.К.</span>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  &__icon {
    width: 48px;

    @media (max-width: 390px) {
      width: 32px;
    }
  }

  &__text {
    font-family: "Galliard-Antiqua", sans-serif;
    font-size: 24px;
    letter-spacing: 1px;

    &_span {
      font-size: 18px;
      letter-spacing: 0;
    }
  }
}
</style>
