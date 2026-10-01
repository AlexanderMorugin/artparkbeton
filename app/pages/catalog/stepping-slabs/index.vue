<template>
  <div>
    <ContainerPage>
      <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
      <TitlePage title="Шаговые плиты" subtitle="Каталог" />
    </ContainerPage>
    <ContainerPage emblaMobileWidth="emblaMobileWidth">
      <ProductCard
        :imageList="steppingSlabsCardImages"
        :details="steppingSlabsCardDetails"
        :prices="steppingSlabsCardPrices"
      />
      <ContainerPageMobile>
        <ProductOptionCard
          name="description"
          title="Описание"
          :isButton="false"
          :isState="isDescriptionBlockOpen"
          :data="steppingSlabsCardDescription"
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
        path="/portfolio/stepping-slabs"
        :imageList="steppingSlabsPortfolioForCard"
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
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
  STEPPING_SLABS_DESCRIPTION,
  STEPPING_SLABS_IMAGE,
  STEPPING_SLABS_TITLE,
} from "~/mock/meta";
import { payment } from "~/mock/payment";
import { stepOutsideCardOptions } from "~/mock/step/outside/step-outside-card-options";
import { steppingSlabsCardDescription } from "~/mock/stepping-slabs/stepping-slabs-card-description";
import { steppingSlabsCardDetails } from "~/mock/stepping-slabs/stepping-slabs-card-details";
import { steppingSlabsCardImages } from "~/mock/stepping-slabs/stepping-slabs-card-images";
import { steppingSlabsCardPrices } from "~/mock/stepping-slabs/stepping-slabs-card-prices";
import { steppingSlabsPortfolioForCard } from "~/mock/stepping-slabs/stepping-slabs-portfolio-for-card";
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
    name: "Шаговые",
    path: "/catalog/stepping-slabs",
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
  title: `${STEPPING_SLABS_TITLE}`,
  description: `${STEPPING_SLABS_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${STEPPING_SLABS_TITLE}`,
  ogDescription: `${STEPPING_SLABS_DESCRIPTION}`,
  ogImage: `${STEPPING_SLABS_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
