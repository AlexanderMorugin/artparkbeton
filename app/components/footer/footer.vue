<template>
  <footer class="footer">
    <div class="footer__container">
      <ContainerPage>
        <LogoForFooter />

        <div class="footer__grid">
          <FooterNav />
          <FooterContact />
        </div>

        <FooterBottomBlock />
      </ContainerPage>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding-bottom: 40px;

  &__container {
    border-top: 1px solid $white-mask-three;
    padding-top: 40px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-template-areas: "nav contact";
    gap: 100px;
    padding-top: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      grid-template-areas: "contact" "nav";
      gap: 40px;
    }
  }
}
</style>
