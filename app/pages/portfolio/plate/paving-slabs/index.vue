<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Тротуарная плитка" subtitle="Портфолио" />
    <PortfolioCurrentList :imageList="pavingSlabsPortfolio" />
    <ProductPortfolioForCard
      title="Другие ступени"
      path="/portfolio/step"
      :imageList="stepStepsPortfolioForCard"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";
import { pavingSlabsPortfolio } from "~/mock/plate/paving-slabs/paving-slabs-portfolio";
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
