<template>
  <div>
    <ContainerPage>
      <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
      <TitlePage title="Ступени для лестницы" subtitle="Каталог" />
    </ContainerPage>
    <ContainerPage emblaMobileWidth="emblaMobileWidth">
      <ProductCard
        :imageList="stepInsideCardImages"
        :details="stepInsideCardDetails"
        :prices="stepInsideCardPrices"
      />
      <ContainerPageMobile>
        <ProductOptionCard
          name="description"
          title="Описание"
          :isButton="false"
          :isState="isDescriptionBlockOpen"
          :data="stepInsideCardDescription"
        />
      </ContainerPageMobile>
    </ContainerPage>
    <ContainerPage>
      <ProductOptionCard
        name="options"
        title="Характеристики"
        :isButton="true"
        :isState="isOptionsBlockOpen"
        :data="stepInsideCardOptions"
        @toggleOpening="toggleOpening('options')"
      />
      <ProductOptionCard
        name="time"
        title="Сроки"
        :isButton="false"
        :isState="isTimeBlockOpen"
        :data="timeOfWork"
      />
      <ProductOptionCard
        name="delivery"
        title="Доставка"
        :isButton="false"
        :isState="isDeliveryBlockOpen"
        :data="delivery"
      />
      <ProductOptionCard
        name="payment"
        title="Оплата"
        :isButton="false"
        :isState="isPaymentBlockOpen"
        :data="payment"
      />
      <ProductOptionCard
        name="installation"
        title="Монтаж"
        :isButton="false"
        :isState="isInstallationBlockOpen"
        :data="installation"
      />
    </ContainerPage>
    <UltrabetonPromo />
    <ContainerPage>
      <ProductPortfolioForCard
        title="Смотреть портфолио"
        path="/portfolio/step/inside"
        :imageList="stepInsidePortfolioForCard"
      />
    </ContainerPage>
    <CatalogCarousel />
  </div>
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
    name: "Для лестницы",
    path: "/catalog/step/inside",
    content: "last",
  },
];

const toggleOpening = (arg: string) => {
  if (arg === "options") isOptionsBlockOpen.value = !isOptionsBlockOpen.value;
};
</script>
