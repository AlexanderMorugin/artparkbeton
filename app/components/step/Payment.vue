<template>
  <BlockOption
    :name="props.name"
    :isState="props.isState"
    @toggleOpening="emits('toggleOpening')"
  >
    <TitleCatalogBlock title="Оплата" />
    <TransitionGroup name="list" tag="div">
      <StepLine v-if="props.isState" />
      <StepOptionBlock
        v-if="props.isState"
        :name="props.name"
        :data="payment"
      />
    </TransitionGroup>
  </BlockOption>
</template>

<script setup lang="ts">
import { payment } from "~/mock/payment";

const props = defineProps<{
  name: string;
  isState: boolean;
}>();

const emits = defineEmits(["toggleOpening"]);
</script>
