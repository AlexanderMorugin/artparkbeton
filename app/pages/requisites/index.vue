<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage isImportant="noImportant" title="Реквизиты" />
    <DocRequisites />
  </ContainerPage>
</template>

<script lang="ts" setup>
import { SITE } from "~/mock/meta";

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

// useSeoMeta({
//   title: `${REVIEW_TITLE}`,
//   description: `${REVIEW_DESCRIPTION}`,
//   author: `${SITE_AUTHOR}`,
//   robots: "index, follow",
//   ogTitle: `${REVIEW_TITLE}`,
//   ogDescription: `${REVIEW_DESCRIPTION}`,
//   ogImage: `${REVIEW_IMAGE}`,
//   ogUrl: `${SITE}/`,
//   ogSiteName: `${SITE_NAME}`,
//   ogType: "website",
//   ogLocale: "ru_RU",
// });
</script>
