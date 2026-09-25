<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Плитка" subtitle="Портфолио" />
    <PortfolioList :portfolioList="allPlatesPortfolio" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PORTFOLIO_PLATE_DESCRIPTION,
  PORTFOLIO_PLATE_IMAGE,
  PORTFOLIO_PLATE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { allPlatesPortfolio } from "~/mock/portfolio/all-plates-portfolio";

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
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PORTFOLIO_PLATE_TITLE}`,
  description: `${PORTFOLIO_PLATE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PORTFOLIO_PLATE_TITLE}`,
  ogDescription: `${PORTFOLIO_PLATE_DESCRIPTION}`,
  ogImage: `${PORTFOLIO_PLATE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
