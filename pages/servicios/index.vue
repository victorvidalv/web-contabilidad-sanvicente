<template>
  <div>
    <!-- Banner de Servicios -->
    <ServicesBanner />

    <!-- Estadísticas de la Empresa -->

        <SiteStast />

    <!-- Tarjetas de Servicios -->
    <ServicesCards />

    <!-- CTA  Oficina Virtual -->
    <OfficeCallToAction />

    
    <!-- Contrato de Servicios -->
    <ServicesContract />

    <!-- Sección "HomeModern" (Puede ser un componente específico) -->
    <HomeModern />

    <!-- Clientes del Sitio -->
    <SiteClients />
  </div>
</template>
  
<script>
export default {
  //Modulos con carga diferida para optimizar la carga de la página
  components: {
    ServicesContract: () => import('~/components/ServicesContract.vue'),

    HomeModern: () => import('~/components/HomeModern.vue'),

    SiteClients: () => import('~/components/SiteClients.vue'),
    SiteStast: () => import('~/components/SiteStast.vue'),

  },
  layout: 'default', // Establece el diseño predeterminado para esta página

  // Configuración de etiquetas meta para SEO
  head() {
    return {
      title: "Servicios | Contabilidad San Vicente", // Título de la página
      meta: [
        {
          hid: "description", // Identificador único para esta etiqueta meta
          name: "description", // Nombre de la etiqueta meta
          content: "Explore nuestra amplia gama de servicios contables y empresariales en San Vicente de Tagua Tagua. Desde contabilidad hasta asesoría tributaria, tenemos la solución que su negocio necesita.", // Contenido de la etiqueta meta
        },
        {
          hid: "keywords", // Identificador único para esta etiqueta meta
          name: "keywords", // Nombre de la etiqueta meta
          content: "Servicios Contables, San Vicente de Tagua Tagua, Contabilidad, Asesoría Tributaria, Gestión de Riesgos, Evaluación Financiera, Creación de Empresas, Fusiones y Adquisiciones, Gestión Remuneraciones, Cumplimiento Fiscal", // Contenido de la etiqueta meta
        },
      ],
    };
  },
}
</script>
  