<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени криволинейные" />
    <PortfolioCurrentList title="Портфолио" :imageList="stepCurvedPortfolio" />
    <ProductPortfolioForCard
      title="Другие ступени"
      path="/portfolio/step"
      :imageList="stepStepsPortfolioForCard"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";
import { stepStepsPortfolioForCard } from "~/mock/portfolio/all-steps-portfolio-for-card";
import { stepCurvedPortfolio } from "~/mock/step/curved/step-curved-portfolio";

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
    path: "/portfolio/step",
    content: "3",
  },
  {
    name: "криволинейные",
    path: "/curved",
    content: "last",
  },
];
</script>

<style lang="scss" scoped>
.protfolioBlockList {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
