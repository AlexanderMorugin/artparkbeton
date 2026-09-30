<template>
  <section class="customerBlock">
    <CustomerCard
      v-for="item in customer"
      :key="item.id"
      :item="item"
      :answerOpen="answerOpen"
      @toggleOpening="toggleOpening"
    />
  </section>
</template>

<script setup lang="ts">
import { customer } from "~/mock/customer";

const answerOpen = ref(1);

const toggleOpening = (itemId: number) => {
  answerOpen.value = itemId;
};
</script>

<style lang="scss" scoped>
.customerBlock {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
