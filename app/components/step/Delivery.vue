<template>
  <BlockOption
    :name="props.name"
    :isState="props.isState"
    @toggleOpening="emits('toggleOpening')"
  >
    <TitleCatalogBlock title="Доставка" />

    <TransitionGroup name="list" tag="div">
      <StepLine v-if="props.isState" />
      <StepOptionBlock
        v-if="props.isState"
        :name="props.name"
        :data="delivery"
      />
    </TransitionGroup>
  </BlockOption>
</template>

<script lang="ts" setup>
import { delivery } from "~/mock/delivery";

const props = defineProps<{
  name: string;
  isState: boolean;
}>();

const emits = defineEmits(["toggleOpening"]);
</script>
