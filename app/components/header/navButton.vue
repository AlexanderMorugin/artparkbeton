<template>
  <button class="headerNavButton">
    <IconMenu class="headerNavButton__icon" />
  </button>
</template>

<style lang="scss" scoped>
.headerNavButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid $white-mask-three;

  &__icon {
    width: 24px;
    height: 24px;
    fill: $white-one;
    opacity: 0.9;
    transition: 0.2s ease;
  }
}
.headerNavButton:hover .headerNavButton__icon {
  fill: $orange-four;
  opacity: 1;
  animation: scale 0.25s ease-in-out;
}
@keyframes scale {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
