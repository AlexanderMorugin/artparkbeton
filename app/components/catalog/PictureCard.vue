<template>
  <NuxtLink :to="props.route" class="catalogPictureCard">
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
</template>

<script setup lang="ts">
const props = defineProps<{
  route: string;
  title: string;
  image: string;
}>();
</script>

<style lang="scss" scoped>
.catalogPictureCard {
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 20px;
  min-height: 400px;
  background: $white-mask-five;
  border-radius: $br-l;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }

  &__imageBlock {
    border-radius: $br-m;
    overflow: hidden;
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
