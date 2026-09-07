<template>
  <section class="ultrabetonPromo">
    <div class="ultrabetonPromo__overlay" />
    <div class="ultrabetonPromo__subtitle">Как это возможно?</div>
    <ButtonLinkIcon class="ultrabetonPromo__buttonLink" />
    <div class="ultrabetonPromo__textBox">
      <h2 class="ultrabetonPromo__title">Ультрабетон</h2>

      <ul class="ultrabetonPromo__list">
        <li class="ultrabetonPromo__listItem">
          <IconArrowSmall class="ultrabetonPromo__arrow" />
          <span class="ultrabetonPromo__text">Современная технология.</span>
        </li>
        <li class="ultrabetonPromo__listItem">
          <IconArrowSmall class="ultrabetonPromo__arrow" />
          <span>Революция строительных материалов.</span>
        </li>
        <li class="ultrabetonPromo__listItem">
          <IconArrowSmall class="ultrabetonPromo__arrow" />
          <span>Подобен природному камню.</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ultrabetonPromo {
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 40px;
  background-image: url("/images/company/ultrabeton/ultrabeton-1000-800.webp");
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  border-radius: 10px;
  overflow: hidden;

  // border: 1px solid red;

  @media (max-width: 767px) {
    background-size: cover;
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      $black-one,
      transparent,
      transparent,
      $black-one
    );
  }

  &__subtitle {
    position: absolute;
    top: 50px;
    left: 50px;
    max-width: 800px;
    font-family: "Montserrat-Bold", sans-serif;
    line-height: 0.8;
    letter-spacing: 2px;
    font-size: 140px;
    color: $white-mask-four;
  }

  &__buttonLink {
    position: absolute;
    bottom: 10%;
    right: 10%;
  }

  &__textBox {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      transparent,
      transparent,
      $deep-blue-one,
      $black-one,
      $deep-blue-one,
      $black-one,
      $black-one
    );
    padding: 40px;
    animation: background-fade 20s ease-in-out infinite;
    background-size: 500% 800%;
    -webkit-animation: background-fade 20s ease-in-out infinite;
    -moz-animation: background-fade 20s ease-in-out infinite;
  }

  &__title {
    position: relative;
    font-family: "Montserrat-Bold", sans-serif;
    line-height: 1;
    letter-spacing: 2px;
    font-size: 56px;
  }

  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    padding-left: 100px;
  }

  &__listItem {
    display: flex;
    align-items: center;
  }

  &__arrow {
    fill: $white-one;
  }
}

@keyframes background-fade {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}
</style>
