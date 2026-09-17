<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Наша плитка" />
    <PortfolioList :portfolioList="allPlatesPortfolio" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";
import { allPlatesPortfolio } from "~/mock/portfolio/all-plates-portfolio";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Портфолио",
    path: "/portfolio",
    content: "2",
  },
  {
    name: "Плитка",
    path: "/portfolio/plate",
    content: "last",
  },
];
</script>
