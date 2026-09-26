<template>
  <section class="catalogMainBlock">
    <TitleBlockMain title="Каталог продукции" />

    <div class="catalogMainBlock__container">
      <ButtonLinkToPageSecond
        v-for="item in catalog"
        :key="item.id"
        :path="`/catalog${item.route}`"
        :title="item.titleSmall"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { catalog } from "~/mock/catalog";
</script>

<style lang="scss" scoped>
.catalogMainBlock {
  margin-top: 100px;

  &__container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    row-gap: 10px;
    margin-top: 10px;
    background: $gradient-white-four;
    padding: 30px 20px;
    border-radius: $br-xxs;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      background: none;
      padding: 0;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
