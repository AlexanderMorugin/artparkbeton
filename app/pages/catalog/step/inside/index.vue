<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени для лестницы" />
    <ProductCard
      :imageList="stepInsideCardImages"
      :details="stepInsideCardDetails"
      :prices="stepInsideCardPrices"
    />
    <ProductOptionCard
      name="description"
      title="Описание"
      :isState="isDescriptionBlockOpen"
      :data="stepInsideCardDescription"
    />
    <ProductOptionCard
      name="options"
      title="Характеристики"
      :isState="isOptionsBlockOpen"
      :data="stepInsideCardOptions"
      @toggleOpening="toggleOpening('options')"
    />
    <ProductOptionCard
      name="time"
      title="Сроки"
      :isState="isTimeBlockOpen"
      :data="timeOfWork"
      @toggleOpening="toggleOpening('time')"
    />
    <ProductOptionCard
      name="delivery"
      title="Доставка"
      :isState="isDeliveryBlockOpen"
      :data="delivery"
      @toggleOpening="toggleOpening('delivery')"
    />
    <ProductOptionCard
      name="payment"
      title="Оплата"
      :isState="isPaymentBlockOpen"
      :data="payment"
      @toggleOpening="toggleOpening('payment')"
    />
    <ProductOptionCard
      name="installation"
      title="Монтаж"
      :isState="isInstallationBlockOpen"
      :data="installation"
      @toggleOpening="toggleOpening('installation')"
    />
  </ContainerPage>
  <UltrabetonPromo />
  <ContainerPage>
    <ProductPortfolioForCard
      title="Смотреть портфолио"
      path="/portfolio/step/inside"
      :imageList="stepInsidePortfolioForCard"
    />
    <CatalogCarousel />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { delivery } from "~/mock/delivery";
import { installation } from "~/mock/installation";
import { SITE } from "~/mock/meta";
import { payment } from "~/mock/payment";
import { stepInsideCardDescription } from "~/mock/step/inside/step-inside-card-description";
import { stepInsideCardDetails } from "~/mock/step/inside/step-inside-card-details";
import { stepInsideCardImages } from "~/mock/step/inside/step-inside-card-images";
import { stepInsideCardOptions } from "~/mock/step/inside/step-inside-card-options";
import { stepInsideCardPrices } from "~/mock/step/inside/step-inside-card-prices";
import { stepInsidePortfolioForCard } from "~/mock/step/inside/step-inside-portfolio-for-card";
import { timeOfWork } from "~/mock/time-of-work";

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
    name: "Для лестницы",
    path: "/inside",
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
