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
          <span>Подобен натуральному камню.</span>
        </li>
        <li class="ultrabetonPromo__listItem">
          <IconArrowSmall class="ultrabetonPromo__arrow" />
          <span>Супер прочный и надежный.</span>
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
    left: 1%;
    max-width: 800px;
    font-family: "Montserrat-Bold", sans-serif;
    line-height: 0.8;
    letter-spacing: 2px;
    font-size: 160px;
    color: $white-mask-four;

    @media (max-width: 1024px) {
      left: 3%;
      font-size: 100px;
      line-height: 1;
    }

    @media (max-width: 767px) {
      // top: 20px;
      font-size: 80px;
      // word-break: break-all;
    }

    @media (max-width: 576px) {
      // font-size: 40px;
      word-break: break-all;
    }
  }

  &__buttonLink {
    position: absolute;
    bottom: 10%;
    right: 10%;

    @media (max-width: 1024px) {
      bottom: 5%;
      right: 5%;
    }
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

    @media (max-width: 576px) {
      padding: 20px;
    }
  }

  &__title {
    position: relative;
    font-family: "Montserrat-Bold", sans-serif;
    line-height: 1;
    letter-spacing: 2px;
    font-size: 56px;

    @media (max-width: 576px) {
      font-size: 32px;
      letter-spacing: 0;
    }
  }

  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    padding-left: 100px;

    @media (max-width: 576px) {
      padding-left: 10px;
    }
  }

  &__listItem {
    display: flex;
    // align-items: center;

    @media (max-width: 576px) {
      font-size: 12px;
    }
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
