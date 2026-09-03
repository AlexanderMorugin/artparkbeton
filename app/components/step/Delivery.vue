<template>
  <StepBlock>
    <TitleCatalogBlock title="Доставка" />
    <StepLine />
    <StepOptionBlock place="delivery" :data="delivery" />
  </StepBlock>
</template>

<script lang="ts" setup>
import { delivery } from "~/mock/delivery";
</script>
