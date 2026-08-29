<template>
  <section class="stepCatalog">
    <CatalogPictureCard
      float="left"
      route="/catalog/step/inside"
      title="Ступени для лестницы"
      image="/images/catalog/step/step-inside-800-500.webp"
    />
    <CatalogPictureCard
      float="right"
      route="/catalog/step/outside"
      title="Ступени для крыльца"
      image="/images/catalog/step/step-outside-800-500.webp"
    />
    <CatalogPictureCard
      float="center"
      route="/catalog/step/curved"
      title="Ступени криволинейные"
      image="/images/catalog/step/step-curved-800-500.webp"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.stepCatalog {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 1rem;

  // border: 1px solid red;
}
</style>
