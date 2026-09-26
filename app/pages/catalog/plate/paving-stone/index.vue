<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Брусчатка" subtitle="Каталог" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  PLATE_PAVING_STONE_DESCRIPTION,
  PLATE_PAVING_STONE_IMAGE,
  PLATE_PAVING_STONE_TITLE,
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
    name: "Брусчатка",
    path: "/catalog/plate/paving-stone",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${PLATE_PAVING_STONE_TITLE}`,
  description: `${PLATE_PAVING_STONE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${PLATE_PAVING_STONE_TITLE}`,
  ogDescription: `${PLATE_PAVING_STONE_DESCRIPTION}`,
  ogImage: `${PLATE_PAVING_STONE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
