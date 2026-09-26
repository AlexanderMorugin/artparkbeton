<template>
  <section class="catalogMainBlock">
    <TitleBlockMain title="Каталог продукции" />

    <div class="catalogMainBlock__container">
      <div class="catalogMainBlock__block">
        <ButtonLinkToPageSecond
          v-for="item in stepList"
          :key="item.id"
          :path="item.route"
          :title="item.title"
        />
      </div>

      <div class="catalogMainBlock__block">
        <ButtonLinkToPageSecond
          v-for="item in plateList"
          :key="item.id"
          :path="item.route"
          :title="item.title"
        />
      </div>

      <!-- <div class="catalogMainBlock__block"> -->
      <ButtonLinkToPageSecond
        path="/catalog/stepping-slabs"
        title="Шаговые плиты"
      />
      <!-- </div> -->

      <!-- <div class="catalogMainBlock__block"> -->
      <ButtonLinkToPageSecond path="/catalog/baluster" title="Балюстрады" />
      <!-- </div> -->

      <!-- <div class="catalogMainBlock__block"> -->
      <ButtonLinkToPageSecond path="/catalog/sill" title="Подоконники" />
      <!-- </div> -->

      <!-- <div class="catalogMainBlock__block"> -->
      <ButtonLinkToPageSecond path="/catalog/worktop" title="Столешницы" />
      <!-- </div> -->

      <!-- <div class="catalogMainBlock__block"> -->
      <ButtonLinkToPageSecond path="/catalog/monument" title="Памятники" />
      <!-- </div> -->

      <!-- <div class="catalogMainBlock__block"> -->
      <ButtonLinkToPageSecond path="/catalog/vazon" title="Вазоны" />
      <!-- </div> -->

      <!-- <div class="catalogMainBlock__block"> -->
      <ButtonLinkToPageSecond path="/catalog/barbecue" title="Барбекю" />
      <!-- </div> -->

      <!-- <div class="catalogMainBlock__block"> -->
      <ButtonLinkToPageSecond path="/catalog/souvenir" title="Сувениры" />
      <!-- </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { plateList } from "~/mock/plate/plate-list";
import { stepList } from "~/mock/step/step-list";
</script>

<style lang="scss" scoped>
.catalogMainBlock {
  margin-top: 100px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // height: 400px;
    // border-radius: 20px;
    margin-top: 10px;
    border: 1px solid $white-mask-three;

    @media (max-width: 576px) {
      border: 1px solid transparent;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // border-radius: 20px;
    // border: 1px solid $white-mask-four;
    // padding: 10px;
  }
}
</style>
