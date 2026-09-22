<template>
  <div class="logoForFooter">
    <Logo />
    <span class="logoForFooter__subtitle">Изделия из ультрабетона</span>
  </div>
</template>

<style lang="scss" scoped>
.logoForFooter {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__subtitle {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: $white-mask-one;
  }
}
</style>
