<template>
  <section class="stepDetails">
    <TitleCatalogCard
      title="Накладные ступени и проступи из ультрабетона, долговечные, по доступной цене."
    />
    <div class="stepDetails__priceBlock">
      <div class="stepDetails__priceBlockTitleBox">
        <span class="stepDetails__priceBlockTitle">Размеры</span>
      </div>
      <div class="stepDetails__priceBlockSizes">
        <span class="stepDetails__priceBlockAccent">Максимальный</span>
        <div class="stepDetails__priceBlockGrid">
          <div
            class="stepDetails__priceBlockGridCenter stepDetails__priceBlockGridLine"
          >
            <span class="stepDetails__priceBlockGridName">мм</span>
          </div>
          <div
            class="stepDetails__priceBlockGridCenter stepDetails__priceBlockGridLine"
          >
            <span class="stepDetails__priceBlockGridName">вес</span>
          </div>
          <div
            class="stepDetails__priceBlockGridRight stepDetails__priceBlockGridLine"
          >
            <span class="stepDetails__priceBlockGridName">цена / шт</span>
          </div>
          <div class="stepDetails__priceBlockGridCenter">
            <span>1160 х 320 х 25</span>
          </div>
          <div class="stepDetails__priceBlockGridCenter">
            <span>15 кг</span>
          </div>
          <div class="stepDetails__priceBlockGridRight">
            <span class="stepDetails__priceBlockAccent">12 500</span
            ><span> руб</span>
          </div>
        </div>
      </div>

      <!-- 
        
        <span class="stepDetails__priceGridAccent">Минимальный</span>
        <div class="stepDetails__priceGridCenter">
          <span>300 х 320 х 25</span>
        </div>
        <div class="stepDetails__priceGridCenter">
          <span>5 кг</span>
        </div>
        <div class="stepDetails__priceGridRight">
          <span class="stepDetails__priceGridAccent">1 500</span
          ><span> руб</span>
        </div>

        <span class="stepDetails__priceGridAccent">Максимальный</span>
        <div class="stepDetails__priceGridCenter">
          <span>2550 х 350 х 40</span>
        </div>
        <div class="stepDetails__priceGridCenter">
          <span>25 кг</span>
        </div>
        <div class="stepDetails__priceGridRight">
          <span class="stepDetails__priceGridAccent">22 500</span
          ><span> руб</span>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stepDetails {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__priceBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    border-radius: $br-s;
    border: 1px solid $white-mask-four;
    overflow: hidden;
  }

  &__priceBlockTitleBox {
    background: $gradient-orange-one;
    padding: 10px;
  }

  &__priceBlockTitle {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  &__priceBlockSizes {
    display: flex;
    flex-direction: column;
    // gap: 40px;
    padding: 10px;
  }

  &__priceBlockAccent {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1;
  }

  &__priceBlockGrid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: end;
    row-gap: 10px;
    // column-gap: 10px;
  }

  &__priceBlockGridName {
    font-size: 12px;
    line-height: 2;
    color: $white-mask-two;
  }

  &__priceBlockGridCenter {
    line-height: 1;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  &__priceBlockGridRight {
    line-height: 1;
    text-align: right;
    padding-left: 10px;

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  &__priceBlockGridLine {
    border-bottom: 1px solid $white-mask-four;
  }
}
</style>
