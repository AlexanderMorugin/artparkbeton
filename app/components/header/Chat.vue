<script setup lang="ts">
import {
  ADDRESS,
  MAX_LINK,
  PHONE_NUMBER_PRIMARY,
  PHONE_NUMBER_PRIMARY_LINK,
  TELEGRAM_LINK,
} from "~/mock/info";
</script>

<template>
  <div class="headerChat">
    <div class="headerChat__block">
      <span class="headerChat__blockTitle">Телефон</span>
      <a :href="PHONE_NUMBER_PRIMARY_LINK" class="headerChat__blockText">{{
        PHONE_NUMBER_PRIMARY
      }}</a>
    </div>

    <div class="headerChat__block">
      <span class="headerChat__blockTitle">Мессенджеры</span>
      <div class="headerChat__blockMessenger">
        <ButtonChat :link="MAX_LINK" name="max" />
        <ButtonChat :link="TELEGRAM_LINK" name="telegram" />
      </div>
    </div>

    <div class="headerChat__block">
      <span class="headerChat__blockTitle">Адрес</span>
      <span class="headerChat__blockAddress">{{ ADDRESS }}</span>
    </div>

    <Logo />
  </div>
</template>

<style lang="scss" scoped>
.headerChat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  &__blockTitle {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: $orange-four;
  }

  &__blockText {
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  &__blockMessenger {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__blockAddress {
    font-size: 16px;
    text-align: center;
    letter-spacing: 1px;
  }
}
</style>
