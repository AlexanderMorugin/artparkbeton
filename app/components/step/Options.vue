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
import { catalogStepOutsideOptions } from "~/mock/steps/catalog-step-outside";

const props = defineProps<{
  name: string;
  isState: boolean;
}>();

const emits = defineEmits(["toggleOpening"]);
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(300px);
}
</style>
