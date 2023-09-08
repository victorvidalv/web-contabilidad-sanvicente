<template> 
<div>

  <Herohome/>

  <WhyChooseUs/>

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
          title: "Bienvenido | Contabilidad San Vicente",
          meta: [
              {
                  hid: "description",
                  name: "description",
                  content: "Situados estratégicamente en San Vicente de Tagua Tagua, comprendemos de manera íntima las necesidades de los sectores agroindustriales y agrícolas en la Región de O'Higgins. No somos solo otro servicio de contabilidad; somos un aliado que entiende las peculiaridades de su industria y las transforma en estrategias financieras efectivas.",
              },
              {
                  hid: "keywords",
                  name: "keywords",
                  content: "San Vicente, Contabilidad, Contabilidad San Vicente, Contabilidad San Vicente de Tagua Tagua, Contabilidad San Vicente de Tagua Tagua O'Higgins, Contabilidad San Vicente de Tagua Tagua",
              },
          ],
      };
  },
}
</script>