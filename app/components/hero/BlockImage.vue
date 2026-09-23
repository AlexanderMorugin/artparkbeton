<template>
  <picture>
    <source media="(max-width: 768px)" srcSet="/images/hero/hero-1-768.webp" />
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
      class="heroBlockImage"
    />
  </picture>
</template>

<style lang="scss" scoped>
.heroBlockImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: scale 3s ease;
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
</style>
