<template>
  <section class="heroBlock">
    <div class="heroBlock__container">
      <div class="heroBlock__overlay" />
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/hero/hero-1-768.webp"
        />
        <source
          media="(max-width: 1280px)"
          srcSet="/images/hero/hero-1-1280.webp"
        />
        <source
          media="(max-width: 1920px)"
          srcSet="/images/hero/hero-1-1920.webp"
        />
        <source
          media="(max-width: 3840px)"
          srcSet="/images/hero/hero-1-2940.webp"
        />

        <img
          src="/images/hero/hero-1-768.webp"
          alt="Арт П.А.Р.К"
          title="Арт П.А.Р.К"
          class="heroBlock__image"
        />
      </picture>

      <div class="heroBlock__subtitleBox">
        <span class="heroBlock__subtitle">Изделия из ультрабетона</span>
      </div>

      <div class="heroBlock__titleBox">
        <div class="heroBlock__title">
          <!-- <div class="heroBlock__titleSubnameBox">
            <span class="heroBlock__titleSubname">Производство и монтаж</span>
          </div> -->

          <div class="heroBlock__titleNameBox">
            <span class="heroBlock__titleName">Арт П.А.Р.К</span>
          </div>
        </div>
      </div>
      <!-- <div class="heroBlock__logoBox"> -->
      <img src="/logo/logo.png" alt="Лого" class="heroBlock__logo" />
      <!-- </div> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.heroBlock {
  user-select: none;
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 5px;
  }

  &__container {
    position: relative;
    width: 100%;
    height: 85vh;
    background: transparent;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 auto;

    @media (max-width: 1600px) {
      height: 720px;
    }

    @media (max-width: 768px) {
      height: 420px;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: overlay 3s ease;
    background: $black-mask-four;
    z-index: 1;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: scale 3s ease;
  }

  &__subtitleBox {
    position: absolute;
    left: 5%;
    right: 5%;
    top: 10%;
    z-index: 2;
    display: flex;
    justify-content: center;
  }

  &__subtitle {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 22px;
    line-height: 36px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 12px;
    color: transparent;
    background-image: linear-gradient(
      90deg,
      #ffffff80 30%,
      #ffffff 37%,
      #ffffff80 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 500% auto;
    animation: appear 4s ease-in-out;

    @media (max-width: 1024px) {
      font-size: 20px;
      letter-spacing: 6px;
    }
  }

  &__titleBox {
    position: absolute;
    left: 10%;
    right: 10%;
    bottom: 2%;
    z-index: 4;
  }

  &__title {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 768px) {
      gap: 5px;
    }
  }

  &__titleSubnameBox {
    position: relative;
    width: 100%;
    height: 24px;
    overflow: hidden;

    @media (max-width: 1600px) {
      height: 16px;
    }

    @media (max-width: 768px) {
      height: 14px;
    }
  }

  &__titleSubname {
    position: absolute;
    top: 0;
    left: 0;
    // font-family: "Roboto-Medium", sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 12px;
    animation: ascent-subname 1s ease-in-out;
    opacity: 0.8;

    @media (max-width: 1600px) {
      letter-spacing: 6px;
      font-size: 16px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  &__titleNameBox {
    position: relative;
    width: 100%;
    // height: 120px;
    // overflow: hidden;
    border: 1px solid red;

    @media (max-width: 1600px) {
      height: 100px;
    }

    @media (max-width: 768px) {
      height: 40px;
    }

    @media (max-width: 576px) {
      height: 36px;
    }
  }

  &__titleName {
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Oswald-SemiBold", sans-serif;
    font-size: 120px;
    color: $white-one;
    text-transform: uppercase;
    letter-spacing: 10px;
    animation: ascent-name 1.5s ease-in-out;
    opacity: 0.9;
    text-shadow:
      1px 1px 2px $black-one,
      0 0 25px $white-mask-two,
      0 0 5px $deep-blue-one;

    @media (max-width: 1600px) {
      font-size: 60px;
    }

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 36px;
    }
  }

  &__logoBox {
    position: absolute;
    // left: 900px;
    right: 8%;
    bottom: 8%;
    z-index: 3;
    // transform: rotate(-5deg);
    animation: logo 2s ease;

    // @media (max-width: 2560px) {
    //   left: 850px;
    // }

    // @media (max-width: 1920px) {
    //   left: 750px;
    // }

    // @media (max-width: 1600px) {
    //   left: 420px;
    //   bottom: 44px;
    // }

    // @media (max-width: 768px) {
    //   left: 290px;
    //   bottom: 28px;
    // }

    // @media (max-width: 576px) {
    //   left: 270px;
    //   bottom: 22px;
    // }
  }

  &__logo {
    position: absolute;
    right: 3%;
    bottom: 5%;
    z-index: 3;
    width: 64px;
    animation: logo 5s ease;
    // opacity: 0.6;

    // @media (max-width: 1600px) {
    //   font-size: 40px;
    // }

    // @media (max-width: 768px) {
    //   font-size: 32px;
    // }

    // @media (max-width: 576px) {
    //   font-size: 26px;
    // }
  }
}

@keyframes logo {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes scale {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ascent-subname {
  0% {
    transform: translateY(100%);
  }
  60% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes ascent-name {
  0% {
    transform: translateY(100%);
  }
  70% {
    transform: translateY(100%);
  }
  90% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes overlay {
  0% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    background: $black-mask-four;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  55% {
    background-position: left top;
  }
  100% {
    background-position: right bottom;
  }
}
</style>
