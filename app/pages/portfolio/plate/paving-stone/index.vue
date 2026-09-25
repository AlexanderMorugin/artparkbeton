<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Брусчатка" subtitle="Портфолио" />
    <PortfolioCurrentList :imageList="pavingStonePortfolio" />
    <ProductPortfolioForCard
      title="Другие ступени"
      path="/portfolio/step"
      :imageList="stepStepsPortfolioForCard"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PORTFOLIO_PLATE_PAVING_STONE_DESCRIPTION,
  PORTFOLIO_PLATE_PAVING_STONE_IMAGE,
  PORTFOLIO_PLATE_PAVING_STONE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { pavingStonePortfolio } from "~/mock/plate/paving-stone/facade-tile-portfolio";
import { stepStepsPortfolioForCard } from "~/mock/portfolio/all-steps-portfolio-for-card";

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
    name: "Брусчатка",
    path: "/portfolio/plate/paving-stone",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PORTFOLIO_PLATE_PAVING_STONE_TITLE}`,
  description: `${PORTFOLIO_PLATE_PAVING_STONE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PORTFOLIO_PLATE_PAVING_STONE_TITLE}`,
  ogDescription: `${PORTFOLIO_PLATE_PAVING_STONE_DESCRIPTION}`,
  ogImage: `${PORTFOLIO_PLATE_PAVING_STONE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
