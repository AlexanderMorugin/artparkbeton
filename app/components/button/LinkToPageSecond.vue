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
  height: 36px;
  border-radius: $br-xxs;
  border: 1px solid $white-mask-four;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    background: $white-mask-four;
  }

  &__title {
    letter-spacing: 1px;
  }

  &__icon {
    fill: $deep-blue-three;
    width: 14px;
    height: 14px;
  }
}

.buttonLinkToPageSecond:hover .buttonLinkToPageSecond__icon {
  fill: $orange-four;
}
</style>
