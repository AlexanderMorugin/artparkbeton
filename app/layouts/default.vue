<template>
  <div class="defaultLayout">
    <Header />
    <main>
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
}
</style>
