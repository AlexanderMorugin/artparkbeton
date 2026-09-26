<template>
  <div
    class="buttonLinkToPage"
    :class="props.place === 'main' ? 'buttonLinkToPage_main' : ''"
  >
    <div class="buttonLinkToPage__line" />
    <NuxtLink :to="props.path" class="buttonLinkToPage__link">
      <h2
        class="buttonLinkToPage__title"
        :class="props.place === 'main' ? 'buttonLinkToPage__title_main' : ''"
      >
        {{ props.title }}
      </h2>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  place: string;
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
  height: 66px;

  &_main {
    max-width: 100%;

    @media (max-width: 1024px) {
      height: 44px;
    }

    @media (max-width: 576px) {
      height: 26px;
    }
  }

  &__title {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    line-height: 36px;
    letter-spacing: 3px;
    transition: 0.2s ease;

    &:hover {
      color: $orange-four;
    }

    &_main {
      font-size: 48px;
      line-height: 1.2;
      letter-spacing: 4px;
      background-clip: text;
      background-image: linear-gradient(
        90deg,
        $white-one 44.5%,
        $orange-one 66.35%
      );
      color: transparent;

      @media (max-width: 1024px) {
        font-size: 32px;
      }

      @media (max-width: 576px) {
        font-size: 18px;
      }

      @media (max-width: 390px) {
        font-size: 16px;
        letter-spacing: 2px;
      }
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
