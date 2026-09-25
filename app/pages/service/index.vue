<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Услуги" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  SERVICE_DESCRIPTION,
  SERVICE_IMAGE,
  SERVICE_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Услуги",
    path: "/service",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${SERVICE_TITLE}`,
  description: `${SERVICE_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${SERVICE_TITLE}`,
  ogDescription: `${SERVICE_DESCRIPTION}`,
  ogImage: `${SERVICE_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
