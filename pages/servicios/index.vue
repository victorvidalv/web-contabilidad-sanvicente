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
      title: "Servicios Contables y Tributarios | Contabilidad San Vicente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Servicios contables profesionales, asesoría tributaria, gestión de remuneraciones y consultoría empresarial en San Vicente. Soluciones integrales adaptadas a las necesidades de su empresa.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "servicios contables, asesoría tributaria, gestión de remuneraciones, consultoría empresarial, contabilidad empresas, declaración de impuestos, san vicente de tagua tagua, planificación tributaria",
        },
      ],
    };
  },
}
</script>
