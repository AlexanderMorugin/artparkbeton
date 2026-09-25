<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ступени" subtitle="Каталог" />
    <CatalogListCardImage :list="stepList" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
  STEP_DESCRIPTION,
  STEP_IMAGE,
  STEP_TITLE,
} from "~/mock/meta";
import { stepList } from "~/mock/step/step-list";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Каталог", path: "/catalog", content: "2" },
  {
    name: "Ступени",
    path: "/catalog/step",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${STEP_TITLE}`,
  description: `${STEP_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${STEP_TITLE}`,
  ogDescription: `${STEP_DESCRIPTION}`,
  ogImage: `${STEP_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
