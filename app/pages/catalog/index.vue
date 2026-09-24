<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Каталог" />
    <Catalog :catalog="catalog" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  CATALOG_DESCRIPTION,
  CATALOG_IMAGE,
  CATALOG_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { catalog } from "~/mock/catalog";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Каталог",
    path: "/catalog",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${CATALOG_TITLE}`,
  description: `${CATALOG_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${CATALOG_TITLE}`,
  ogDescription: `${CATALOG_DESCRIPTION}`,
  ogImage: `${CATALOG_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
