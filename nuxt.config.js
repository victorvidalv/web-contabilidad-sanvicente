export default {
  // Desactivar renderizado del lado del servidor
  ssr: false,

  // Objetivo: estático
  target: 'static',
 
  // Cabeceras globales de la página
  head: {
    title: 'Contabilidad San Vicente',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-QTC3G6D1CL',
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QTC3G6D1CL');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtag-inline-script': ['innerHTML']
    }
  },

  // CSS globales
  css: ['~/static/style.css'],

  // Plugins para ejecutar antes de renderizar la página


  // Importar automáticamente componentes
  components: true,

  // Módulos para desarrollo y construcción
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Módulos
  modules: [
    '@nuxtjs/axios',
    '@vite-pwa/nuxt',
    '@nuxtjs/sitemap',
  ],

  // Configuración del módulo Axios
  axios: {
    baseURL: '/',
  },

  // Configuración del router
  router: {
    base: '/'
  },

  // Configuración del módulo PWA
  pwa: {
    manifest: {
      lang: 'es',
    },
  },

  // Configuración de sitemap
  sitemap: {
    hostname: 'https://contabilidadsanvicente.cl/',
    filter({ routes }) {
      const includedRoutes = [
        '/nosotros/',
        '/servicios/',
        '/capacitacion/',
        '/contacto/',
        '/blog/',
        '/terminos-condiciones/',
        '/politica-privacidad/',
        '/oficina-virtual/',
        '/herramientas/',
        '/servicios/contabilidad/',
        '/servicios/evaluacion-proyectos-inversion/',
        '/servicios/remuneraciones/',
        '/servicios/asesoria-tributaria/',
        '/servicios/cumplimiento/',
        '/servicios/evaluacion-financiera/',
        '/servicios/gestion-riesgo/',
        '/servicios/creacion-cierre-empresas/',
        '/servicios/fusiones-adquisiciones/',
        '/servicios/quiebras/',
        '/capacitacion/fundamentos-contabilidad/',
        '/capacitacion/gestion-tributaria/',
        '/capacitacion/analisis-financiero/',
        '/capacitacion/manejo-remuneraciones/',
        '/capacitacion/beneficios-laborales/',
        '/capacitacion/cumplimiento-fiscal/',
      ];

      return routes.filter(route => includedRoutes.includes(route.url));
    },
  },

  // Configuración de construcción
  generate: {
    routes: [
      '/nosotros/',
      '/servicios/',
      '/capacitacion/',
      '/contacto/',
      '/blog/',
      '/terminos-condiciones/',
      '/politica-privacidad/',
      '/oficina-virtual/',
      '/herramientas/',
      '/servicios/contabilidad/',
      '/servicios/evaluacion-proyectos-inversion/',
      '/servicios/remuneraciones/',
      '/servicios/asesoria-tributaria/',
      '/servicios/cumplimiento/',
      '/servicios/evaluacion-financiera/',
      '/servicios/gestion-riesgo/',
      '/servicios/creacion-cierre-empresas/',
      '/servicios/fusiones-adquisiciones/',
      '/servicios/quiebras/',
      '/capacitacion/fundamentos-contabilidad/',
      '/capacitacion/gestion-tributaria/',
      '/capacitacion/analisis-financiero/',
      '/capacitacion/manejo-remuneraciones/',
      '/capacitacion/beneficios-laborales/',
      '/capacitacion/cumplimiento-fiscal/',
    ],
  },
};
