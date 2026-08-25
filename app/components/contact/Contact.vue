<template>
  <section class="contact">
    <ContactMap />
    <ContactInfo />
  </section>
</template>

<style lang="scss" scoped>
.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
