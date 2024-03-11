<template>
  <div>
    <!-- Banner de Entrenamiento -->
    <TrainBanner />

        
    <!-- Estadísticas de la Empresa -->

    <SiteStast />

    <!-- Tarjetas de Entrenamiento -->
    <TrainCards />

    <TrainFocus />

    <!-- CTA  Oficina Virtual -->
    <OfficeCallToAction />

    
    <!-- Equipo de About -->
    <AboutTeam />

    <!-- Clientes del Sitio -->
    <SiteClients />


  </div>
</template>
  
<script>
export default {
  //Modulos con carga diferida para optimizar la carga de la página
  components: {
    TrainFocus: () => import('~/components/TrainFocus.vue'),
    AboutTeam: () => import('~/components/AboutTeam.vue'),
    SiteClients: () => import('~/components/SiteClients.vue'),
    SiteStast: () => import('~/components/SiteStast.vue'),
  },
  layout: 'default', // Establece el diseño predeterminado para esta página

  // Configuración de etiquetas meta para SEO
  head() {
    return {
      title: "Bienvenido | Contabilidad San Vicente", // Título de la página
      meta: [
        {
          hid: "description", // Identificador único para esta etiqueta meta
          name: "description", // Nombre de la etiqueta meta
          content: "Ofrecemos una amplia gama de servicios contables y empresariales en San Vicente de Tagua Tagua. Explore nuestras soluciones y descubra cómo podemos ayudarle a prosperar.", // Contenido de la etiqueta meta
        },
        {
          hid: "keywords", // Identificador único para esta etiqueta meta
          name: "keywords", // Nombre de la etiqueta meta
          content: "Servicios Integrales, San Vicente de Tagua Tagua, Bienvenida, Soluciones Contables, Asesoramiento Contable", // Contenido de la etiqueta meta
        },
      ],
    };
  },
}
</script>
  