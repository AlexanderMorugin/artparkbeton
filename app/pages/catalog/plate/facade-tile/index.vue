<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Фасадная плитка" subtitle="Каталог" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PLATE_FACADE_TILE_DESCRIPTION,
  PLATE_FACADE_TILE_IMAGE,
  PLATE_FACADE_TILE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Каталог", path: "/catalog", content: "2" },
  {
    name: "Плитка",
    path: "/catalog/plate",
    content: "3",
  },
  {
    name: "Фасадная",
    path: "/catalog/plate/facade-tile",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PLATE_FACADE_TILE_TITLE}`,
  description: `${PLATE_FACADE_TILE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PLATE_FACADE_TILE_TITLE}`,
  ogDescription: `${PLATE_FACADE_TILE_DESCRIPTION}`,
  ogImage: `${PLATE_FACADE_TILE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
