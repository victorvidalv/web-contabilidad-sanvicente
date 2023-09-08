<template>
    <div>

      <AboutusBanner/>

      <Team/>

      <BannerModernService/>

      <Clients/>
    
    </div>
</template>


<script>
export default {
  layout: 'default',
  // SEO (Optimización para motores de búsqueda)
  head() {
      return {
          title: "Nosotros | Contabilidad San Vicente",
          meta: [
              {
                  hid: "description",
                  name: "description",
                  content: "",
              },
              {
                  hid: "keywords",
                  name: "keywords",
                  content: "",
              },
          ],
      };
  },
}
</script>