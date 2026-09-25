<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Информация для заказчика" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  CUSTOMER_DESCRIPTION,
  CUSTOMER_IMAGE,
  CUSTOMER_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Заказчику",
    path: "/customer",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${CUSTOMER_TITLE}`,
  description: `${CUSTOMER_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${CUSTOMER_TITLE}`,
  ogDescription: `${CUSTOMER_DESCRIPTION}`,
  ogImage: `${CUSTOMER_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
