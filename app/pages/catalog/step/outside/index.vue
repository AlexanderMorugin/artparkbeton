<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени для крыльца" />
    <StepCard :list="catalogStepOutside" />
    <StepDescription />
    <StepOptions />
    <StepTime />
    <StepDelivery />
    <StepPayment />
    <StepInstallation />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { catalogStepOutside } from "~/mock/steps/catalog-step-outside";
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
    name: "Для крыльца",
    path: "/outside",
    content: "last",
  },
];
</script>
