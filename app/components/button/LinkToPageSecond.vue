<template>
  <NuxtLink :to="props.path" class="buttonLinkToPageSecond">
    <span class="buttonLinkToPageSecond__title">{{ props.title }}</span>
    <IconArrowIos class="buttonLinkToPageSecond__icon" />
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  path: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.buttonLinkToPageSecond {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // height: 36px;
  // border-bottom: 1px solid $white-mask-four;
  border: 1px solid $white-mask-four;
  padding-left: 5px;
  padding-right: 5px;
  // transition: 0.05s ease;

  // &:last-child {
  //   border-bottom: 1px solid transparent;
  // }

  &:hover {
    background: $white-mask-four;
  }

  &__title {
    font-size: 14px;
    line-height: 2;
    // transition: 0.2s ease;
  }

  &__icon {
    fill: $white-mask-two;
    width: 14px;
    height: 14px;
    // transition: 0.2s ease;
  }
}

.buttonLinkToPageSecond:hover .buttonLinkToPageSecond__title {
  color: $orange-four;
}
.buttonLinkToPageSecond:hover .buttonLinkToPageSecond__icon {
  fill: $orange-four;
}
</style>
