<template>
  <BlockOption>
    <TitleCatalogBlock title="Оплата" />
    <StepLine />
    <StepOptionBlock place="options" :data="payment" />
  </BlockOption>
</template>

<script setup lang="ts">
import { payment } from "~/mock/payment";
</script>

<style lang="scss" scoped></style>
