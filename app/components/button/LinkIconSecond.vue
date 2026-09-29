<template>
  <div class="buttonLinkIconSecond">
    <NuxtLink
      :to="props.route"
      :class="[
        'buttonLinkIconSecond__content',
        { buttonLinkIconSecond__content_padding: props.isPadding },
      ]"
    >
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
  isPadding?: boolean;
}>();
</script>

<style lang="scss" scoped>
.buttonLinkIconSecond {
  width: fit-content;
  height: 40px;

  &__content {
    display: flex;
    align-items: center;
    gap: 10px;

    &_padding {
      @media (max-width: 576px) {
        padding-left: 1rem;
      }
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
      font-size: 18px;
    }
  }

  &__iconBox {
    display: flex;
    align-items: end;
    width: 32px;
    height: 28px;

    @media (max-width: 1024px) {
      height: 26px;
    }

    @media (max-width: 390px) {
      height: 22px;
    }
  }

  &__icon {
    fill: $white-mask-one;
    width: 24px;
    height: 24px;

    @media (max-width: 390px) {
      width: 20px;
      height: 20px;
    }
  }
}
.buttonLinkIconSecond:hover .buttonLinkIconSecond__title {
  color: $white-one;
}
.buttonLinkIconSecond:hover .buttonLinkIconSecond__icon {
  animation: move 0.3s ease;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(6px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
