<script lang="ts" setup>
import { SITE } from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Услуги",
    path: "/service",
    content: "last",
  },
];
</script>

<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <div class="container">
      <h1 class="title">Услуги</h1>
    </div>
  </ContainerPage>
</template>

<style lang="scss" scoped>
.title {
  width: 100%;
  text-align: center;
}
.container {
  display: grid;
  align-items: center;
  outline: 1px solid red;
  height: 100%;
}
</style>
