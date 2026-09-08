<template>
  <div class="buttonLinkToPage">
    <div class="buttonLinkToPage__line" />
    <NuxtLink :to="props.path" class="buttonLinkToPage__link">
      <h2 class="buttonLinkToPage__title">
        {{ props.title }}
      </h2>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  path: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.buttonLinkToPage {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 500px;
  height: 36px;

  &__title {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    line-height: 36px;
    letter-spacing: 3px;
    transition: 0.2s ease;

    &:hover {
      color: $orange-four;
    }
  }

  &__line {
    position: absolute;
    bottom: 0;
    height: 1px;
    width: inherit;
    background: linear-gradient(to right, $orange-four 0%, transparent 100%);
    transition: 0.2s ease;
    transform: translateX(0);
  }
}

.buttonLinkToPage:hover .buttonLinkToPage__line {
  transform: translateX(100%);
  opacity: 0;
}
</style>
