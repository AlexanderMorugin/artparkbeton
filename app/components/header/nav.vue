<script setup lang="ts">
import { headerMenu } from "~/mock/header-menu";
</script>

<template>
  <nav class="headerNav">
    <NuxtLink
      v-for="item in headerMenu"
      :key="item.id"
      :to="item.route"
      class="headerNav__link headerNav__link_line"
      >{{ item.title }}</NuxtLink
    >
  </nav>
</template>

<style lang="scss" scoped>
.headerNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &__link {
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      display: block;
      position: absolute;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
    }

    &_line:after {
      transform-origin: right;
      transform: scaleX(0);
      bottom: 0;
      height: 2px;
      width: 100%;
      background-color: white;
      transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    }

    &_line:hover:after {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    }
  }
}
</style>
