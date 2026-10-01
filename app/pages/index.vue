<template>
  <div>
    <HeroBlock />
    <ContainerPage>
      <CatalogMainBlock :route="route.path" />
    </ContainerPage>
    <UltrabetonPromo />
    <EmblaArrayCarouselBlock
      path="/review"
      title="Отзывы клиентов"
      place="reviews"
      :reviews="reviews"
    />
    <ContainerPage>
      <ProductPortfolioForCard
        place="main"
        title="Портфолио работ"
        path="/portfolio"
        :imageList="stepCurvedPortfolioForCard"
      />
      <CustomerBlockForMain />
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
import { reviews } from "~/mock/review";

const route = useRoute();

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
