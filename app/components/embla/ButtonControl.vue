<template>
  <button
    :class="[
      'emblaButtonControl ',
      { emblaButtonControl_prev: props.direction === 'prev' },
      { emblaButtonControl_next: props.direction === 'next' },
      { emblaButtonControl_disabled: !props.canScroll },
    ]"
    @click="emits('scroll')"
    :disabled="!props.canScroll"
  >
    <IconArrowIos
      :class="[
        'emblaButtonControl__icon',
        { emblaButtonControl__icon_prev: props.direction === 'prev' },
        { emblaButtonControl__icon_disabled: !props.canScroll },
      ]"
    />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  canScroll: boolean;
  direction: string;
}>();

const emits = defineEmits(["scroll"]);
</script>

<style lang="scss" scoped>
.emblaButtonControl {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid $white-one;
  backdrop-filter: blur(5px);
  z-index: 1;
  transition: 0.2s ease;

  @media (max-width: 1280px) {
    width: 30px;
    height: 30px;
  }

  &:hover {
    backdrop-filter: blur(15px) grayscale(50%);
  }

  &_prev {
    left: 10px;
  }

  &_next {
    right: 10px;
  }

  &_disabled {
    backdrop-filter: blur(0) grayscale(0);
    border: 1px solid $white-mask-three;
    cursor: default;

    &:hover {
      backdrop-filter: blur(0) grayscale(0);
      border: 1px solid $white-mask-three;
    }
  }

  &__icon {
    fill: $white-one;

    &_prev {
      transform: rotate(180deg);
    }

    &_disabled {
      fill: $white-mask-three;
    }
  }
}
</style>
