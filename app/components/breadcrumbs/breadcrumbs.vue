<script lang="ts" setup>
import type { Breadcrumbs } from "~/types/breadcrumbs";

// const { breadcrumbs, route } = defineProps(["breadcrumbs", "route"]);
const props = defineProps<{
  breadcrumbs: Breadcrumbs[];
  route: string;
}>();
</script>

<template>
  <div class="breadcrumbs">
    <ul
      itemscope
      itemtype="https://schema.org/BreadcrumbList"
      class="breadcrumbs__list"
    >
      <li
        v-for="(item, index) in breadcrumbs"
        :key="item.name"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <div v-if="item.content !== 'last'">
          <NuxtLink itemprop="item" :to="item.path" class="breadcrumbs__link">
            <span itemprop="name">{{ item.name }}</span>
          </NuxtLink>
          <meta itemprop="position" :content="String(index + 1)" />
          <span class="breadcrumbs__slash">/</span>
        </div>

        <div v-else class="breadcrumbs__active">
          <span itemprop="name">{{
            item.name.split(" ").length > 1
              ? item.name.split(" ").slice(1).join(" ")
              : item.name
          }}</span>
          <meta itemprop="item" :content="route" />
          <meta itemprop="position" :content="String(index + 1)" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  padding-top: 20px;
  // padding-left: 1rem;

  &__list {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: lowercase;
    // color: var(--mask-white-fourthly);
    letter-spacing: 0.8px;
  }

  &__link {
    // color: var(--mask-white-secondary);
    // border-bottom: 1px dashed var(--mask-white-fourthly);

    transition: 0.2s ease;

    &:hover {
      // color: var(--white-primary);
    }
  }

  &__slash {
    padding-left: 10px;
  }

  &__active {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    overflow-wrap: anywhere;
  }
}
</style>
