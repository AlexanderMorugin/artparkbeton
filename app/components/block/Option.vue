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

    <IconDescription
      v-if="props.name === 'description'"
      class="blockOption__icon"
    />
    <IconDelivery v-if="props.name === 'delivery'" class="blockOption__icon" />
    <IconInstallation
      v-if="props.name === 'installation'"
      class="blockOption__icon"
    />
    <IconOptions v-if="props.name === 'options'" class="blockOption__icon" />
    <IconTime v-if="props.name === 'time'" class="blockOption__icon" />
    <IconPayment v-if="props.name === 'payment'" class="blockOption__icon" />

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

  &__icon {
    position: absolute;
    top: 13px;
    right: 20px;
    fill: $white-mask-three;
    width: 30px;
    height: 30px;

    @media (max-width: 576px) {
      right: 10px;
    }
  }
}
</style>
