<template>
  <NuxtLink
    :to="props.route"
    :class="[
      'buttonLinkIcon',
      { buttonLinkIcon_promo: props.place === 'promo' },
      { buttonLinkIcon_embla: props.place === 'embla' },
    ]"
  >
    <div class="buttonLinkIcon__content">
      <span
        :class="[
          'buttonLinkIcon__text',
          { buttonLinkIcon__text_promo: props.place === 'promo' },
          { buttonLinkIcon__text_embla: props.place === 'embla' },
        ]"
        >Подробнее</span
      >
      <IconArrowDouble
        :class="[
          'buttonLinkIcon__icon',
          { buttonLinkIcon__icon_promo: props.place === 'promo' },
          { buttonLinkIcon__icon_embla: props.place === 'embla' },
        ]"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  route: string;
  place: string;
}>();
</script>

<style lang="scss" scoped>
.buttonLinkIcon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease;
  z-index: 1;

  &_promo {
    background: $orange-mask-four;
    border: 1px solid $orange-one;
    box-shadow: 0 1px 20px $orange-one;
    padding: 10px 20px;
    border-radius: $br-l;

    &:hover {
      background: $orange-one;
    }
  }

  &_embla {
    background: transparent;
    border: 1px solid $white-mask-two;
    box-shadow: 0 1px 10px $white-mask-three;
    padding: 5px 10px;
    border-radius: $br-s;

    &:hover {
      background: $orange-one;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__text {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: $white-one;
    vertical-align: middle;

    &_promo {
      font-size: 16px;

      @media (max-width: 576px) {
        font-size: 12px;
      }
    }

    &_embla {
      font-size: 12px;
    }
  }

  &__icon {
    fill: $white-one;

    &_promo {
      @media (max-width: 576px) {
        width: 18px;
        height: 18px;
      }
    }

    &_embla {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
