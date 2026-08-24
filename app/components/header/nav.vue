<template>
  <nav class="headerNav">
    <NuxtLink
      v-if="props.place === 'desktop'"
      v-for="item in headerMenu"
      :key="item.id"
      :to="item.route"
      class="headerNav__link headerNav__link_line"
      >{{ item.title }}</NuxtLink
    >

    <NuxtLink
      v-if="props.place === 'mobile'"
      v-for="item in headerMenu"
      :key="item.id"
      :to="item.route"
      class="headerNav__linkMobile"
      @click="emits('closeModal')"
    >
      <span class="headerNav__linkMobileText">{{ item.title }}</span>
      <IconArrowIos class="headerNav__linkMobileArrow" />
    </NuxtLink>

    <Logo
      v-if="props.place === 'mobile'"
      class="headerNav__logo"
      @click="emits('closeModal')"
    />
  </nav>
</template>

<script setup lang="ts">
import { headerMenu } from "~/mock/header-menu";

const route = useRoute();

const props = defineProps<{
  place: string;
}>();

const emits = defineEmits(["closeModal"]);
</script>

<style lang="scss" scoped>
.headerNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 10px;
    padding-left: 26px;
    padding-right: 26px;
  }

  &__link {
    position: relative;
    display: inline-block;
    font-size: 16px;

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
      height: 1px;
      width: 100%;
      background-color: $orange-four;
      transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    }

    &_line:hover:after {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    }
  }

  &__linkMobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: $white-mask-four;
    border-radius: $br-xs;
    padding: 10px;
    transition: 0.2s ease;

    &:hover {
      background: $white-mask-three;
    }
  }

  &__linkMobileText {
    font-size: 18px;
    letter-spacing: 1px;
  }

  &__linkMobileArrow {
    width: 16px;
    height: 16px;
    fill: $white-mask-two;
    transition: 0.2s ease;
  }

  &__logo {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
}

.headerNav__linkMobile:hover .headerNav__linkMobileArrow {
  fill: $orange-four;
}
</style>
