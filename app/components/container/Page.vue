<template>
  <div
    :class="[
      'containerPage',
      { containerPage_mobile: props.emblaMobileWidth === 'emblaMobileWidth' },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  emblaMobileWidth?: string;
}>();
</script>

<style lang="scss" scoped>
.containerPage {
  max-width: $screen-xxl;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow: hidden;

  &_mobile {
    @media (max-width: 576px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
