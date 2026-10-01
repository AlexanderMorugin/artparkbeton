<template>
  <section class="customerBlock">
    <CustomerCard
      v-for="item in customer"
      :key="item.id"
      :item="item"
      :answerOpen="answerOpen"
      @toggleOpening="toggleOpening"
    />
    <ParagraphLarge center>
      Если вы не нашли ответ на интересующий вопрос, то можно уточнить по
      телефону в часы работы мастерской или в мессенджерах круглосуточно. Всегда
      рад ответить на ваши вопросы. С уважением, Николай.
    </ParagraphLarge>
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
