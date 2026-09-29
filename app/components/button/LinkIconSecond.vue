<template>
  <div class="buttonLinkIconSecond">
    <NuxtLink :to="props.route" class="buttonLinkIconSecond__content">
      <span class="buttonLinkIconSecond__title">{{ props.title }}</span>
      <div class="buttonLinkIconSecond__iconBox">
        <IconArrowDouble class="buttonLinkIconSecond__icon" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  route: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.buttonLinkIconSecond {
  height: 36px;

  // @media (max-width: 390px) {
  //   height: 32px;
  // }

  &__content {
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    // border: 1px solid red;
    @media (max-width: 576px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  &__title {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 28px;
    line-height: 1;
    letter-spacing: 2px;
    color: $white-mask-two;
    transition: 0.2s ease;

    @media (max-width: 1024px) {
      font-size: 24px;
    }

    @media (max-width: 390px) {
      font-size: 20px;
    }
  }

  &__iconBox {
    display: flex;
    align-items: end;
    width: 32px;
    height: 28px;
    // border: 1px solid red;
  }
  &__icon {
    fill: $white-mask-one;
    width: 24px;
    height: 24px;
  }
}
.buttonLinkIconSecond:hover .buttonLinkIconSecond__title {
  color: $white-one;
}
.buttonLinkIconSecond:hover .buttonLinkIconSecond__icon {
  animation: move 0.5s ease;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
