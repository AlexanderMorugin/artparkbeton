<template>
  <div class="buttonForward">
    <IconArrowIos class="buttonForward__icon" />
  </div>
</template>

<style lang="scss" scoped>
.buttonForward {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: $orange-one;

  &__icon {
    width: 18px;
    height: 18px;
    fill: $white-one;
  }
}

.buttonForward::after,
.buttonForward::before {
  content: "";
  position: absolute;
  border: 1px solid $orange-four;
  left: -10px;
  opacity: 0;
  right: -10px;
  top: -10px;
  bottom: -10px;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite;
}

.buttonForward::after {
  animation-delay: 1.25s;
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
