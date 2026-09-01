<template>
  <h2 class="titleCatalogBlock">{{ props.title }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.titleCatalogBlock {
  font-family: "Montserrat-Medium", sans-serif;
  font-size: 18px;
  letter-spacing: 3px;
  color: $orange-four;
}
</style>
