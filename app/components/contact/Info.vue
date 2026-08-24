<template>
  <BlockGradientPrime>
    <BlockPrime color="one" class="contactInfo">
      <TitleBlock title="Где нас найти" />
      <div class="contactInfo__block">
        <BlockBorderPrime
          color="one"
          class="contactInfo__block contactInfo__block_border"
        >
          <TitleBlockSmall title="Адрес" />
          <span>{{ ADDRESS }}</span>
        </BlockBorderPrime>
        <BlockBorderPrime
          color="one"
          class="contactInfo__block contactInfo__block_border"
        >
          <TitleBlockSmall title="Время работы" />
          <span>{{ WORK_HOURS }}</span>
        </BlockBorderPrime>
        <BlockBorderPrime
          color="one"
          class="contactInfo__block contactInfo__block_border"
        >
          <TitleBlockSmall title="Связь" />
          <div class="contactInfo__blockIcon">
            <ButtonChat :link="MAX_LINK" name="max" />
            <ButtonChat :link="TELEGRAM_LINK" name="telegram" />
          </div>

          <div class="contactInfo__blockIcon">
            <IconPhone class="contactInfo__icon" />
            <a :href="PHONE_NUMBER_PRIMARY_LINK">{{ PHONE_NUMBER_PRIMARY }}</a>
          </div>
          <div class="contactInfo__blockIcon">
            <IconEmail class="contactInfo__icon" />
            <a :href="EMAIL_LINK" target="_blank">{{ EMAIL }}</a>
          </div>
        </BlockBorderPrime>
      </div>
    </BlockPrime>
  </BlockGradientPrime>
</template>

<script setup lang="ts">
import {
  ADDRESS,
  EMAIL,
  EMAIL_LINK,
  MAX_LINK,
  PHONE_NUMBER_PRIMARY,
  PHONE_NUMBER_PRIMARY_LINK,
  TELEGRAM_LINK,
  WORK_HOURS,
} from "~/mock/info";
</script>

<style lang="scss" scoped>
.contactInfo {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &_border {
      box-shadow: $shadow-one;
    }
  }

  &__blockIcon {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 1024px) {
      gap: 10px;
    }
  }

  &__icon {
    fill: $white-one;
  }
}
</style>
