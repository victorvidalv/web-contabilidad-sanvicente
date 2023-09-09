<template> 
    <div>
    
      <LearnBanner/>
    
      <LearnDetails/>

      <LearnTypes/>
    
      <LearnA/>

    

      <Team/> 
    
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
                      content: "Ofrecemos una amplia gama de servicios contables y empresariales en San Vicente de Tagua Tagua. Explore nuestras soluciones y descubra cómo podemos ayudarle a prosperar.",
                  },
                  {
                      hid: "keywords",
                      name: "keywords",
                      content: "Servicios Integrales, San Vicente de Tagua Tagua, Bienvenida, Soluciones Contables, Asesoramiento Contable",
                  },
              ],
          };
      },
    }
    </script>