<template>
  <div>
    <Menu />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  /**
   * Configuración de la etiqueta head del documento HTML
   */
  head() {
    return {
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
      ],

      // Enlaces para SEO
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


<style>
/**
 * Estilos CSS para el Sitio  Completo
 */
p {
  text-align: justify;
  text-justify: inter-word;
  margin-top: 10px;
}

strong {
  font-weight: 700;
  font-size: 1.15rem;
  color: #4267b2;
}

.bg-blue-600,
.bg-blue-600 a {
  background-color: #4267b2 !important;
}

.text-blue-600,
.text-blue-600,
.text-blue-500 a {
  color: #4267b2 !important;
}

.text-gray-500,
.text-gray-500 a {
  color: black !important;
}
</style>
