<template>
  <section class="stepCatalog">
    <h2>Каталог ступеней</h2>

    <NuxtLink to="/catalog/step/inside">ступени для лестницы</NuxtLink>
    <NuxtLink to="/catalog/step/outside">ступени для уличного крыльца</NuxtLink>
    <NuxtLink to="/catalog/step/curved">ступени криволинейные</NuxtLink>
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
