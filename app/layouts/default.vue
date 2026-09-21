<template>
  <div class="defaultLayout">
    <div class="defaultLayout__overlay" />

    <Header />
    <main class="defaultLayout__content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.defaultLayout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $gradient-page-primary;
    filter: blur(100px);
  }

  &__content {
    position: relative;
  }
}
</style>
