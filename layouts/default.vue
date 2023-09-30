<template>
  <div>
    <!-- Componente del menú del sitio -->
    <SiteMenu/>

    <!-- Componente de la página actual (se renderiza dinámicamente) -->
    <Nuxt/>

    <!-- Componente del pie de página del sitio -->
    <SiteFooter/>
  </div>
</template>

<script>
export default {
  /**
   * Configuración de la etiqueta head del documento HTML
   */
  head() {
    return {
      title: "Contacto | Contabilidad San Vicente",
      // Atributos HTML para SEO
      htmlAttrs: {
        lang: "es",
      },

      // Metadatos para SEO
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
          content: "noimageindex",
        },
        {
          hid: "description",
          name: "description",
          content: "Ofrecemos una amplia gama de servicios contables y empresariales en San Vicente de Tagua Tagua. Explore nuestras soluciones y descubra cómo podemos ayudarle a prosperar.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Servicios Integrales, San Vicente de Tagua Tagua, Bienvenida, Soluciones Contables, Asesoramiento Contable",
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
