<template>
  <ContainerPage>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :route="SITE + route.path" />
    <TitlePage title="Отзывы" />
    <ReviewBlock :reviews="reviews.reverse()" />
  </ContainerPage>
</template>

<script lang="ts" setup>
import {
  REVIEW_DESCRIPTION,
  REVIEW_IMAGE,
  REVIEW_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";
import { reviews } from "~/mock/review";

const route = useRoute();

const breadcrumbs = [
  { name: "Главная", path: "/", content: "1" },
  {
    name: "Отзывы",
    path: "/review",
    content: "last",
  },
];

useHead({
  link: [{ rel: "canonical", href: `${SITE}${route.path}` }],
});

useSeoMeta({
  title: `${REVIEW_TITLE}`,
  description: `${REVIEW_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${REVIEW_TITLE}`,
  ogDescription: `${REVIEW_DESCRIPTION}`,
  ogImage: `${REVIEW_IMAGE}`,
  ogUrl: `${SITE}${route.path}`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
