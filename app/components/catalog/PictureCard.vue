<template>
  <div
    :class="[
      'catalogPictureCard',
      { catalogPictureCard_right: props.float === 'right' },
      { catalogPictureCard_center: props.float === 'center' },
    ]"
  >
    <NuxtLink :to="props.route" class="catalogPictureCard__link">
      <div class="catalogPictureCard__imageBlock">
        <img
          :src="props.image"
          :alt="props.title"
          class="catalogPictureCard__image"
        />
      </div>
      <div class="catalogPictureCard__textBlock">
        <div class="catalogPictureCard__titleBlock">
          <TitleBlock :title="props.title" />
          <div class="catalogPictureCard__subtitle">
            Купить ступени для лестницы из бетона. Купить ступени в Москве по
            привлекательной стоимости Купить ступени для лестницы из бетона.
            Купить ступени в Москве по привлекательной стоимости
          </div>
        </div>

        <div class="catalogPictureCard__forward">
          <ButtonForward />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  float: string;
  route: string;
  title: string;
  image: string;
}>();
</script>

<style lang="scss" scoped>
.catalogPictureCard {
  display: flex;

  &_right {
    justify-content: right;
  }

  &_center {
    justify-content: center;
  }

  &__link {
    display: grid;
    grid-template-columns: 60% 1fr;
    gap: 20px;
    max-width: 1000px;
    background: $white-mask-five;
    border-radius: $br-l;
    padding: 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      padding: 10px;
    }
  }

  &__imageBlock {
    height: 350px;
    border-radius: $br-m;
    overflow: hidden;

    @media (max-width: 767px) {
      height: 260px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__subtitle {
    color: $white-mask-one;
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid $white-mask-three;
  }

  &__forward {
    display: flex;
    justify-content: right;

    @media (max-width: 767px) {
      padding-bottom: 10px;
      padding-right: 10px;
    }
  }
}
</style>
