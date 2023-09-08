<template>
  <div>
 
      <ServicesBanner/>

      <Allservices/>

      <Contract/>

      <Clients/>

  </div>
</template>

<script>
export default {
  layout: 'default',
  // SEO (Optimización para motores de búsqueda)
  head() {
      return {
          title: "Servicios | Contabilidad San Vicente",
          meta: [
              {
                  hid: "description",
                  name: "description",
                  content: "oo",
              },
              {
                  hid: "keywords",
                  name: "keywords",
                  content: "sss",
              },
          ],
      };
  },
}
</script>
