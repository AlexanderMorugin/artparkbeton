<template>
  <div>
    <ContainerPage>
      <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
      <TitlePage title="Тротуарная плитка" subtitle="Каталог" />
    </ContainerPage>

    <ContainerPage emblaMobileWidth="emblaMobileWidth">
      <ProductCard
        :imageList="pavingSlabsCardImages"
        :details="pavingSlabsCardDetails"
        :prices="pavingSlabsCardPrices"
      />
      <ContainerPageMobile>
        <ProductOptionCard
          name="description"
          title="Описание"
          :isButton="false"
          :isState="isDescriptionBlockOpen"
          :data="pavingSlabsCardDescription"
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
        path="/portfolio/plate/paving-slabs"
        :imageList="pavingSlabsPortfolioForCard"
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
  PLATE_PAVING_SLABS_DESCRIPTION,
  PLATE_PAVING_SLABS_IMAGE,
  PLATE_PAVING_SLABS_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { payment } from "~/mock/payment";
import { pavingSlabsCardDescription } from "~/mock/plate/paving-slabs/paving-slabs-card-description";
import { pavingSlabsCardDetails } from "~/mock/plate/paving-slabs/paving-slabs-card-details";
import { pavingSlabsCardImages } from "~/mock/plate/paving-slabs/paving-slabs-card-images";
import { pavingSlabsCardPrices } from "~/mock/plate/paving-slabs/paving-slabs-card-prices";
import { pavingSlabsPortfolioForCard } from "~/mock/plate/paving-slabs/paving-slabs-portfolio-for-card";
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
    name: "Тротуарная",
    path: "/catalog/plate/paving-slabs",
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
  title: `${PLATE_PAVING_SLABS_TITLE}`,
  description: `${PLATE_PAVING_SLABS_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PLATE_PAVING_SLABS_TITLE}`,
  ogDescription: `${PLATE_PAVING_SLABS_DESCRIPTION}`,
  ogImage: `${PLATE_PAVING_SLABS_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
