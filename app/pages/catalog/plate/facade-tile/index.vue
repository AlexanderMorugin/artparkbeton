<template>
  <div>
    <ContainerPage>
      <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
      <TitlePage title="Фасадная плитка" subtitle="Каталог" />
    </ContainerPage>
    <ContainerPage emblaMobileWidth="emblaMobileWidth">
      <ProductCard
        :imageList="facadeTileCardImages"
        :details="facadeTileCardDetails"
        :prices="facadeTileCardPrices"
      />
      <ContainerPageMobile>
        <ProductOptionCard
          name="description"
          title="Описание"
          :isButton="false"
          :isState="isDescriptionBlockOpen"
          :data="facadeTileCardDescription"
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
        path="/portfolio/plate/facade-tile"
        :imageList="facadeTilePortfolioForCard"
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
  PLATE_FACADE_TILE_DESCRIPTION,
  PLATE_FACADE_TILE_IMAGE,
  PLATE_FACADE_TILE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { payment } from "~/mock/payment";
import { facadeTileCardDescription } from "~/mock/plate/facade-tile/facade-tile-card-description";
import { facadeTileCardDetails } from "~/mock/plate/facade-tile/facade-tile-card-details";
import { facadeTileCardImages } from "~/mock/plate/facade-tile/facade-tile-card-images";
import { facadeTileCardPrices } from "~/mock/plate/facade-tile/facade-tile-card-prices";
import { facadeTilePortfolioForCard } from "~/mock/plate/facade-tile/facade-tile-portfolio-for-card";
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
    name: "Фасадная",
    path: "/catalog/plate/facade-tile",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

const toggleOpening = (arg: string) => {
  if (arg === "options") isOptionsBlockOpen.value = !isOptionsBlockOpen.value;
};

useSeoMeta({
  title: `${PLATE_FACADE_TILE_TITLE}`,
  description: `${PLATE_FACADE_TILE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PLATE_FACADE_TILE_TITLE}`,
  ogDescription: `${PLATE_FACADE_TILE_DESCRIPTION}`,
  ogImage: `${PLATE_FACADE_TILE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
