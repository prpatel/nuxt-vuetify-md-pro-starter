const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,

  // https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate(title) {
      if (title) {
        return `${title} - Nuxt PWA Vuetify`
      }
      return 'Nuxt PWA Vuetify'
    }
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://http.nuxtjs.org/
    '@nuxt/http',

    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',

    'nuxt-validate',

    [
      'nuxt-i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              "avatar": "Tania Andrew",
              "buttons": "Buttons",
              "calendar": "Calendar",
              "charts": "Charts",
              "components": "Components",
              "ct": "CT",
              "dashboard": "Dashboard",
              "dtables": "Data Tables",
              "eforms": "Extended Forms",
              "error": "Error Page",
              "etables": "Extended Tables",
              "example": "Example",
              "forms": "Forms",
              "fullscreen": "Full Screen Map",
              "google": "Google Maps",
              "grid": "Grid System",
              "icons": "Icons",
              "lock": "Lock Screen Page",
              "login": "Login Page",
              "maps": "Maps",
              "multi": "Multi Level Collapse",
              "notifications": "Notifications",
              "pages": "Pages",
              "plan": "Choose Plan",
              "pricing": "Pricing",
              "my-profile": "My Profile",
              "edit-profile": "Edit Profile",
              "register": "Register Page",
              "rforms": "Regular Forms",
              "rtables": "Regular Tables",
              "rtl": "RTL Support",
              "search": "Search",
              "settings": "Settings",
              "tables": "Tables",
              "tabs": "Tabs",
              "tim": "Creative Tim",
              "timeline": "Timeline",
              "typography": "Typography",
              "user": "User Profile",
              "vforms": "Validation Forms",
              "widgets": "Widgets",
              "wizard": "Wizard"
            },
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]

  ],

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify'
  ],

  vuetify: {},

  // https://nuxtjs.org/api/configuration-plugins
  plugins: ['~/plugins/vue-chartist'],

  // https://nuxtjs.org/api/configuration-css
  css: ['~assets/styles/app', '~assets/css/chartist.css'],

  components: [
    '~/components', // shortcut to { path: '~/components' }
    { path: '~/components/base/', prefix: 'base' }
  ],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: !isDev,
    transpile: ['vee-validate/dist/rules', 'vuetify/lib'],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
