<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage isImportant="noImportant" title="Реквизиты" />
    <DocRequisites />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  REQUISITES_DESCRIPTION,
  REQUISITES_IMAGE,
  REQUISITES_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Реквизиты",
    path: "/requisites",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${REQUISITES_TITLE}`,
  description: `${REQUISITES_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${REQUISITES_TITLE}`,
  ogDescription: `${REQUISITES_DESCRIPTION}`,
  ogImage: `${REQUISITES_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
