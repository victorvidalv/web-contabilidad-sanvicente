<template>
  <div class="dark:bg-gray-800">
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
  color:#F25022;
 
}


.red strong {
  font-weight: 700;
  font-size: 1.15rem;
  color:white;
}


.red .text-blue-600 {
  color:white !important;
}


.bg-blue-600,
.bg-blue-600 a {
  background-color: #F25022 !important;
}

.text-blue-600,
.text-blue-600,
.text-blue-500 a nuxt-link {
  color: #F25022 !important;
}

.text-gray-500,
.text-gray-500 a {
  color: black !important;
}

.red  {

background-color: #F25022;

}

.bg-1 {
    width: 240px; height: 145px;
    background: url('/clients_css_sprites.webp') -2px -2px;
}

.bg-2 {
    width: 240px; height: 145px;
    background: url('/clients_css_sprites.webp') -246px -2px;
}

.bg-3 {
    width: 240px; height: 145px;
    background: url('/clients_css_sprites.webp') -2px -151px;
}

.bg-4 {
    width: 240px; height: 145px;
    background: url('/clients_css_sprites.webp') -246px -151px;
}


.bg-5 {
    width: 240px; height: 145px;
    background: url('/clients_css_sprites.webp') -2px -300px;
}

.bg-6 {
    width: 240px; height: 145px;
    background: url('/clients_css_sprites.webp') -246px -300px;
}

.bg-7 {
    width: 240px; height: 145px;
    background: url('/clients_css_sprites.webp') -490px -151px;
}

.bg-8 {
    width: 240px; height: 145px;
    background: url('/clients_css_sprites.webp') -490px -2px;
}

</style>
