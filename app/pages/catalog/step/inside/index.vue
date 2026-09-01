<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени для лестницы" />
    <StepCard :list="catalogStepInside" />
    <StepDescription />
    <StepOptions />
    <StepTime />
    <StepDelivery />
    <StepPayment />
    <StepInstallation />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { catalogStepInside } from "~/mock/steps/catalog-step-inside";
import { SITE } from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Каталог", path: "/catalog", content: "2" },
  {
    name: "Ступени",
    path: "/catalog/step",
    content: "3",
  },
  {
    name: "Для лестницы",
    path: "/inside",
    content: "last",
  },
];
</script>
