<script lang="ts" setup>
import { SITE } from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Гарантия",
    path: "/guarantee",
    content: "last",
  },
];
</script>

<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Гарантия и сертификаты" />
  </ContainerPage>
</template>

<!-- <style lang="scss" scoped>
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
</style> -->
