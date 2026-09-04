<template>
  <BlockOption>
    <TitleCatalogBlock title="Сроки" />
    <StepLine />
    <StepOptionBlock place="time" :data="time" />
  </BlockOption>
</template>

<script setup lang="ts">
import { time } from "~/mock/time";
</script>
