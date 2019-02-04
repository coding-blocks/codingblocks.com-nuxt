const config = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt TS project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#3B8070' },
  css: [
    '@coding-blocks/bootstrap/dist/css/bootstrap.css',
    '~/assets/css/main.css',
  ],
  modules: [['bootstrap-vue/nuxt', { css: false }]],
}

export default config
