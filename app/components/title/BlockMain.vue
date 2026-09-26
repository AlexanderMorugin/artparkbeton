<template>
  <h2 class="titleBlockMain">{{ props.title }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.titleBlockMain {
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 32px;
  // line-height: 1.2;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  color: transparent;
  background-image: linear-gradient(
    to right,
    transparent 40%,
    $white-one 50%,
    $white-one 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: shine 6s ease-in-out infinite forwards;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    letter-spacing: 2px;
  }
}

@keyframes shine {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
