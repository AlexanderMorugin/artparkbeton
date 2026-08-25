<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Подоконники" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Каталог", path: "/catalog", content: "2" },
  {
    name: "Подоконники",
    path: "/sill",
    content: "last",
  },
];
</script>
