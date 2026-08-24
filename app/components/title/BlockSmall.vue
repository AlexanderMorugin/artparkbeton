<template>
  <h3 class="titleBlockSmall">{{ props.title }}</h3>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.titleBlockSmall {
  font-size: 18px;
  letter-spacing: 1px;
  color: $orange-four;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}
</style>
