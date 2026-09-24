<template>
  <!-- <ContainerPage> -->
  <!-- <h1 class="title">Главная страница</h1> -->
  <HeroBlock />
  <!-- </ContainerPage> -->
</template>

<script lang="ts" setup>
import {
  MAIN_DESCRIPTION,
  MAIN_IMAGE,
  MAIN_TITLE,
  SITE,
  SITE_AUTHOR,
  SITE_NAME,
} from "~/mock/meta";

useHead({
  link: [{ rel: "canonical", href: `${SITE}` }],
});

useSeoMeta({
  title: `${MAIN_TITLE}`,
  description: `${MAIN_DESCRIPTION}`,
  author: `${SITE_AUTHOR}`,
  robots: "index, follow",
  ogTitle: `${MAIN_TITLE}`,
  ogDescription: `${MAIN_DESCRIPTION}`,
  ogImage: `${MAIN_IMAGE}`,
  ogUrl: `${SITE}/`,
  ogSiteName: `${SITE_NAME}`,
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  text-align: center;
}
</style>
