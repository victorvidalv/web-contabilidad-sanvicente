<template>
  <div class="font-helvetica"> <!-- << Fuente del sitio -->

    <!-- Navbar -->
    <SiteMenu />

    <!--Página actual (se renderiza dinámicamente) -->
    <Nuxt />

    <!-- Pie de página-->
    <WhatsAppButton/>
    <SiteFooter />
    
  </div>
</template>

<script>

export default {
  //Carga diferida (optimizar carga)
  components: {
    SiteFooter: () => import('~/components/SiteFooter.vue'),
  },

  head() {
    return {
      title: this.$route.path === '/' ? 'Contabilidad San Vicente | Expertos Contables en San Vicente de Tagua Tagua' : 'Contabilidad San Vicente',
      
      htmlAttrs: {
        lang: "es",
      },

      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "author",
          name: "author",
          content: "Contabilidad San Vicente",
        },
        {
          hid: "Publisher",
          name: "Publisher",
          content: "Contabilidad San Vicente",
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow",
        },
        {
          hid: "description",
          name: "description",
          content: "Servicios contables profesionales y asesoría tributaria especializada en San Vicente de Tagua Tagua. Optimizamos sus finanzas con soluciones personalizadas y atención experta.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "contabilidad san vicente, asesoría tributaria, servicios contables, san vicente de tagua tagua, contadores expertos, gestión financiera, declaración de impuestos, asesoría empresarial",
        },
      ],

      link: [
        {
          rel: "canonical",
          href: "https://www.contabilidadsanvicente.cl" + this.$route.path,
        },
      ],
    };
  },
};
</script>
