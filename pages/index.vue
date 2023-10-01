<template>
    <!-- La estructura principal de la página de inicio -->
    <div>
      <!-- Componente del banner de inicio -->
      <HomeBanner/>
  
      <!-- Componente de por qué elegirnos -->
      <HomeWhyChooseUs/>
  
            <!-- Componente servicio contabilidad -->
      <ServicesContabilidadCallToAction/>
  



      <!-- Componente de la sección servicios modernos de inicio -->
      <HomeModern/>
    <!-- Componente de clientes del sitio -->
      <SiteClients/> 
    </div>
  </template>
  
  <script>
  export default {
    layout: 'default', // Establece el diseño predeterminado para esta página
  
    // Configuración de etiquetas meta para SEO
    head() {
      return {
        title: "Bienvenido | Contabilidad San Vicente", // Título de la página
        meta: [
          {
            hid: "description", // Identificador único para esta etiqueta meta
            name: "description", // Nombre de la etiqueta meta
            content: "Ofrecemos una amplia gama de servicios contables y empresariales en San Vicente de Tagua Tagua. Explore nuestras soluciones y descubra cómo podemos ayudarle a prosperar.", // Contenido de la etiqueta meta
          },
          {
            hid: "keywords", // Identificador  para esta etiqueta meta
            name: "keywords", // Nombre de la etiqueta meta
            content: "Servicios Integrales, San Vicente de Tagua Tagua, Bienvenida, Soluciones Contables, Asesoramiento Contable", // Contenido de la etiqueta meta
          },
        ],
      };
    },
  }
  </script>
  
