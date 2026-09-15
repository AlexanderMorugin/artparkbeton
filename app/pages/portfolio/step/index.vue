<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Наши ступени" />
    <div class="protfolioBlockList">
      <PortfolioCurrentList
        title="Ступени для крыльца"
        :imageList="stepOutsidePortfolio"
      />
      <PortfolioCurrentList
        title="Ступени для лестницы"
        :imageList="stepInsidePortfolio"
      />
    </div>
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";
import { stepInsidePortfolio } from "~/mock/step/inside/step-inside-portfolio";
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

<style lang="scss" scoped>
.protfolioBlockList {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
