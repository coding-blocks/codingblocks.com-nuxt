export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Best programming Courses in Delhi-NCR | Coding Blocks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Coding Blocks Main Website',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@coding-blocks/bootstrap/dist/css/bootstrap.css',
    'swiper/dist/css/swiper.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/swiper.ts', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: false }],
    [
      'nuxt-fontawesome',
      {
        component: 'fab',
        imports: [
          // import whole set
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
        ],
      },
    ],
  ],
}
