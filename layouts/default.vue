<template>
  <div>
    <nav
      class="navbar header has-shadow is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          ВКБ БІЗОН
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <b-modal
      v-model="isComponentModalActiveReg"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <div class="card" style="width: 400px;">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-5" style="margin-bottom: 40px;">
                Реєстрація
              </p>
              <p class="subtitle is-6">
                <section>
                  <b-field label="Ім'я">
                      <b-input v-model="formProps.name" placeholder="Ім'я" ></b-input>
                  </b-field>

                  <b-field label="Прізвище">
                      <b-input v-model="formProps.surname" placeholder="Прізвище" ></b-input>
                  </b-field>

                  <b-field label="Номер телефону">
                    <b-input v-model="formProps.phone_number" placeholder="Номер телефону" type="number"></b-input>
                  </b-field>

                  <b-field label="Пароль">
                    <b-input v-model="formProps.password" placeholder="Пароль" type="password"></b-input>
                  </b-field>

                  <p class="subtitle is-6" style="color: red;"  v-if="this.formHasErr">Перевірте правельність введення даних</p>
                  

                  <b-button
                    label="Зареєструватися"
                    type="is-primary"
                    @click="requestRegister"
                  />
                </section>
              </p>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal
      v-model="isComponentModalActiveLog"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <div class="card" style="width: 400px;">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-5" style="margin-bottom: 40px;">
                Авторизація
              </p>
              <p class="subtitle is-6">
                <section>

                  <b-field label="Номер телефону">
                    <b-input v-model="formPropsLogin.phone_number" placeholder="Номер телефону" type="number"></b-input>
                  </b-field>

                  <b-field label="Пароль">
                    <b-input v-model="formPropsLogin.password" placeholder="Пароль" type="password"></b-input>
                  </b-field>

                  <p class="subtitle is-6" style="color: red;"  v-if="this.formHasErrLog">Перевірте правельність введення даних</p>
                  
                  <b-button
                    label="Авторизуватися"
                    type="is-primary"
                    @click="requestLogin"
                  />
                </section>
              </p>
            </div>
          </div>
        </div>
      </div>
    </b-modal>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          Меню
        </p>

        <ul class="menu-list">
          <li style="padding: 4px;">
            <nuxt-link :to="{ name: 'index' }" exact-active-class="is-active">
              Домашня
            </nuxt-link>
          </li>

          <li style="padding: 4px;">
            <nuxt-link :to="{ name: 'about' }" exact-active-class="is-active">
              Про нас
            </nuxt-link>
          </li>

          <li style="padding: 4px;">
            <nuxt-link :to="{ name: 'pros' }" exact-active-class="is-active">
              Чому саме ми
            </nuxt-link>
          </li>

          <li style="padding: 4px;">
            <nuxt-link :to="{ name: 'spec' }" exact-active-class="is-active">
              Спеціалізація
            </nuxt-link>
          </li>

          <li style="padding: 4px;" v-if="this.$auth.loggedIn && this.$auth.user.role == 'CUSTOMER'">
            <nuxt-link :to="{ name: 'makeorder' }" exact-active-class="is-active">
              Зробити замовлення
            </nuxt-link>
          </li>

          <li style="padding: 4px;" v-if="this.$auth.loggedIn && this.$auth.user.role == 'MANAGER'">
            <nuxt-link :to="{ name: 'allrequests' }" exact-active-class="is-active">
              Усі заявки
            </nuxt-link>
          </li>

          <li style="padding: 4px;" v-if="this.$auth.loggedIn && this.$auth.user.role == 'MANAGER'">
            <nuxt-link :to="{ name: 'activereq' }" exact-active-class="is-active">
              Активні заявки
            </nuxt-link>
          </li>

          <li style="padding: 4px;" v-if="!this.$auth.loggedIn">
            <a @click="isComponentModalActiveReg = true" exact-active-class="is-active">
              Реєстрація
            </a>
          </li>

          <li style="padding: 4px;"  v-if="!this.$auth.loggedIn">
            <a @click="isComponentModalActiveLog = true" exact-active-class="is-active">
              Авторизація
            </a>
          </li>

          <li style="padding: 4px;"  v-if="this.$auth.loggedIn">
            <a @click="logout" exact-active-class="is-active">
              Вийти
            </a>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isComponentModalActiveReg: false,
      isComponentModalActiveLog: false,
      formHasErr: false,
      formHasErrLog: false,
      formProps: {
        name: '',
        surname: '',
        phone_number: '',
        password: ''
      },
      formPropsLogin: {
        phone_number: '',
        password: ''
      },
      items: [
        {
          title: "Домашня сторінка",
          to: { name: "index" }
        },
        {
          title: "Про нас",
          to: { name: "about" }
        },
        {
          title: "Спеціалізація",
          to: { name: "spec" }
        },
        {
          title: "Спеціалізація",
          to: { name: "spec" }
        }
      ]
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },
    async requestRegister() {
      let nameerr, surnameerr, pherr, pwerr
      if(this.formProps.name.length > 20 || this.formProps.name.length < 3){ 
        console.log('name err')
        nameerr = true;
      }
      if(this.formProps.surname.length > 20 || this.formProps.surname.length < 3) {
        console.log('surname err')
        surnameerr = true;
      }
      if(this.formProps.phone_number.length != 12){ 
        console.log('ph err')
        pherr = true;
      }
      if(this.formProps.password.length > 20 || this.formProps.password.length < 3) {
        console.log('pwd err')
        pwerr = true;
      }
      if (!nameerr && !surnameerr && !pherr && !pwerr) {
        this.formHasErr = false;
        console.log(this.formProps);

        await this.$axios.$post("https://bizon-restapi.herokuapp.com/api/user/register",
        {
          name: this.formProps.name,
          surname: this.formProps.surname,
          phone_number: this.formProps.phone_number,
          password: this.formProps.password
        }, { withCredentials: true })
        this.isComponentModalActiveReg = false;

        this.$buefy.toast.open({
            message: 'Реєстрація успішна',
            type: 'is-success'
        })
      } else {
        this.formHasErr = true;
        console.log("errors");
      }

    },

    async requestLogin() {
      let pherr, pwerr
      if(this.formPropsLogin.phone_number.length != 12){ 
        console.log('ph err')
        pherr = true;
      }
      if(this.formPropsLogin.password.length > 20 || this.formPropsLogin.password.length < 3) {
        console.log('pwd err')
        pwerr = true;
      }

      if (!pherr && !pwerr) {
        this.formHasErrLog = false;
        console.log(this.formPropsLogin);
        await this.$auth.loginWith("customer", {
            // phone_number: this.formPropsLogin.phone_number,
            // password: this.formPropsLogin.password,
            data: this.formPropsLogin
        })

        this.isComponentModalActiveLog = false;

        this.$buefy.toast.open({
            message: 'Авторизовано',
            type: 'is-success'
        })

        console.log(this.$auth);

      } else {
        this.formHasErrLog = true;
        console.log("errors");
      }
    }
  }
};
</script>
