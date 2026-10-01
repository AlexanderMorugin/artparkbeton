<template>
  <div
    :class="[
      'customerCard',
      { customerCard_active: props.answerOpen === item.id },
    ]"
  >
    <div class="customerCard__questionBox">
      <span class="customerCard__question">-</span>
      <p class="customerCard__question">{{ props.item.question }}</p>
    </div>

    <TransitionGroup name="list" tag="div">
      <div v-if="props.answerOpen === item.id" class="customerCard__answerBox">
        <ProductLine />
        <p>{{ props.item.answer }}</p>
      </div>
    </TransitionGroup>

    <button
      v-if="props.answerOpen !== item.id"
      @click="emits('toggleOpening', item.id)"
      class="customerCard__questionButton"
    >
      <span class="customerCard__questionButtonText">Открыть ответ</span>
      <IconArrowDouble class="customerCard__questionButtonIcon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ICustomer } from "~/types/customer";

const props = defineProps<{
  item: ICustomer;
  answerOpen: number;
}>();

const emits = defineEmits(["toggleOpening"]);
</script>

<style lang="scss" scoped>
.customerCard {
  display: flex;
  flex-direction: column;
  border: 1px solid $white-mask-three;
  border-radius: $br-xs;
  padding: 20px 10px;
  backdrop-filter: blur(15px) brightness(80%);
  transition: 0.5s ease;

  &_active {
    backdrop-filter: blur(15px) brightness(100%);
  }

  &__questionBox {
    display: grid;
    grid-template-columns: 15px 1fr;
  }

  &__question {
    font-size: 24px;

    @media (max-width: 576px) {
      font-size: 18px;
    }
  }

  &__questionButton {
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    padding-left: 15px;
    padding-top: 20px;
  }

  &__questionButtonText {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    line-height: 1;
    color: $white-mask-one;
    transition: 0.2s ease;

    @media (max-width: 576px) {
      font-size: 14px;
    }
  }

  &__questionButtonIcon {
    fill: $white-mask-one;
    transform: rotate(90deg);

    @media (max-width: 576px) {
      width: 20px;
      height: 20px;
    }

    &_active {
      transform: rotate(270deg);
    }
  }

  &__answerBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 15px;
  }
}

.customerCard__questionButton:hover .customerCard__questionButtonText {
  color: $white-one;
}
</style>
