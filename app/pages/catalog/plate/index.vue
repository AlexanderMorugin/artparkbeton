<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Плитка" subtitle="Каталог" />
    <CatalogListCardImage :list="plateList" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PLATE_DESCRIPTION,
  PLATE_IMAGE,
  PLATE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { plateList } from "~/mock/plate/plate-list";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Каталог", path: "/catalog", content: "2" },
  {
    name: "Плитка",
    path: "/catalog/plate",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PLATE_TITLE}`,
  description: `${PLATE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PLATE_TITLE}`,
  ogDescription: `${PLATE_DESCRIPTION}`,
  ogImage: `${PLATE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
