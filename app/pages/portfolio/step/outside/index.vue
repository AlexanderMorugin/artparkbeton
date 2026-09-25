<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени для крыльца" subtitle="Портфолио" />
    <PortfolioCurrentList :imageList="stepOutsidePortfolio" />
    <ProductPortfolioForCard
      title="Другие ступени"
      path="/portfolio/step"
      :imageList="stepStepsPortfolioForCard"
    />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PORTFOLIO_STEP_OUTSIDE_DESCRIPTION,
  PORTFOLIO_STEP_OUTSIDE_IMAGE,
  PORTFOLIO_STEP_OUTSIDE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { stepStepsPortfolioForCard } from "~/mock/portfolio/all-steps-portfolio-for-card";
import { stepOutsidePortfolio } from "~/mock/step/outside/step-outside-portfolio";

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
    name: "Для крыльца",
    path: "/portfolio/step/outside",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PORTFOLIO_STEP_OUTSIDE_TITLE}`,
  description: `${PORTFOLIO_STEP_OUTSIDE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PORTFOLIO_STEP_OUTSIDE_TITLE}`,
  ogDescription: `${PORTFOLIO_STEP_OUTSIDE_DESCRIPTION}`,
  ogImage: `${PORTFOLIO_STEP_OUTSIDE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
