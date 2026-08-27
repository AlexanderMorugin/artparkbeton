<template>
  <section class="stepCatalog">
    <CatalogPictureCard
      route="/catalog/step/inside"
      title="Ступени для лестницы"
    />
    <CatalogPictureCard
      route="/catalog/step/outside"
      title="Ступени для крыльца"
    />
    <CatalogPictureCard
      route="/catalog/step/curved"
      title="Ступени криволинейные"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.stepCatalog {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
