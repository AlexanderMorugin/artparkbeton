<template>
  <section class="catalogCarousel">
    <ButtonLinkToPage
      path="/review"
      title="Отзывы клиентов"
      class="catalogCarousel__buttonLinkToPage"
    />

    <EmblaReviewCarousel :reviews="reviews.reverse()" />
  </section>
</template>

<script setup lang="ts">
import { reviews } from "~/mock/review";
</script>

<style lang="scss" scoped>
.catalogCarousel {
  max-width: $screen-xxl;
  margin: 0 auto;
  margin-top: 100px;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow: hidden;

  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__buttonLinkToPage {
    padding-left: 0;
    padding-right: 0;

    @media (max-width: 576px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}
</style>
