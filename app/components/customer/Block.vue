<template>
  <section class="customerBlock">
    <CustomerCard v-for="item in customer" :key="item.id" :item="item" />
  </section>
</template>

<script setup lang="ts">
import { customer } from "~/mock/customer";
</script>

<style lang="scss" scoped>
.customerBlock {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
