<template>
  <div>

    <!-- Banner del Servicio -->
    <SiteSecondBanner :name="servicio.name" :description="servicio.description"
      img="services.webp" />

    <!-- Estadísticas de la Empresa -->

    <SiteStast />

    <!-- Características del Servicio Individual -->
    <ServiceSingleCharacteristics />

    <!-- Detalles del Servicio Individual -->
    <ServiceSingleDetails :details="servicio.details" />


    <!-- CTA  Oficina Virtual -->
    <OfficeCallToAction />

    <!-- Componentes personalizados según servicio -->
    <ServicesContabilidadCallToAction v-if="singleservice === 'contabilidad'" />

    <!-- Contrato de Servicios -->
    <ServicesContract />

    <!-- Clientes del Sitio -->
    <SiteClients />


  </div>
</template>
  
<script>
export default {
  //Modulos con carga diferida para optimizar la carga de la página
  components: {
    ServiceSingleDetails: () => import('~/components/ServiceSingleDetails.vue'),
    ServicesContabilidadCallToAction: () => import('~/components/ServicesContabilidadCallToAction.vue'),
    ServicesContract: () => import('~/components/ServicesContract.vue'),
    SiteClients: () => import('~/components/SiteClients.vue'),
    SiteStast: () => import('~/components/SiteStast.vue'),
  },
  layout: 'default', // Establece el diseño predeterminado para esta página

  data() {
    return {
      servicio: {},
      singleservice: ''
   
    };
  }, 

  async asyncData({ params }) {
    const singleservice = params.singleservice;
    try {
      const res = await fetch('datos.json'); // Cargar datos desde un archivo JSON (ajusta la ruta según tu estructura)
      const datos = await res.json();

      // Encuentra el servicio cuya URL coincida con singleservice
      let servicioEncontrado = null;
      for (const key in datos.servicios) {
        if (datos.servicios[key].url === `/servicios/${singleservice}/`) {
          servicioEncontrado = datos.servicios[key];
          break;
        }
      }

      if (servicioEncontrado) {
        return {
          singleservice,
          servicio: servicioEncontrado
        };
      } else {
        throw new Error(`No se encontró el servicio con la URL: servicios/${singleservice}`);
      }
    } catch (error) {
      console.error('Ocurrió un error:', error);
      return {
        singleservice,
        servicio: {}
      };
    }
  },

  // Configuración de etiquetas meta para SEO
  head() {
    return {
      title: this.servicio.name + ' | Servicios Contables en San Vicente',
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.servicio.meta || `Servicio profesional de ${this.servicio.name.toLowerCase()} en San Vicente de Tagua Tagua. Asesoría especializada y soluciones personalizadas para su empresa.`,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.servicio.keywords || `${this.servicio.name.toLowerCase()}, servicios contables san vicente, asesoría especializada, contabilidad profesional, san vicente de tagua tagua`,
        },
      ],
    };
  },
}
</script>

