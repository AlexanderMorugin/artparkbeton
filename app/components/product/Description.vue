<template>
  <BlockOption :name="props.name" :isState="props.isState">
    <TitleCatalogBlock title="Описание" />
    <StepLine />
    <div class="productDescription">
      <p v-if="props.description.textOne">
        {{ props.description.textOne }}
      </p>
      <p v-if="props.description.textTwo">
        {{ props.description.textTwo }}
      </p>
      <p v-if="props.description.textThree">
        {{ props.description.textThree }}
      </p>
      <p v-if="props.description.textFour">
        {{ props.description.textFour }}
      </p>
    </div>
  </BlockOption>
</template>

<script lang="ts" setup>
import type { IProductDescription } from "~/types/product";

const props = defineProps<{
  name: string;
  isState: boolean;
  description: IProductDescription;
}>();
</script>

<style lang="scss" scoped>
.productDescription {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
