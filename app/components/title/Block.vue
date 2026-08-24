<template>
  <h2 class="titleBlock">{{ props.title }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.titleBlock {
  font-size: 22px;
  letter-spacing: 3px;

  @media (max-width: 1024px) {
    font-size: 18px;
    letter-spacing: 2px;
  }
}
</style>
