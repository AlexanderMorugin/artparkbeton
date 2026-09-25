<template>
  <div>
    <ContainerPage>
      <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
      <TitlePage title="Ступени криволинейные" subtitle="Каталог" />
    </ContainerPage>
    <ContainerPage emblaMobileWidth="emblaMobileWidth">
      <ProductCard
        :imageList="stepCurvedCardImages"
        :details="stepCurvedCardDetails"
        :prices="stepCurvedCardPrices"
      />
      <ContainerPageMobile>
        <ProductOptionCard
          name="description"
          title="Описание"
          :isButton="false"
          :isState="isDescriptionBlockOpen"
          :data="stepCurvedCardDescription"
        />
      </ContainerPageMobile>
    </ContainerPage>

    <ContainerPage>
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
        path="/portfolio/step/curved"
        :imageList="stepCurvedPortfolioForCard"
      />
    </ContainerPage>
    <CatalogCarousel />
  </div>
</template>

<script lang="ts" setup>
import { delivery } from "~/mock/delivery";
import { installation } from "~/mock/installation";
import {
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
  STEP_CURVED_DESCRIPTION,
  STEP_CURVED_IMAGE,
  STEP_CURVED_TITLE,
} from "~/mock/meta";
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
};

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${STEP_CURVED_TITLE}`,
  description: `${STEP_CURVED_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${STEP_CURVED_TITLE}`,
  ogDescription: `${STEP_CURVED_DESCRIPTION}`,
  ogImage: `${STEP_CURVED_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
