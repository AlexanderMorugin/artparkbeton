<template>
  <div class="footerContact">
    <div class="footerContact__bar">
      <IconAddress class="footerContact__icon" />
      <span class="footerContact__text">{{ ADDRESS }}</span>
    </div>
    <div class="footerContact__bar">
      <IconTime class="footerContact__icon" />
      <span class="footerContact__text">{{ WORK_HOURS }}</span>
    </div>
    <div class="footerContact__bar">
      <IconPhone class="footerContact__icon" />
      <a :href="PHONE_NUMBER_PRIMARY_LINK" class="footerContact__text">{{
        PHONE_NUMBER_PRIMARY
      }}</a>
    </div>
    <div class="footerContact__bar">
      <IconEmail class="footerContact__icon" />
      <a :href="EMAIL_LINK" class="footerContact__text">{{ EMAIL }}</a>
    </div>
    <div class="footerContact__barChat">
      <ButtonChat :link="MAX_LINK" name="max" />
      <ButtonChat :link="TELEGRAM_LINK" name="telegram" />
    </div>
  </div>
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
.footerContact {
  grid-area: contact;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__bar {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 20px;
    align-items: center;
  }

  &__icon {
    fill: $white-mask-two;
  }

  &__barChat {
    display: flex;
    gap: 10px;

    @media (max-width: 767px) {
      justify-content: center;
    }
  }

  &__text {
    font-size: 13px;
  }
}
</style>
