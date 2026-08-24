<template>
  <h3 class="titleBlock">{{ props.title }}</h3>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.titleBlock {
  // font-family: "Montserrat-Bold", sans-serif;
  font-size: 20px;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  // @media (max-width: 1600px) {
  //   font-size: 40px;
  // }

  // @media (max-width: 767px) {
  //   font-size: 28px;
  //   line-height: 44px;
  // }
}
</style>
