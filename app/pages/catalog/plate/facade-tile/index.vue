<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Фасадная плитка" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Каталог", path: "/catalog", content: "2" },
  {
    name: "Плитка",
    path: "/catalog/plate",
    content: "3",
  },
  {
    name: "Фасадная",
    path: "/catalog/plate/facade-tile",
    content: "last",
  },
];
</script>
