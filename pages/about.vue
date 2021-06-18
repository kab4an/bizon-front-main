<template>
  <section class="section">
    <div class="media">
      <div class="media-content" style="padding: 20px;">
        <p class="title is-3" style="margin-bottom: 50px;">Наша компанія -</p>
        <p class="subtitle is-5">
          сучасна, іноваційна інжерно-будівельна компанія, яка формує нові
          стандарти на ринку будівельно-монтажних послуг для свої клієнтів
        </p>

        <p class="subtitle is-5">
          Ми реалізуємо для своїх клієнтів самі фантистичні мрії та іноваційні
          ідеї в будівництві та монтажу об'єктів
        </p>

        <p class="subtitle is-5">
          Як генпідрядник, ми плануємо та виконуємо всі аспекти проектів
          будівельно-монтажних робіт
        </p>

        <nuxt-link
          :to="{ name: 'pros' }"
          exact-active-class="is-active"
          class="is-primary"
        >
          <b-button type="is-primary">Чому саме ми </b-button>
        </nuxt-link>
      </div>
      <div
        class="media-left"
        style=" height: 500px; width: 500px; background-image: url(https://www.cepro.com/wp-content/uploads/2019/04/BuildersNoSmartHomes_large-1100x650.jpg); background-size: cover; background-position: center;"
      ></div>
    </div>
  </section>
</template>
