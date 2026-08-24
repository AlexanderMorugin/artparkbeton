<template>
  <a
    :href="props.link"
    target="_blank"
    :class="[
      'buttonChat',
      { buttonChat_telegram: name === 'telegram' },
      { buttonChat_max: name === 'max' },
    ]"
  >
    <img
      v-if="name === 'max'"
      src="/bg/max-logo.png"
      alt="logo"
      class="buttonChat__icon"
    />
    <img
      v-if="name === 'telegram'"
      src="/bg/telegram-logo.png"
      alt="logo"
      class="buttonChat__icon buttonChat__icon_telegram"
    />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  link: string;
}>();
</script>

<style lang="scss" scoped>
.buttonChat {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid $white-mask-three;
  overflow: hidden;

  &:hover {
    animation: scale 1s ease;
  }

  &__icon {
    width: 28px;
    height: 28px;

    &_telegram {
      width: 24px;
      height: 24px;
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(1.2);
  }
  30% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
