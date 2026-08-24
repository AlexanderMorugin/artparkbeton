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

  @media (max-width: 1024px) {
    border-radius: $br-s;
    padding: 10px;
  }

  &_colorOne {
    background: $white-mask-five;
  }
}
</style>
