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
      title: "Contacte a Nuestros Expertos Contables | Contabilidad San Vicente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Contáctenos para asesoría contable y tributaria personalizada en San Vicente de Tagua Tagua. Agenda una consulta con nuestros expertos y descubra cómo podemos ayudar a su empresa.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "contacto contadores, asesoría contable, consulta tributaria, oficina contable san vicente, atención personalizada, servicios contables profesionales",
        },
      ],
    };
  },
};
</script>
