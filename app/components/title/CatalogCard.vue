<template>
  <h2 class="titleCatalogCard">{{ props.title }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.titleCatalogCard {
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
}
</style>
