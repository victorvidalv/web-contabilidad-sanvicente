export default {
  // Desactivar renderizado del lado del servidor: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Objetivo: https://go.nuxtjs.dev/config-target
  target: 'static',
 
  // Cabeceras globales de la página: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Contabilidad San Vicente',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src: '',
        body: true,
        defer: true,
      },
    ],
  },

  // CSS globales: //static/style.css
  css: ['~/static/style.css'],

  // Plugins para ejecutar antes de renderizar la página: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Importar automáticamente componentes: https://go.nuxtjs.dev/config-components
  components: true,

  // Módulos para desarrollo y construcción (recomendados): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Módulos: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
    '@nuxtjs/proxy',
  ],

  // Configuración del módulo Axios: https://go.nuxtjs.dev/config-axios
  axios: {
    // Solución temporal para evitar la imposición de localhost:3000 codificado en duro: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://contabilidadsanvicente.cl/',
  },

  router: {
    base: '/'
  },

  // Configuración de sitemap (automatico): 
  sitemap: {
    hostname: 'https://contabilidadsanvicente.cl',
  },

  // Configuración del módulo PWA: https://go.nuxtjs.dev/pwa

  pwa: {
    manifest: {
      lang: 'es',
    },
  },

  proxy: {
    '/api/': { 
      target: 'http://64.176.199.173:5002', 
      pathRewrite: {'^/api/': ''},
      changeOrigin: true
    }
  }
  
  

  // Configuración de construcción: https://go.nuxtjs.dev/config-build

  generate: {
    routes: [
      // Rutas de Servicios
      '/servicios/contabilidad',
      '/servicios/remuneraciones',
      '/servicios/asesoria-tributaria',
      '/servicios/cumplimiento',
      '/servicios/evaluacion-financiera',
      '/servicios/gestion-riesgo',
      '/servicios/creacion-cierre-empresas',
      '/servicios/fusiones-adquisiciones',
      '/servicios/quiebras',

      // Rutas de Capacitaciones
      '/capacitacion/fundamentos-contabilidad',
      '/capacitacion/gestion-tributaria',
      '/capacitacion/analisis-financiero',
      '/capacitacion/manejo-remuneraciones',
      '/capacitacion/beneficios-laborales',
      '/capacitacion/cumplimiento-fiscal',
    ],
  },
};
