<template>
  <section class="stepDetails">
    <TitleCatalogCard
      title="Накладные ступени и проступи из ультрабетона, долговечные, по доступной цене."
    />
    <div class="stepDetails__priceBox">
      <div class="container">
        <div class="circle-wrapper">
          <div class="circle-zero">
            <!-- <div class="circle-logo"> -->
            <img src="/logo/logo.png" alt="Logo" class="logo" />
            <!-- </div> -->
          </div>
          <div class="circle-one"></div>
          <div class="circle-two"></div>
          <div class="circle-three"></div>
          <!-- <div class="circle-shadow"></div> -->
        </div>
      </div>
      <!-- <div class="stepDetails__circle" /> -->
      <StepPriceBlock :list="catalogStepOutsideSize" />
      <p class="stepDetails__text">
        Стоимость подступёнка в цену ступени не включена и расчитывается от 800
        руб./п.м. Помимо размера, дополнительно на цену влияет цвет и узор
        поверхности.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { catalogStepOutsideSize } from "~/mock/steps/catalog-step-outside";
</script>

<style lang="scss" scoped>
.stepDetails {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__priceBox {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 40px;

    @media (max-width: 1280px) {
      gap: 20px;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__text {
    position: relative;
    // color: $orange-four;
    // text-shadow:
    //   0 0 1px $black-one,
    //   0 0 1px $black-one;
    text-shadow:
      1px 1px 2px $black-one,
      0 0 25px $white-mask-two,
      0 0 5px $deep-blue-one;
    z-index: 10;

    @media (max-width: 576px) {
      color: $white-one;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &__circle {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: $deep-blue-two;
  }
}

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
  // background: rgba(0, 0, 0, 0.07);
  position: absolute;
  width: 168px;
  height: 2px;
  left: -60%;
  top: 50%;
  transform: rotate(45deg);
  z-index: -2;
}

.circle-zero {
  background: $deep-blue-one;
  border-radius: 50%;
  // box-shadow: 0px 3px 7px 0.7px rgba(0, 0, 0, 0.5);
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
  // background: rgba(0, 0, 0, 0.017);
  border: 25px solid;
  border-color: rgba(255, 191, 102, 0.8) transparent transparent;
  border-radius: 50%;
  // box-shadow: 15px 0 25px -20px rgba(0, 0, 0, 0.65);
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
  // background: rgba(0, 0, 0, 0.012);
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
  // position: relative;
  height: 40%;
  // z-index: -2;
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

// .container {
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   // padding: 60px 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   // border: 1px solid red;
//   @media (max-width: 576px) {
//     bottom: -150px;
//     right: -50px;
//   }
// }

// .circle-wrapper {
//   position: relative;
//   width: 240px;
//   height: 240px;
// }

// .circle-zero:before {
//   content: "";
//   // background: rgba(0, 0, 0, 0.07);
//   position: absolute;
//   width: 168px;
//   height: 2px;
//   left: -60%;
//   top: 50%;
//   transform: rotate(45deg);
//   z-index: -2;
// }

// .circle-zero {
//   // background: #3dbdf9;
//   border-radius: 50%;
//   // box-shadow: 0px 3px 7px 0.7px rgba(0, 0, 0, 0.5);
//   box-sizing: content-box;
//   height: 78px;
//   width: 78px;
//   position: absolute;
//   top: 35%;
//   left: 35%;
// }

// .circle-zero:after {
//   content: "";
//   background: rgba(21, 167, 235, 0.7);
//   position: absolute;
//   width: 18px;
//   height: 1.5px;
//   left: -92%;
//   top: 51%;
//   transform: rotate(90deg);
//   animation: circle-move 10s ease infinite;
// }

// .circle-zero:before {
//   content: "";
//   // background: rgba(0, 0, 0, 0.07);
//   position: absolute;
//   width: 168px;
//   height: 2px;
//   left: -60%;
//   top: 50%;
//   transform: rotate(45deg);
//   z-index: -2;
// }

// .circle-zero {
//   // background: #3dbdf9;
//   // background: $deep-blue-one;
//   // background: $black-one;
//   border-radius: 50%;
//   // box-shadow: 0px 3px 7px 0.7px rgba(0, 0, 0, 0.5);
//   box-sizing: content-box;
//   // height: 78px;
//   // width: 78px;
//   height: 58px;
//   width: 58px;
//   position: absolute;
//   top: 40%;
//   left: 40%;

//   box-shadow:
//     0 0 1px $black-one,
//     0 0 50px $white-mask-three,
//     0 0 1px $black-one;
//   // z-index: -2;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .circle-zero:after {
//   content: "";
//   background: rgba(21, 167, 235, 0.7);
//   position: absolute;
//   width: 18px;
//   height: 1.5px;
//   left: -92%;
//   top: 51%;
//   transform: rotate(90deg);
//   animation: circle-move 10s ease infinite;
// }

// .circle-logo {
//   position: absolute;
//   top: 40%;
//   left: 40%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .logo {
//   // position: relative;
//   width: 60%;
//   // z-index: -2;
// }

// .circle-one:before {
//   content: "";
//   background: rgba(21, 167, 235, 0.7);
//   border-radius: 50%;
//   position: absolute;
//   width: 4px;
//   height: 4px;
//   right: -56%;
//   top: 45%;
//   animation: circle-move 10s ease infinite;
// }

// .circle-one {
//   border: 15px solid;
//   border-color: rgba(21, 167, 235, 0.7) rgba(21, 167, 235, 0.7) transparent
//     transparent;
//   border-radius: 50%;
//   box-sizing: content-box;
//   height: 98px;
//   width: 98px;
//   position: absolute;
//   top: 25%;
//   left: 25%;
//   z-index: -1;
//   animation: circle-move 10s ease infinite;
// }

// .circle-one:after {
//   content: "";
//   background: rgba(21, 167, 235, 0.7);
//   border-radius: 50%;
//   width: 4px;
//   height: 4px;
//   position: absolute;
//   left: -56%;
//   top: 48%;
//   animation: circle-move 10s ease infinite;
// }

// .circle-one:before {
//   content: "";
//   background: rgba(21, 167, 235, 0.7);
//   border-radius: 50%;
//   position: absolute;
//   width: 4px;
//   height: 4px;
//   right: -56%;
//   top: 45%;
//   animation: circle-move 10s ease infinite;
// }

// .circle-one {
//   border: 15px solid;
//   border-color: rgba(21, 167, 235, 0.7) rgba(21, 167, 235, 0.7) transparent
//     transparent;
//   border-radius: 50%;
//   box-sizing: content-box;
//   height: 98px;
//   width: 98px;
//   position: absolute;
//   top: 25%;
//   left: 25%;
//   z-index: -1;
//   animation: circle-move 10s ease infinite;
// }

// .circle-one:after {
//   content: "";
//   background: rgba(21, 167, 235, 0.7);
//   border-radius: 50%;
//   width: 4px;
//   height: 4px;
//   position: absolute;
//   left: -56%;
//   top: 48%;
//   animation: circle-move 10s ease infinite;
// }

// .circle-two {
//   background: rgba(0, 0, 0, 0.017);
//   border: 25px solid;
//   border-color: rgba(209, 25, 230, 0.3) transparent transparent;
//   border-radius: 50%;
//   box-shadow: 15px 0 25px -20px rgba(0, 0, 0, 0.65);
//   box-sizing: content-box;
//   height: 90px;
//   width: 90px;
//   position: absolute;
//   top: 22%;
//   left: 22%;
//   z-index: -2;
//   animation: circle-move 14s ease infinite;
// }

// .circle-two {
//   // background: rgba(0, 0, 0, 0.017);
//   border: 25px solid;
//   border-color: rgba(255, 191, 102, 0.9) transparent transparent;
//   border-radius: 50%;
//   // box-shadow: 15px 0 25px -20px rgba(0, 0, 0, 0.65);
//   box-sizing: content-box;
//   height: 90px;
//   width: 90px;
//   position: absolute;
//   top: 22%;
//   left: 22%;
//   z-index: -2;
//   animation: circle-move 14s ease infinite;
// }

// .circle-three {
//   background: rgba(0, 0, 0, 0.012);
//   border: 2px solid;
//   border-color: #ce93d8 transparent;
//   border-radius: 50%;
//   box-sizing: content-box;
//   height: 168px;
//   width: 168px;
//   position: absolute;
//   z-index: -3;
//   top: 15%;
//   left: 15%;
//   animation: circle-move 15s ease infinite;
// }

// .circle-three {
//   // background: rgba(0, 0, 0, 0.012);
//   border: 2px solid;
//   border-color: $orange-one transparent;
//   border-radius: 50%;
//   box-sizing: content-box;
//   height: 168px;
//   width: 168px;
//   position: absolute;
//   z-index: -3;
//   top: 15%;
//   left: 15%;
//   animation: circle-move 15s ease infinite;
// }

// .circle-shadow {
//   // background: rgba(0, 0, 0, 0.2);
//   border-radius: 50%;
//   filter: blur(2px);
//   height: 20px;
//   width: 160px;
//   position: absolute;
//   top: 100%;
//   left: 18%;
// }

// @keyframes circle-move {
//   0% {
//     transform: rotate(0deg);
//   }
//   70% {
//     transform: rotate(180deg);
//   }
//   100% {
//     transform: rotate(0deg);
//   }
// }
</style>
