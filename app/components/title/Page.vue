<template>
  <div class="titlePage">
    <h1 v-if="props.title" class="titlePage__title">{{ props.title }}</h1>
    <span v-if="props.subtitle" class="titlePage__subtitle">{{
      props.subtitle
    }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<style lang="scss" scoped>
.titlePage {
  display: flex;
  flex-direction: column;
  width: 100%;
  animation: fall-down 1s ease-in-out;
  padding-top: 20px;
  padding-bottom: 40px;

  &__title {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 48px;
    line-height: 1.2;
    letter-spacing: 4px;
    text-align: center;
    opacity: 0.9;
    background-clip: text;
    background-image: linear-gradient(
      90deg,
      $white-one 44.5%,
      $orange-one 66.35%
    );
    color: transparent;

    @media (max-width: 1920px) {
      font-size: 60px;
    }

    @media (max-width: 1600px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 28px;
      letter-spacing: 2px;
    }
  }

  &__subtitle {
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }
}

@keyframes fall-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 0;
    transform: translateY(-100%);
  }
  60% {
    opacity: 0.9;
    transform: translateY(0);
  }
  70% {
    opacity: 0.9;
    transform: translateY(-20%);
  }
  80% {
    opacity: 0.9;
    transform: translateY(0);
  }
  90% {
    opacity: 0.9;
    transform: translateY(-10%);
  }
  100% {
    opacity: 0.9;
    transform: translateY(0);
  }
}
</style>
