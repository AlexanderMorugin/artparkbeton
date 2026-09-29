<template>
  <div class="customerCard">
    <p class="customerCard__question">- {{ props.item.question }}</p>
    <p class="customerCard__answer">{{ props.item.answer }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ICustomer } from "~/types/customer";

const props = defineProps<{
  item: ICustomer;
}>();
</script>

<style lang="scss" scoped>
.customerCard {
  display: flex;
  flex-direction: column;

  &__question {
    font-size: 18px;
  }

  &__answer {
  }
}
</style>
