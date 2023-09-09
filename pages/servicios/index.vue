<template>
  <div>
 
      <ServicesBanner/>

      <ServicesCards/>

      <ServicesContract/>

      <HomeModern/>

      <SiteClients/>

  </div>
</template>

<script>
export default {
  layout: 'default',

    // INICIO SEO 

  head() {
      return {
          title: "Servicios | Contabilidad San Vicente",
          meta: [
              {
                  hid: "description",
                  name: "description",
                  content: "Explore nuestra amplia gama de servicios contables y empresariales en San Vicente de Tagua Tagua. Desde contabilidad hasta asesoría tributaria, tenemos la solución que su negocio necesita.",
              },
              {
                  hid: "keywords",
                  name: "keywords",
                  content: "Servicios Contables, San Vicente de Tagua Tagua, Contabilidad, Asesoría Tributaria, Gestión de Riesgos, Evaluación Financiera, Creación de Empresas, Fusiones y Adquisiciones, Gestión Remuneraciones, Cumplimiento Fiscal",
              },
          ],
      };
  },

    // FIn SEO 

}
</script>
