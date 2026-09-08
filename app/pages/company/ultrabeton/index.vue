<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ультрабетон" />
    <div>
      Здесь будет текст про ультрабетон, технологию и другие его свойства и
      качества.
    </div>
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Компания",
    path: "/company",
    content: "2",
  },
  {
    name: "Ультрабетон",
    path: "/ultrabeton",
    content: "last",
  },
];
</script>
