<template>
  <ContainerPage class="page-padding-bottom">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Контакты" />
    <Contact />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  CONTACT_DESCRIPTION,
  CONTACT_IMAGE,
  CONTACT_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Контакты",
    path: "/contact",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${CONTACT_TITLE}`,
  description: `${CONTACT_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${CONTACT_TITLE}`,
  ogDescription: `${CONTACT_DESCRIPTION}`,
  ogImage: `${CONTACT_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
