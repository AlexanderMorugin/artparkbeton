<template>
  <div class="map">
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa782d5f20d531b8b50144280f249630e3fa5981b9886f6512dfc2b96684de7a1&amp;source=constructor"
      width="100%"
      height="100%"
      frameBorder="0"
      title="Карта проезда"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  border-radius: $br-m;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 300px;
    border-radius: $br-s;
  }
}
</style>
