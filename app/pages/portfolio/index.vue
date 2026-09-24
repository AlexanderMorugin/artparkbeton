<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Наши работы" subtitle="Портфолио" />
    <PortfolioList :portfolioList="allProductsPortfolio" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PORTFOLIO_DESCRIPTION,
  PORTFOLIO_IMAGE,
  PORTFOLIO_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { allProductsPortfolio } from "~/mock/portfolio/all-products-portfolio";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Портфолио",
    path: "/portfolio",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PORTFOLIO_TITLE}`,
  description: `${PORTFOLIO_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PORTFOLIO_TITLE}`,
  ogDescription: `${PORTFOLIO_DESCRIPTION}`,
  ogImage: `${PORTFOLIO_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
