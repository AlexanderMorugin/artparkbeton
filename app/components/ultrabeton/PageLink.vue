<template>
  <NuxtLink to="/company/ultrabeton" class="ultrabetonPageLink">
    <span class="ultrabetonPageLink__title">Ультрабетон</span>
    <span class="ultrabetonPageLink__subtitle">Как это возможно?</span>
    <span class="ultrabetonPageLink__details">Подробнее...</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.ultrabetonPageLink {
  position: relative;
  display: flex;
  height: 160px;
  border-radius: $br-xxs;
  background: linear-gradient(
    148deg,
    transparent,
    transparent,
    $deep-blue-one,
    $black-one,
    $deep-blue-one,
    $black-one,
    $black-one
  );
  animation: background-fade 20s ease-in-out infinite;
  background-size: 500% 800%;
  -webkit-animation: background-fade 20s ease-in-out infinite;
  -moz-animation: background-fade 20s ease-in-out infinite;

  @media (max-width: 1280px) {
    height: 140px;
  }

  @media (max-width: 1024px) {
    height: 120px;
  }

  @media (max-width: 767px) {
    height: 100px;
  }

  @media (max-width: 576px) {
    height: 80px;
  }

  @media (max-width: 390px) {
    padding: 15px;
    height: 60px;
  }

  &__title {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 68px;
    color: $orange-mask-one;

    letter-spacing: 4px;
    transition: 0.2s ease;
    padding-left: 20%;

    @media (max-width: 1280px) {
      font-size: 58px;
    }

    @media (max-width: 767px) {
      font-size: 36px;
    }

    @media (max-width: 390px) {
      font-size: 24px;
    }
  }

  &__subtitle {
    position: absolute;
    top: 55px;
    right: 1%;
    font-family: "Montserrat-Bold", sans-serif;
    line-height: 0.8;
    letter-spacing: 2px;
    font-size: 100px;
    color: $white-mask-four;

    @media (max-width: 1280px) {
      font-size: 80px;
    }

    @media (max-width: 1024px) {
      font-size: 60px;
    }

    @media (max-width: 767px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
      top: 44px;
      font-size: 28px;
    }

    @media (max-width: 390px) {
      font-size: 22px;
    }
  }

  &__details {
    position: absolute;
    bottom: 5%;
    left: 5%;
    letter-spacing: 2px;
    font-size: 18px;
    transition: 0.2s ease;

    @media (max-width: 767px) {
      font-size: 14px;
    }

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }
}

.ultrabetonPageLink:hover .ultrabetonPageLink__title {
  color: $white-one;
}
.ultrabetonPageLink:hover .ultrabetonPageLink__details {
  color: $orange-four;
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
