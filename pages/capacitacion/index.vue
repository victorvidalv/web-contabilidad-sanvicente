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
      title: "Cursos y Capacitación Contable | Contabilidad San Vicente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Programas de capacitación especializada en contabilidad, tributación y gestión empresarial. Actualice sus conocimientos con expertos en San Vicente de Tagua Tagua.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "capacitación contable, cursos tributarios, formación empresarial, actualización contable, workshops financieros, educación continua, san vicente de tagua tagua",
        },
      ],
    };
  },
}
</script>
