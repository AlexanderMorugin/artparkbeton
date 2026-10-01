<template>
  <p
    :class="[
      'paragraphLarge',
      { paragraphLarge_center: props.center },
      { paragraphLarge_paddingTop: props.paddingTop },
    ]"
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  center?: boolean;
  paddingTop?: boolean;
}>();
</script>

<style lang="scss" scoped>
.paragraphLarge {
  font-size: 24px;
  // line-height: 1.3;
  color: $white-mask-one;

  @media (max-width: 767px) {
    font-size: 18px;
  }

  &_center {
    text-align: center;
  }

  &_paddingTop {
    padding-top: 40px;
  }
}
</style>
