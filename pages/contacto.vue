<template>
    <div>

        <ContactForm />

        <HomeWhyChooseUs />

    </div>
</template>


<script>
export default {
  layout: 'default',

    // INICIO SEO 

  
  head() {
      return {
          title: "Contacto | Contabilidad San Vicente",
          meta: [
              {
                  hid: "description",
                  name: "description",
                  content: "Póngase en contacto con nosotros para servicios de contabilidad, asesoría tributaria y más en San Vicente de Tagua Tagua. Estamos aquí para resolver todas sus consultas.",
              },
              {
                  hid: "keywords",
                  name: "keywords",
                  content: "Atención al Cliente, Consultas Financieras, San Vicente de Tagua Tagua, Asesoría Personalizada, Contacto Inmediato",
              },
          ],
      };
  },


  // FIN SEO 

}
</script>