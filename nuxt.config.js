export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "bizonapp",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    "nuxt-buefy",
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  axios: {
    baseURL: "https://bizon-restapi.herokuapp.com/api"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  auth: {
    strategies: {
      customer: {
        _scheme: "local",
        endpoints: {
          login: {
            url: "/user/login",
            method: "post",
            propertyName: "token"
          },
          logout: false,
          user: { url: "/user", method: "get", propertyName: "user" }
        }
      },
      manager: {
        _scheme: "local",
        endpoints: {
          login: {
            url: "/user/login",
            method: "post",
            propertyName: "token"
          },
          logout: false,
          user: { url: "/user", method: "get", propertyName: "user" }
        }
      }
    }
  }
};
