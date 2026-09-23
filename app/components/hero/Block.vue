<template>
  <section class="heroBlock">
    <div class="heroBlock__container">
      <div class="heroBlock__overlay" />
      <HeroBlockImage />
      <HeroTopTitle />
      <HeroBlockCompanyName />
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

    @media (max-width: 767px) {
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
}

@keyframes overlay {
  0% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    background: $black-mask-four;
  }
}
</style>
