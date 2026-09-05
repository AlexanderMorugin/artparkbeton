<template>
  <BlockOption :name="props.name" :isState="props.isState">
    <TitleCatalogBlock title="Описание" />
    <StepLine />
    <p>
      Проступь укладывается на подготовленное основание и фиксируется на ней при
      помощи раствора или клеевого состава для бетонов. При монтаже на подвесном
      пролете проступь фиксируется на нем приваркой закладных деталей проступи к
      конструкции лестницы.
    </p>
  </BlockOption>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  isState: boolean;
}>();
</script>
