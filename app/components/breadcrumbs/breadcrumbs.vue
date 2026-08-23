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
          <IconArrowIos class="breadcrumbs__arrow" />
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

<script lang="ts" setup>
import type { Breadcrumbs } from "~/types/breadcrumbs";

const props = defineProps<{
  breadcrumbs: Breadcrumbs[];
  route: string;
}>();
</script>

<style lang="scss" scoped>
.breadcrumbs {
  padding-top: 20px;
  animation: appear 1s ease-in-out;

  &__list {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 17px;
    text-transform: lowercase;
    font-size: 14px;
    color: $white-mask-two;
    letter-spacing: 0.8px;
  }

  &__link {
    color: $white-mask-two;
    transition: 0.2s ease;

    &:hover {
      color: $white-one;
    }
  }

  &__arrow {
    width: 10px;
    height: 10px;
    fill: $white-mask-two;
    vertical-align: middle;
    padding-left: 6px;
  }

  &__active {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    overflow-wrap: anywhere;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
