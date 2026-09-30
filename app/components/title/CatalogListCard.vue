<template>
  <h2 class="titleCatalogListCard">{{ props.title }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.titleCatalogListCard {
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
}
</style>
