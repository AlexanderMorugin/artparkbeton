<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени для крыльца" />
    <StepCard :list="catalogStepOutside" />
    <StepDescription name="description" />
    <StepOptions
      name="options"
      :isState="isOptionsBlockOpen"
      @toggleOpening="toggleOpening('options')"
    />
    <StepTime
      name="time"
      :isState="isTimeBlockOpen"
      @toggleOpening="toggleOpening('time')"
    />
    <!-- <StepDelivery name="delivery" />
    <StepPayment name="payment" />
    <StepInstallation name="installation" /> -->
  </ContainerPage>
</template>

<script lang="ts" setup>
import { catalogStepOutside } from "~/mock/steps/catalog-step-outside";
import { SITE } from "~/mock/meta";

const route = useRoute();

const isOptionsBlockOpen = ref(false);
const isTimeBlockOpen = ref(false);

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

const toggleOpening = (arg: string) => {
  if (arg === "options") isOptionsBlockOpen.value = !isOptionsBlockOpen.value;
  if (arg === "time") isTimeBlockOpen.value = !isTimeBlockOpen.value;
};
</script>
