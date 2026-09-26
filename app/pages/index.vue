<template>
  <div>
    <HeroBlock />
    <ContainerPage>
      <CatalogMainBlock />
    </ContainerPage>
    <UltrabetonPromo />
    <ContainerPage>
      <ProductPortfolioForCard
        place="main"
        title="Портфолио наших работ"
        path="/portfolio"
        :imageList="stepCurvedPortfolioForCard"
      />
    </ContainerPage>
  </div>
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
import { stepCurvedPortfolioForCard } from "~/mock/step/curved/step-curved-portfolio-for-card";

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
