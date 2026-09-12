<template>
  <BlockOption
    :name="props.name"
    :isState="props.isState"
    @toggleOpening="emits('toggleOpening')"
  >
    <TitleCatalogBlock title="Характеристики" />
    <TransitionGroup name="list" tag="div">
      <StepLine v-if="props.isState" />
      <StepOptionBlock
        v-if="props.isState"
        :name="props.name"
        :data="catalogStepOutsideOptions"
      />
    </TransitionGroup>
  </BlockOption>
</template>

<script lang="ts" setup>
import { catalogStepOutsideOptions } from "~/mock/step/step-list";

const props = defineProps<{
  name: string;
  isState: boolean;
}>();

const emits = defineEmits(["toggleOpening"]);
</script>
