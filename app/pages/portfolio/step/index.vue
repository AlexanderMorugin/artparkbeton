<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Наши ступени" />
    <PortfolioCurrentList :imageList="stepOutsidePortfolio" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";
import { stepOutsidePortfolio } from "~/mock/step/outside/step-outside-portfolio";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Портфолио",
    path: "/portfolio",
    content: "2",
  },
  {
    name: "Ступени",
    path: "/step",
    content: "last",
  },
];
</script>
