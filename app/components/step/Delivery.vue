<template>
  <BlockOption>
    <TitleCatalogBlock title="Доставка" />
    <StepLine />
    <StepOptionBlock place="delivery" :data="delivery" />
  </BlockOption>
</template>

<script lang="ts" setup>
import { delivery } from "~/mock/delivery";
</script>
