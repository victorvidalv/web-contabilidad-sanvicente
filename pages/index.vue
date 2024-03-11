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
      title: "Bienvenido | Contabilidad San Vicente", // Título de la página

      //Configuración META
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Ofrecemos una amplia gama de servicios contables y empresariales en San Vicente de Tagua Tagua. Explore nuestras soluciones y descubra cómo podemos ayudarle a prosperar.",
        },
        {
          hid: "keywords",
          name: "keywords", 
          content:
            "Servicios Integrales, San Vicente de Tagua Tagua, Bienvenida, Soluciones Contables, Asesoramiento Contable",
        },
      ],
    };
  },
};
</script>
