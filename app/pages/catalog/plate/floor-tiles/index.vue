<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Напольная плитка" />
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
    name: "Напольная",
    path: "/catalog/plate/floor-tiles",
    content: "last",
  },
];
</script>
