<template>
  <BlockPrime color="one" class="contactInfo">
    <TitleBlock title="Где нас найти" />
    <div class="contactInfo__block">
      <BlockPrime color="one" class="contactInfo__block">
        <TitleBlockSmall title="Адрес" />
        <span class="contactInfo__blockText">{{ ADDRESS }}</span>
      </BlockPrime>
      <BlockPrime color="one" class="contactInfo__block">
        <TitleBlockSmall title="Время работы" />
        <span class="contactInfo__blockText">{{ WORK_HOURS }}</span>
      </BlockPrime>
      <BlockPrime color="one" class="contactInfo__block">
        <TitleBlockSmall title="Связь" />
        <div class="contactInfo__blockIcon">
          <ButtonChat :link="MAX_LINK" name="max" />
          <ButtonChat :link="TELEGRAM_LINK" name="telegram" />
        </div>

        <div class="contactInfo__blockIcon">
          <IconPhone class="contactInfo__icon" />
          <a :href="PHONE_NUMBER_PRIMARY_LINK" class="contactInfo__blockText">{{
            PHONE_NUMBER_PRIMARY
          }}</a>
        </div>
        <div class="contactInfo__blockIcon">
          <IconEmail class="contactInfo__icon" />
          <a
            :href="EMAIL_LINK"
            target="_blank"
            class="contactInfo__blockText"
            >{{ EMAIL }}</a
          >
        </div>
      </BlockPrime>
    </div>
  </BlockPrime>
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
  gap: 2rem;

  &__block {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__blockText {
    color: $white-mask-one;
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
