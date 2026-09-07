<template>
  <NuxtLink to="/company/ultrabeton" class="buttonLinkIcon">
    <div class="buttonLinkIcon__content">
      <span class="buttonLinkIcon__text">Подробнее</span>
      <IconArrowDouble class="buttonLinkIcon__icon" />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.buttonLinkIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $orange-mask-four;
  border-radius: $br-l;
  border: 1px solid $orange-one;
  box-shadow: 0 1px 20px $orange-one;
  padding: 10px 20px;
  transition: 0.2s ease;

  &:hover {
    background: $orange-one;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__text {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: $white-one;
    vertical-align: middle;
  }

  &__icon {
    fill: $white-one;
  }
}
</style>
