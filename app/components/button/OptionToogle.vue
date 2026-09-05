<template>
  <button title="Подробнее" class="buttonOptionToogle">
    <IconArrowIos
      class="buttonOptionToogle__icon"
      :class="
        props.isState
          ? 'buttonOptionToogle__icon_close'
          : 'buttonOptionToogle__icon_open'
      "
    />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  isState: boolean;
}>();
</script>

<style lang="scss" scoped>
.buttonOptionToogle {
  position: absolute;
  bottom: -18px;
  // left: 50%;
  left: 0;
  right: 0;
  width: 100%;
  /* равномерное распределение отступов */
  margin-left: auto;
  margin-right: auto;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid $white-mask-four;
  background: $black-one;
  transition: 0.2s ease;

  &:hover {
    border: 1px solid $orange-one;
  }

  &__icon {
    width: 18px;
    height: 18px;
    fill: $white-one;
    transition: 0.5s ease;
    // transform: rotate(90deg);
    // animation: pulse 2.5s linear infinite;

    &_open {
      transform: rotate(90deg);
    }

    &_close {
      transform: rotate(270deg);
    }
  }
}

.buttonOptionToogle:hover .buttonOptionToogle__icon {
  animation: none;
}

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
