<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Фасадная плитка" subtitle="Портфолио" />
    <PortfolioCurrentList :imageList="facadeTilePortfolio" />
    <ProductPortfolioForCard
      title="Другая плитка"
      path="/portfolio/plate"
      :imageList="allPlatePortfolioForCard"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PORTFOLIO_PLATE_FACADE_TILE_DESCRIPTION,
  PORTFOLIO_PLATE_FACADE_TILE_IMAGE,
  PORTFOLIO_PLATE_FACADE_TILE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { facadeTilePortfolio } from "~/mock/plate/facade-tile/facade-tile-portfolio";
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
    name: "Фасадная",
    path: "/portfolio/plate/facade-tile",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PORTFOLIO_PLATE_FACADE_TILE_TITLE}`,
  description: `${PORTFOLIO_PLATE_FACADE_TILE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PORTFOLIO_PLATE_FACADE_TILE_TITLE}`,
  ogDescription: `${PORTFOLIO_PLATE_FACADE_TILE_DESCRIPTION}`,
  ogImage: `${PORTFOLIO_PLATE_FACADE_TILE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
