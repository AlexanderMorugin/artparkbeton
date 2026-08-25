<template>
  <div :class="['blockPrime', { blockPrime_colorOne: props.color === 'one' }]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  color: string;
}>();
</script>

<style lang="scss" scoped>
.blockPrime {
  border-radius: $br-m;
  padding: 1rem;
  backdrop-filter: blur(150px) brightness(80%);

  @media (max-width: 1024px) {
    border-radius: $br-s;
  }

  @media (max-width: 576px) {
    backdrop-filter: none;
    padding: 0;
  }

  &_colorOne {
    background: $black-mask-one;

    @media (max-width: 576px) {
      background: none;
    }
  }
}
</style>
