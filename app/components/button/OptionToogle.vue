<template>
  <button title="Подробнее" class="buttonOptionToogle">
    <div class="buttonOptionToogle__spin" />
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
  left: 0;
  right: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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

  &__spin {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-bottom: 1px solid $white-mask-three;
    box-shadow: 2px 2px 20px $white-mask-five;
    animation: spin 2s linear infinite;
  }

  &__icon {
    width: 18px;
    height: 18px;
    fill: $white-one;

    &_open {
      transform: rotate(90deg);
    }

    &_close {
      transform: rotate(270deg);
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
