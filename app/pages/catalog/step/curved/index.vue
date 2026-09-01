<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени криволинейные" />
    <StepCard :list="catalogStepCurved" />
    <StepDescription />
    <StepOptions />
    <StepTime />
    <StepDelivery />
    <StepPayment />
    <StepInstallation />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";
import { catalogStepCurved } from "~/mock/steps/catalog-step-curved";

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
    name: "Криволинейные",
    path: "/curved",
    content: "last",
  },
];
</script>
