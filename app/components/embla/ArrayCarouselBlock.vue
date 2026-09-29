<template>
  <section class="ArrayCarouselBlock">
    <ButtonLinkIconSecond isPadding :route="props.path" :title="props.title" />
    <EmblaArrayCarousel
      :catalog="props.catalog"
      :reviews="props.reviews"
      :place="props.place"
    />
  </section>
</template>

<script setup lang="ts">
import type { ICatalog } from "~/types/catalog";
import type { IReview } from "~/types/review";

const props = defineProps<{
  catalog?: ICatalog[];
  reviews?: IReview[];
  path: string;
  title: string;
  place: string;
}>();
</script>

<style lang="scss" scoped>
.ArrayCarouselBlock {
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
