<template>
  <div class="heroBlockCompanyName">
    <div class="heroBlockCompanyName__logoBox">
      <img src="/logo/logo.png" alt="Лого" class="heroBlockCompanyName__logo" />
    </div>

    <div class="heroBlockCompanyName__titleNameBox">
      <span class="heroBlockCompanyName__titleName">Арт П.А.Р.К</span>
    </div>

    <div class="heroBlockCompanyName__titleSubnameBox">
      <span class="heroBlockCompanyName__titleSubname"
        >Мастерская - производство</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heroBlockCompanyName {
  position: absolute;
  left: 2%;
  right: 10%;
  bottom: 2%;
  z-index: 4;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "logo name" "logo subname";
  column-gap: 10px;

  @media (max-width: 767px) {
    column-gap: 5px;
  }

  &__titleNameBox {
    grid-area: name;
    position: relative;
    width: 100%;
    height: 125px;
    overflow: hidden;

    @media (max-width: 1600px) {
      height: 100px;
    }

    @media (max-width: 767px) {
      height: 60px;
    }

    @media (max-width: 576px) {
      height: 44px;
    }
  }

  &__titleName {
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Oswald-SemiBold", sans-serif;
    font-size: 80px;
    color: $white-one;
    animation: ascent-name 1.5s ease-in-out;
    opacity: 0.9;

    @media (max-width: 1600px) {
      font-size: 60px;
    }

    @media (max-width: 767px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      font-size: 28px;
    }
  }

  &__titleSubnameBox {
    position: relative;
    grid-area: subname;
    width: 100%;
    height: 32px;
    overflow: hidden;

    @media (max-width: 767px) {
      height: 22px;
    }
  }

  &__titleSubname {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: ascent-subname 1s ease-in-out;
    opacity: 0.8;

    @media (max-width: 1600px) {
      font-size: 16px;
      letter-spacing: 1px;
    }

    @media (max-width: 767px) {
      font-size: 12px;
      letter-spacing: 0;
    }

    @media (max-width: 390px) {
      font-size: 10px;
    }
  }

  &__logoBox {
    grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: logo 2s ease;
  }

  &__logo {
    width: 180px;
    animation: logo 5s ease;

    @media (max-width: 1600px) {
      width: 140px;
    }

    @media (max-width: 767px) {
      width: 100px;
    }

    @media (max-width: 576px) {
      width: 80px;
    }
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
</style>
