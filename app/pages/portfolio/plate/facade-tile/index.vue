<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Фасадная плитка" />
    <PortfolioCurrentList title="Портфолио" :imageList="facadeTilePortfolio" />
    <ProductPortfolioForCard
      title="Другие ступени"
      path="/portfolio/step"
      :imageList="stepStepsPortfolioForCard"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";
import { facadeTilePortfolio } from "~/mock/plate/facade-tile/facade-tile-portfolio";
import { stepStepsPortfolioForCard } from "~/mock/portfolio/all-steps-portfolio-for-card";

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
    content: "3",
  },
  {
    name: "Тротуарная",
    path: "/portfolio/plate/paving-slabs",
    content: "last",
  },
];
</script>
