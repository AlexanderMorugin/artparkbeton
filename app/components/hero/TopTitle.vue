<template>
  <div class="heroTopTitle">
    <span class="heroTopTitle__text">Изделия из ультрабетона</span>
  </div>
</template>

<style lang="scss" scoped>
.heroTopTitle {
  position: absolute;
  left: 5%;
  right: 5%;
  top: 10%;
  z-index: 2;
  display: flex;
  justify-content: center;

  &__text {
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

    @media (max-width: 767px) {
      font-size: 18px;
      letter-spacing: 4px;
    }
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
