<template>
    <div>

        <Contactform />

        <WhyChooseUs />

    </div>
</template>


<script>
export default {
  layout: 'default',
  // SEO (Optimización para motores de búsqueda)
  head() {
      return {
          title: "Contacto | Contabilidad San Vicente",
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