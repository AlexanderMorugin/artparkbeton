<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени для крыльца" />
    <PortfolioCurrentList title="Портфолио" :imageList="stepOutsidePortfolio" />
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
    path: "/portfolio/step",
    content: "3",
  },
  {
    name: "Для крыльца",
    path: "/outside",
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
