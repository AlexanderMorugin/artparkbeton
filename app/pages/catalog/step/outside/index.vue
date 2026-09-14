<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени для крыльца" />
    <ProductCard
      :imageList="stepOutsideCardImages"
      :details="stepOutsideCardDetails"
      :prices="stepOutsideCardPrices"
    />
    <ProductOptionCard
      name="description"
      title="Описание"
      :isState="isDescriptionBlockOpen"
      :data="stepOutsideCardDescription"
    />
    <ProductOptionCard
      name="options"
      title="Характеристики"
      :isState="isOptionsBlockOpen"
      :data="stepOutsideCardOptions"
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
    <ProductPortfolioForCard :imageList="stepOutsidePortfolioForCard" />
    <CatalogCarousel />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { delivery } from "~/mock/delivery";
import { SITE } from "~/mock/meta";
import { stepOutsideCardDescription } from "~/mock/step/outside/step-outside-card-description";
import { stepOutsideCardDetails } from "~/mock/step/outside/step-outside-card-details";
import { stepOutsideCardImages } from "~/mock/step/outside/step-outside-card-images";
import { stepOutsideCardOptions } from "~/mock/step/outside/step-outside-card-options";
import { stepOutsideCardPrices } from "~/mock/step/outside/step-outside-card-prices";
import { stepOutsidePortfolioForCard } from "~/mock/step/outside/step-outside-portfolio-for-card";
import { timeOfWork } from "~/mock/time-of-work";
import { payment } from "~/mock/payment";
import { installation } from "~/mock/installation";

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
