import StylelintPlugin from 'stylelint-webpack-plugin'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/_font.scss', '@/assets/scss/_global.scss'],
  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources', 'nuxt-fontawesome'],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue', '**/*.scss']
          })
        )
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
