<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени криволинейные" subtitle="Каталог" />
    <ProductCard
      :imageList="stepCurvedCardImages"
      :details="stepCurvedCardDetails"
      :prices="stepCurvedCardPrices"
    />
    <ProductOptionCard
      name="description"
      title="Описание"
      :isButton="false"
      :isState="isDescriptionBlockOpen"
      :data="stepCurvedCardDescription"
    />
    <ProductOptionCard
      name="options"
      title="Характеристики"
      :isButton="true"
      :isState="isOptionsBlockOpen"
      :data="stepCurvedCardOptions"
      @toggleOpening="toggleOpening('options')"
    />
    <ProductOptionCard
      name="time"
      title="Сроки"
      :isButton="false"
      :isState="isTimeBlockOpen"
      :data="timeOfWork"
      @toggleOpening="toggleOpening('time')"
    />
    <ProductOptionCard
      name="delivery"
      title="Доставка"
      :isButton="false"
      :isState="isDeliveryBlockOpen"
      :data="delivery"
      @toggleOpening="toggleOpening('delivery')"
    />
    <ProductOptionCard
      name="payment"
      title="Оплата"
      :isButton="false"
      :isState="isPaymentBlockOpen"
      :data="payment"
      @toggleOpening="toggleOpening('payment')"
    />
    <ProductOptionCard
      name="installation"
      title="Монтаж"
      :isButton="false"
      :isState="isInstallationBlockOpen"
      :data="installation"
      @toggleOpening="toggleOpening('installation')"
    />
  </ContainerPage>
  <UltrabetonPromo />
  <ContainerPage>
    <ProductPortfolioForCard
      title="Смотреть портфолио"
      path="/portfolio/step/curved"
      :imageList="stepCurvedPortfolioForCard"
    />
    <CatalogCarousel />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { delivery } from "~/mock/delivery";
import { installation } from "~/mock/installation";
import { SITE } from "~/mock/meta";
import { payment } from "~/mock/payment";
import { stepCurvedCardDescription } from "~/mock/step/curved/step-curved-card-description";
import { stepCurvedCardDetails } from "~/mock/step/curved/step-curved-card-details";
import { stepCurvedCardImages } from "~/mock/step/curved/step-curved-card-images";
import { stepCurvedCardOptions } from "~/mock/step/curved/step-curved-card-options";
import { stepCurvedCardPrices } from "~/mock/step/curved/step-curved-card-prices";
import { stepCurvedPortfolioForCard } from "~/mock/step/curved/step-curved-portfolio-for-card";
import { timeOfWork } from "~/mock/time-of-work";

const route = useRoute();

const isDescriptionBlockOpen = ref(true);
const isOptionsBlockOpen = ref(false);
const isTimeBlockOpen = ref(true);
const isDeliveryBlockOpen = ref(true);
const isPaymentBlockOpen = ref(true);
const isInstallationBlockOpen = ref(true);

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
    path: "/catalog/step/curved",
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
