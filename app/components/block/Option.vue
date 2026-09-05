<template>
  <section
    :class="[
      'blockOption',
      {
        blockOption_isOpen: props.name === 'description',
      },
      {
        blockOption_isPadding: props.isState,
      },
    ]"
  >
    <div class="blockOption__container">
      <slot />
    </div>
    <ButtonOptionToogle
      v-if="props.name !== 'description'"
      :isState="props.isState"
      @click="emits('toggleOpening')"
    />
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  isState: boolean;
}>();

const emits = defineEmits(["toggleOpening"]);
</script>

<style lang="scss" scoped>
.blockOption {
  position: relative;
  border-radius: $br-s;
  border: 1px solid $white-mask-five;
  background: $gradient-blue-one;
  margin-top: 40px;
  padding: 10px;
  height: 100%;

  &_isPadding {
    padding-bottom: 30px;
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
  }
}
</style>
