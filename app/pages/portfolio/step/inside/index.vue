<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени для лестницы" subtitle="Портфолио" />
    <PortfolioCurrentList :imageList="stepInsidePortfolio" />
    <ProductPortfolioForCard
      title="Другие ступени"
      path="/portfolio/step"
      :imageList="stepStepsPortfolioForCard"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PORTFOLIO_STEP_INSIDE_DESCRIPTION,
  PORTFOLIO_STEP_INSIDE_IMAGE,
  PORTFOLIO_STEP_INSIDE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { stepStepsPortfolioForCard } from "~/mock/portfolio/all-steps-portfolio-for-card";
import { stepInsidePortfolio } from "~/mock/step/inside/step-inside-portfolio";

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
    content: "3",
  },
  {
    name: "Для лестницы",
    path: "/portfolio/step/inside",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PORTFOLIO_STEP_INSIDE_TITLE}`,
  description: `${PORTFOLIO_STEP_INSIDE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PORTFOLIO_STEP_INSIDE_TITLE}`,
  ogDescription: `${PORTFOLIO_STEP_INSIDE_DESCRIPTION}`,
  ogImage: `${PORTFOLIO_STEP_INSIDE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
