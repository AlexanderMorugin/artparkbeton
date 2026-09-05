<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени для крыльца" />
    <StepCard :list="catalogStepOutside" />
    <StepDescription name="description" :isState="isDescriptionBlockOpen" />
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
    <StepDelivery
      name="delivery"
      :isState="isDeliveryBlockOpen"
      @toggleOpening="toggleOpening('delivery')"
    />
    <StepPayment
      name="payment"
      :isState="isPaymentBlockOpen"
      @toggleOpening="toggleOpening('payment')"
    />
    <StepInstallation
      name="installation"
      :isState="isInstallationBlockOpen"
      @toggleOpening="toggleOpening('installation')"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { catalogStepOutside } from "~/mock/steps/catalog-step-outside";
import { SITE } from "~/mock/meta";

const route = useRoute();

const isDescriptionBlockOpen = ref(true);
const isOptionsBlockOpen = ref(false);
const isTimeBlockOpen = ref(false);
const isDeliveryBlockOpen = ref(false);
const isPaymentBlockOpen = ref(false);
const isInstallationBlockOpen = ref(false);

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
  if (arg === "delivery")
    isDeliveryBlockOpen.value = !isDeliveryBlockOpen.value;
  if (arg === "payment") isPaymentBlockOpen.value = !isPaymentBlockOpen.value;
  if (arg === "installation")
    isInstallationBlockOpen.value = !isInstallationBlockOpen.value;
};
</script>
