<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Шаговые плиты" />
    <PortfolioCurrentList
      title="Портфолио"
      :imageList="steppingSlabsPortfolio"
    />
    <ProductPortfolioForCard
      title="Другие ступени"
      path="/portfolio/step"
      :imageList="stepStepsPortfolioForCard"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";
import { steppingSlabsPortfolio } from "~/mock/stepping-slabs/stepping-slabs-portfolio";
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
    name: "Шаговые",
    path: "/portfolio/plate/stepping-slabs",
    content: "last",
  },
];
</script>
