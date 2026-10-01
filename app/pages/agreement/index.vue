<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage isImportant="noImportant" title="Пользовательское соглашение" />
    <DocAgreement />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  AGREEMENT_DESCRIPTION,
  AGREEMENT_IMAGE,
  AGREEMENT_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Соглашение",
    path: "/agreement",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${AGREEMENT_TITLE}`,
  description: `${AGREEMENT_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${AGREEMENT_TITLE}`,
  ogDescription: `${AGREEMENT_DESCRIPTION}`,
  ogImage: `${AGREEMENT_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
