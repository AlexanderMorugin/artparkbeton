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
    <slot />
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: $br-s;
  border: 1px solid $white-mask-five;
  background: $gradient-blue-one;
  margin-top: 40px;
  // padding: 20px 20px 30px 20px;
  padding: 10px;
  height: 100%;

  // @media (max-width: 1024px) {
  //   // padding: 10px 10px 30px 10px;
  //   padding: 10px;
  // }

  &_isPadding {
    padding-bottom: 30px;
  }
}
</style>
