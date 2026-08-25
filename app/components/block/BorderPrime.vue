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
  border: 1px solid $white-mask-four;
  padding: 1rem;
  backdrop-filter: blur(1px);

  @media (max-width: 1024px) {
    border-radius: $br-s;
    padding: 10px;
  }

  &_colorOne {
    background: $black-mask-one;
  }
}
</style>
