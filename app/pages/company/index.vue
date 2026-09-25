<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Мастерская" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  COMPANY_DESCRIPTION,
  COMPANY_IMAGE,
  COMPANY_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Мастерская",
    path: "/company",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}` }],
});

useSeoMeta({
  title: `${COMPANY_TITLE}`,
  description: `${COMPANY_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${COMPANY_TITLE}`,
  ogDescription: `${COMPANY_DESCRIPTION}`,
  ogImage: `${COMPANY_IMAGE}`,
  ogUrl: `${SITE}/`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
