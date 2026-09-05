<template>
  <BlockOption
    :name="props.name"
    :isState="props.isState"
    @toggleOpening="emits('toggleOpening')"
  >
    <TitleCatalogBlock title="Монтаж" />
    <TransitionGroup name="list" tag="div">
      <StepLine v-if="props.isState" />
      <p v-if="props.isState" class="blockText">
        Проступь укладывается на подготовленное основание и фиксируется на ней
        при помощи раствора или клеевого состава для бетонов. При монтаже на
        подвесном пролете проступь фиксируется на нем приваркой закладных
        деталей проступи к конструкции лестницы.
      </p>
    </TransitionGroup>
  </BlockOption>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  isState: boolean;
}>();

const emits = defineEmits(["toggleOpening"]);
</script>

<style lang="scss" scoped>
.blockText {
  padding-top: 10px;
}
</style>
