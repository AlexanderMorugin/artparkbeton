<template>
  <section class="reviewBlock">
    <ReviewCard v-for="item in props.reviews" :key="item.id" :review="item" />
  </section>
</template>

<script lang="ts" setup>
import type { IReview } from "~/types/review";

const props = defineProps<{
  reviews: IReview[];
}>();
</script>

<style lang="scss" scoped>
.reviewBlock {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
