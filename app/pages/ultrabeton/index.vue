<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Ультрабетон" />
    <UltrabetonBlock />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
  ULTRABETON_DESCRIPTION,
  ULTRABETON_IMAGE,
  ULTRABETON_TITLE,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Ультрабетон",
    path: "/ultrabeton",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${ULTRABETON_TITLE}`,
  description: `${ULTRABETON_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${ULTRABETON_TITLE}`,
  ogDescription: `${ULTRABETON_DESCRIPTION}`,
  ogImage: `${ULTRABETON_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
