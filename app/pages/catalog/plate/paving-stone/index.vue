<template>
  <div>
    <ContainerPage>
      <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
      <TitlePage title="Брусчатка" subtitle="Каталог" />
    </ContainerPage>
    <ContainerPage emblaMobileWidth="emblaMobileWidth">
      <ProductCard
        :imageList="pavingStoneCardImages"
        :details="pavingStoneCardDetails"
        :prices="pavingStoneCardPrices"
      />
      <ContainerPageMobile>
        <ProductOptionCard
          name="description"
          title="Описание"
          :isButton="false"
          :isState="isDescriptionBlockOpen"
          :data="pavingStoneCardDescription"
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
        title="Портфолио работ"
        path="/portfolio/plate/paving-stone"
        :imageList="pavingStonePortfolioForCard"
      />
    </ContainerPage>
    <EmblaArrayCarouselBlock
      path="/catalog"
      title="Каталог изделий"
      place="catalog"
      :catalog="catalog"
    />
  </div>
</template>

<script lang="ts" setup>
import { catalog } from "~/mock/catalog";
import { delivery } from "~/mock/delivery";
import { installation } from "~/mock/installation";
import {
  PLATE_PAVING_STONE_DESCRIPTION,
  PLATE_PAVING_STONE_IMAGE,
  PLATE_PAVING_STONE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { payment } from "~/mock/payment";
import { pavingStoneCardDescription } from "~/mock/plate/paving-stone/paving-stone-card-description";
import { pavingStoneCardDetails } from "~/mock/plate/paving-stone/paving-stone-card-details";
import { pavingStoneCardImages } from "~/mock/plate/paving-stone/paving-stone-card-images";
import { pavingStoneCardPrices } from "~/mock/plate/paving-stone/paving-stone-card-prices";
import { pavingStonePortfolioForCard } from "~/mock/plate/paving-stone/paving-stone-portfolio-for-card";
import { stepOutsideCardOptions } from "~/mock/step/outside/step-outside-card-options";
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
    name: "Плитка",
    path: "/catalog/plate",
    content: "3",
  },
  {
    name: "Брусчатка",
    path: "/catalog/plate/paving-stone",
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
  title: `${PLATE_PAVING_STONE_TITLE}`,
  description: `${PLATE_PAVING_STONE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PLATE_PAVING_STONE_TITLE}`,
  ogDescription: `${PLATE_PAVING_STONE_DESCRIPTION}`,
  ogImage: `${PLATE_PAVING_STONE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
