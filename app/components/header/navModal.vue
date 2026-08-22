<template>
  <div class="headerNavModal">headerNavModal</div>
</template>

<style lang="scss" scoped>
.headerNavModal {
  position: fixed;
  width: 100%;
  // max-width: 768px;
  height: 100%;
  top: 0;
  right: 0;
  backdrop-filter: blur(15px) grayscale(50%);
  background: $grey-one;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: auto;
  z-index: 10;
}
</style>
