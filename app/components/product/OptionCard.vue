<template>
  <BlockOption
    :name="props.name"
    :isState="props.isState"
    @toggleOpening="emits('toggleOpening')"
  >
    <TitleCatalogBlock :title="props.title" />
    <TransitionGroup name="list" tag="div">
      <ProductLine v-if="props.isState" />
      <ProductOptionBlock
        v-if="props.isState"
        :name="props.name"
        :data="props.data"
      />
    </TransitionGroup>
  </BlockOption>
</template>

<script lang="ts" setup>
import type { IProductOptions } from "~/types/product";

const props = defineProps<{
  name: string;
  title: string;
  isState: boolean;
  data: IProductOptions[];
}>();

const emits = defineEmits(["toggleOpening"]);
</script>
