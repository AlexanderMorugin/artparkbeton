<template>
  <section class="stepCatalog">
    <CatalogPictureCard
      float="left"
      route="/catalog/step/inside"
      title="Ступени для лестницы"
      image="/images/catalog/step/inside/steps-inside-1-n.webp"
    />
    <CatalogPictureCard
      float="right"
      route="/catalog/step/outside"
      title="Ступени для крыльца"
      image="/images/catalog/step/outside/steps-outside-1-n.webp"
    />
    <CatalogPictureCard
      float="center"
      route="/catalog/step/curved"
      title="Ступени криволинейные"
      image="/images/catalog/step/curved/steps-curved-1-n.webp"
    />
  </section>
</template>

<!-- <script setup lang="ts"></script> -->

<style lang="scss" scoped>
.stepCatalog {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 1rem;

  // border: 1px solid red;
}
</style>
