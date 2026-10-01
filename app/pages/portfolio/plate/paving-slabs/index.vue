<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Тротуарная плитка" subtitle="Портфолио" />
    <PortfolioCurrentList :imageList="pavingSlabsPortfolio" />
    <ProductPortfolioForCard
      title="Другая плитка"
      path="/portfolio/plate"
      :imageList="allPlatePortfolioForCard"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PORTFOLIO_PLATE_PAVING_SLABS_DESCRIPTION,
  PORTFOLIO_PLATE_PAVING_SLABS_IMAGE,
  PORTFOLIO_PLATE_PAVING_SLABS_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { pavingSlabsPortfolio } from "~/mock/plate/paving-slabs/paving-slabs-portfolio";
import { allPlatePortfolioForCard } from "~/mock/portfolio/all-plate-portfolio-for-card";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Портфолио",
    path: "/portfolio",
    content: "2",
  },
  {
    name: "Плитка",
    path: "/portfolio/plate",
    content: "3",
  },
  {
    name: "Тротуарная",
    path: "/portfolio/plate/paving-slabs",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PORTFOLIO_PLATE_PAVING_SLABS_TITLE}`,
  description: `${PORTFOLIO_PLATE_PAVING_SLABS_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PORTFOLIO_PLATE_PAVING_SLABS_TITLE}`,
  ogDescription: `${PORTFOLIO_PLATE_PAVING_SLABS_DESCRIPTION}`,
  ogImage: `${PORTFOLIO_PLATE_PAVING_SLABS_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
