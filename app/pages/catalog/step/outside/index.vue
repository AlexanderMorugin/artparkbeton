<template>
  <div>
    <ContainerPage>
      <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
      <TitlePage title="Ступени для крыльца" subtitle="Каталог" />
    </ContainerPage>
    <ContainerPage emblaMobileWidth="emblaMobileWidth">
      <ProductCard
        :imageList="stepOutsideCardImages"
        :details="stepOutsideCardDetails"
        :prices="stepOutsideCardPrices"
      />
      <ContainerPageMobile>
        <ProductOptionCard
          name="description"
          title="Описание"
          :isButton="false"
          :isState="isDescriptionBlockOpen"
          :data="stepOutsideCardDescription"
        />
      </ContainerPageMobile>
    </ContainerPage>

    <ContainerPage>
      <ProductOptionCard
        name="options"
        title="Характеристики"
        :isButton="true"
        :isState="isOptionsBlockOpen"
        :data="stepOutsideCardOptions"
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
        path="/portfolio/step/outside"
        :imageList="stepOutsidePortfolioForCard"
      />
    </ContainerPage>
    <CatalogCarousel />
  </div>
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
    name: "Для крыльца",
    path: "/catalog/step/outside",
    content: "last",
  },
];

const toggleOpening = (arg: string) => {
  if (arg === "options") isOptionsBlockOpen.value = !isOptionsBlockOpen.value;
};
</script>
