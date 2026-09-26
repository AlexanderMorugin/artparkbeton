<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Шаговые плиты" subtitle="Каталог" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
  STEPPING_SLABS_DESCRIPTION,
  STEPPING_SLABS_IMAGE,
  STEPPING_SLABS_TITLE,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  { name: "Каталог", path: "/catalog", content: "2" },
  {
    name: "Шаговые",
    path: "/catalog/stepping-slabs",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${STEPPING_SLABS_TITLE}`,
  description: `${STEPPING_SLABS_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${STEPPING_SLABS_TITLE}`,
  ogDescription: `${STEPPING_SLABS_DESCRIPTION}`,
  ogImage: `${STEPPING_SLABS_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
