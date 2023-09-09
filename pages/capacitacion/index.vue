<template> 
    <div>
    
      <TrainBanner/>
      
      <TrainCards/>
    
      <TrainFocus/>

      <AboutTeam/> 
    
      <SiteClients/> 
    
    </div>
    </template>
    
    <script>


    export default {
    layout: 'default',
    // INICIO SEO 
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