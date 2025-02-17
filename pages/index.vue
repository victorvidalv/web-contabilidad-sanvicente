<template>

  <div>

    <!-- Banner de inicio -->
    <HomeBanner />

    <!-- Estadísticas de la Empresa -->

 

    <!-- Por qué elegirnos -->
    <HomeWhyChooseUs />


<!-- CTA  Oficina Virtual -->
    <OfficeCallToAction />

    <!-- CTA  Contabilidad -->
    <ServicesContabilidadCallToAction />

    <!-- Servicios Modernos-->
    <HomeModern />

    <!-- CTA  Remunraciones -->
    <ServicesRemuneracionesCallToaction />

    <!-- Clientes!-->
  <SiteClients/>

  </div>

</template>

<script>

export default {

  //Modulos con carga diferida (optimizar  carga )
  components: {
    ServicesContabilidadCallToAction: () => import('~/components/ServicesContabilidadCallToAction.vue'),
    ServicesRemuneracionesCallToaction: () => import('~/components/ServicesRemuneracionesCallToaction.vue'),
    HomeWhyChooseUs: () => import('~/components/HomeWhyChooseUs.vue'),
    HomeModern: () => import('~/components/HomeModern.vue'),
    SiteClients: () => import('~/components/SiteClients.vue'),

  },
  layout: "default", // Diseño predeterminado

  // Configuración de etiquetas meta para SEO
  head() {
    return {
      title: "Contabilidad San Vicente | Servicios Contables y Tributarios Profesionales",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Expertos en servicios contables, tributarios y asesoría empresarial en San Vicente de Tagua Tagua. Ofrecemos soluciones integrales para impulsar el éxito de su negocio con atención personalizada.",
        },
        {
          hid: "keywords",
          name: "keywords", 
          content: "contabilidad san vicente, servicios contables, asesoría tributaria, contabilidad empresarial, impuestos, finanzas corporativas, san vicente de tagua tagua, gestoría contable",
        },
      ],
    };
  },
};
</script>
