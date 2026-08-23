<template>
  <button class="headerNavButton">
    <IconMenu v-if="props.name === 'nav'" class="headerNavButton__icon" />
    <IconChat v-if="props.name === 'chat'" class="headerNavButton__icon" />
    <IconClose v-if="props.name === 'close'" class="headerNavButton__icon" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>();
</script>

<style lang="scss" scoped>
.headerNavButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid $white-mask-three;

  @media (max-width: 390px) {
    width: 32px;
    height: 32px;
  }

  &__icon {
    fill: $white-one;
    opacity: 0.9;
    transition: 0.2s ease;
  }
}
.headerNavButton:hover .headerNavButton__icon {
  fill: $orange-four;
  opacity: 1;
  animation: scale 0.25s ease-in-out;
}
@keyframes scale {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
