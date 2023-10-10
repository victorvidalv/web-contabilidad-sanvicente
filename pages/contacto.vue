<template>
  <div>
    <!-- Componente del formulario de contacto -->
    <Contactform />
    <!-- Componente desplegable Mapa Oficina -->
    <ContactMap />

    <!-- Sección "Why Choose Us" (Por qué elegirnos) -->
    <HomeWhyChooseUs />
  </div>
</template>

<script>
export default {

  //Modulos con carga diferida para optimizar la carga de la página
  components: {
    HomeWhyChooseUs: () => import('~/components/HomeWhyChooseUs.vue'),
  },

  layout: "default", // Establece el diseño predeterminado para esta página

  // Configuración de etiquetas meta para SEO
  head() {
    return {
      title: "Contacto | Contabilidad San Vicente", // Título de la página
      meta: [
        {
          hid: "description", // Identificador único para esta etiqueta meta
          name: "description", // Nombre de la etiqueta meta
          content:
            "Póngase en contacto con nosotros para servicios de contabilidad, asesoría tributaria y más en San Vicente de Tagua Tagua. Estamos aquí para resolver todas sus consultas.", // Contenido de la etiqueta meta
        },
        {
          hid: "keywords", // Identificador único para esta etiqueta meta
          name: "keywords", // Nombre de la etiqueta meta
          content:
            "Atención al Cliente, Consultas Financieras, San Vicente de Tagua Tagua, Asesoría Personalizada, Contacto Inmediato", // Contenido de la etiqueta meta
        },
      ],
    };
  },
};
</script>
