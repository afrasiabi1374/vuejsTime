import fa from './utility/i18n/fa'
import qs from "qs"
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vuejstime',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [{src:'~/plugins/myPlugin', mode: 'client'}],
  plugins: 
  [
    '~/plugins/checkRoutes',
    '~/plugins/myPlugin',
    '~/plugins/veeValidate',
    '~/plugins/i18n',
    '~/plugins/mixin',
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt'
  
  ],
  i18n: {
    locales: [
      {
        code: 'fa',
        name: 'Persian',
      },
    ],
    defaultLocale: 'fa',
    vueI18n: {
      fallbackLocale: 'fa',
      messages: {
        fa: fa.messages,
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  proxy: {
    '/api': 'https://acm.academyland.net/', //use username:user and password:123456 for authentication
  },

  env: {
    baseUrl: 'http://' + 'localhost:3000' + '/api/web',
    authRoutes: [
      '/crud',
      { regex: [/\/profile/.source] },
      { regex: [/\/user\//.source] }
    ]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
  router: {
    middleware: ['load-auth', 'load-user-data'],
  // واسه اینکه کوءری استرینگ هامونو مثل پی اچ پی بزنیم  /// کانفیگ qs
    parseQuery(query){
      return require('qs').parse(query)
    },
    stringifyQuery(query){
      const result = require('qs').stringify(query)
      return result? '?' + result : ''
    },
  //    /// پایان کانفیگ qs
  }
}
