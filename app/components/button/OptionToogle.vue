<template>
  <div class="buttonOptionToogle">
    <IconArrowIos class="buttonOptionToogle__icon" />
  </div>
</template>

<style lang="scss" scoped>
.buttonOptionToogle {
  position: absolute;
  bottom: -18px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid $white-mask-four;
  background: $black-one;

  &__icon {
    width: 18px;
    height: 18px;
    fill: $white-one;
    transform: rotate(90deg);
    animation: pulse 2.5s linear infinite;
  }
}

// .buttonForward::after,
// .buttonForward::before {
//   content: "";
//   position: absolute;
//   border: 1px solid $orange-four;
//   left: -10px;
//   opacity: 0;
//   right: -10px;
//   top: -10px;
//   bottom: -10px;
//   border-radius: 50%;
//   animation: pulse 2.5s linear infinite;
// }

// .buttonForward::after {
//   animation-delay: 1.25s;
// }

@keyframes pulse {
  0% {
    transform: scale(0.5) rotate(90deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2) rotate(90deg);
    opacity: 0;
  }
}
</style>
