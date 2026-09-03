<template>
  <div class="container">
    <div class="circle-wrapper">
      <div class="circle-zero">
        <img src="/logo/logo.png" alt="Logo" class="logo" />
      </div>
      <div class="circle-one"></div>
      <div class="circle-two"></div>
      <div class="circle-three"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    bottom: -150px;
    right: -50px;
  }
}

.circle-wrapper {
  position: relative;
  width: 240px;
  height: 240px;
}

.circle-zero:before {
  content: "";
  position: absolute;
  width: 168px;
  height: 2px;
  left: -60%;
  top: 50%;
  transform: rotate(45deg);
  z-index: -2;
}

.circle-zero {
  border-radius: 50%;
  box-shadow:
    0 0 1px $black-one,
    0 0 50px $white-mask-three,
    0 0 1px $black-one;
  box-sizing: content-box;
  height: 78px;
  width: 78px;
  position: absolute;
  top: 35%;
  left: 35%;
  z-index: -2;

  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-zero:after {
  content: "";
  background: rgba(21, 167, 235, 0.7);
  position: absolute;
  width: 18px;
  height: 1.5px;
  left: -92%;
  top: 51%;
  transform: rotate(90deg);
  animation: circle-move 10s ease infinite;
}

.circle-one:before {
  content: "";
  background: rgba(21, 167, 235, 0.7);
  border-radius: 50%;
  position: absolute;
  width: 4px;
  height: 4px;
  right: -56%;
  top: 45%;
  animation: circle-move 10s ease infinite;
}

.circle-one {
  border: 15px solid;
  border-color: rgba(21, 167, 235, 0.7) rgba(21, 167, 235, 0.7) transparent
    transparent;
  border-radius: 50%;
  box-sizing: content-box;
  height: 98px;
  width: 98px;
  position: absolute;
  top: 25%;
  left: 25%;
  z-index: -1;
  animation: circle-move 10s ease infinite;
}

.circle-one:after {
  content: "";
  background: rgba(21, 167, 235, 0.7);
  border-radius: 50%;
  width: 4px;
  height: 4px;
  position: absolute;
  left: -56%;
  top: 48%;
  animation: circle-move 10s ease infinite;
}

.circle-two {
  border: 25px solid;
  border-color: rgba(255, 191, 102, 0.8) transparent transparent;
  border-radius: 50%;
  box-sizing: content-box;
  height: 90px;
  width: 90px;
  position: absolute;
  top: 22%;
  left: 22%;
  z-index: -2;
  animation: circle-move 14s ease infinite;
}

.circle-three {
  border: 2px solid;
  border-color: $orange-one transparent;
  border-radius: 50%;
  box-sizing: content-box;
  height: 168px;
  width: 168px;
  position: absolute;
  z-index: -3;
  top: 15%;
  left: 15%;
  animation: circle-move 15s ease infinite;
}

.circle-shadow {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  filter: blur(2px);
  height: 20px;
  width: 160px;
  position: absolute;
  top: 100%;
  left: 18%;
}

.logo {
  width: 60%;
}

@keyframes circle-move {
  0% {
    transform: rotate(0deg);
  }
  70% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
