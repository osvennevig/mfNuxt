import webpack from 'webpack'
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,600,700,800&display=swap' }

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
 buildModules: [
],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
    extend (config, ctx) {
    
    }
  }
}
