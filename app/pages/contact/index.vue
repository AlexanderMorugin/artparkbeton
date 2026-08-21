<script lang="ts" setup>
import { SITE } from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Контакты",
    path: "/contact",
    content: "last",
  },
];
</script>

<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Контакты" />
  </ContainerPage>
</template>

<!-- <style lang="scss" scoped>
.title {
  width: 100%;
  text-align: center;
}
</style> -->
