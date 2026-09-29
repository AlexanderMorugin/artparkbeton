<template>
  <NuxtLink
    :to="props.path"
    :class="[
      'buttonLinkToPageSecond',
      { buttonLinkToPageSecond_active: isActive },
    ]"
  >
    <span class="buttonLinkToPageSecond__title">{{ props.title }}</span>
    <IconArrowIos v-if="!isActive" class="buttonLinkToPageSecond__icon" />
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  path: string;
  title: string;
  route: string;
  itemRoute: string;
}>();

const isActive = computed(() => props.route.slice(8) === props.itemRoute);
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

  &_active {
    background: $deep-blue-one;
    cursor: default;

    &:hover {
      background: $deep-blue-one;
    }
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
