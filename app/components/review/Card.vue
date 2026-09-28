<template>
  <div class="reviewCard">
    <div class="reviewCard__textBlock">
      <div class="reviewCard__userBlock">
        <span class="reviewCard__user">{{ props.review.user }}</span>
        <span class="reviewCard__userStatus">{{
          props.review.userStatus
        }}</span>
      </div>
      <span>{{ props.review.textOne }}</span>
      <span>{{ props.review.textTwo }}</span>
    </div>
    <span class="reviewCard__date">{{ props.review.date }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { IReview } from "~/types/review";

const props = defineProps<{
  review: IReview;
}>();
</script>

<style lang="scss" scoped>
.reviewCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  border-radius: $br-s;
  border: 1px solid $white-mask-five;
  background: $gradient-blue-one;
  padding: 10px;
  user-select: none;
  cursor: grab;

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__userBlock {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    border-bottom: 1px solid $white-mask-three;
  }

  &__user {
    font-family: "Montserrat-SemiBold", sans-serif;
    letter-spacing: 1px;
  }

  &__userStatus {
    font-size: 12px;
    color: $white-mask-two;
  }

  &__date {
    font-size: 14px;
    color: $white-mask-two;
  }
}
</style>
