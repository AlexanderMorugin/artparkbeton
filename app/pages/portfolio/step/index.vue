<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени" subtitle="Портфолио" />
    <PortfolioList :portfolioList="allStepsPortfolio" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PORTFOLIO_STEP_DESCRIPTION,
  PORTFOLIO_STEP_IMAGE,
  PORTFOLIO_STEP_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { allStepsPortfolio } from "~/mock/portfolio/all-steps-portfolio";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Портфолио",
    path: "/portfolio",
    content: "2",
  },
  {
    name: "Ступени",
    path: "/portfolio/step",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PORTFOLIO_STEP_TITLE}`,
  description: `${PORTFOLIO_STEP_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PORTFOLIO_STEP_TITLE}`,
  ogDescription: `${PORTFOLIO_STEP_DESCRIPTION}`,
  ogImage: `${PORTFOLIO_STEP_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
