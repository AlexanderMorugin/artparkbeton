<template>
  <section class="contact">
    <div class="contact__grid">
      <ContactMap />
      <ContactInfo />
    </div>
    <ParagraphLarge center paddingTop>
      Связаться с нами можно любыми указанами способами. Звоните по телефону в
      часы работы мастерской. Пишите в мессенджеры и на почту круглосуточно.
      Всегда рад ответить на ваши вопросы. С уважением, Николай.
    </ParagraphLarge>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
}
</style>
