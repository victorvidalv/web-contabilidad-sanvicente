<template>
    <div>
      <!-- Banner de Capacitación con información dinámica -->
      <SiteSecondBanner :name="capacitar.name" :description="capacitar.description" img="train.webp"/>
  
      <!-- Características de la Capacitación -->
      <TrainSingleCharacteristics/>
      <TrainVideo/>
      <!-- Enfoque de Entrenamiento -->
      <!-- Detalles de la Capacitación con información dinámica -->
      <TrainSingleDetails :details="capacitar.details"/>


      <!-- CTA  Oficina Virtual -->
    <OfficeCallToAction />
  
      <!-- Contrato de Capacitación -->
      <TrainContract />
  
      <!-- Clientes del Sitio -->
      <SiteClients/>
    </div>
  </template>
  
  <script>
  export default {
  //Modulos con carga diferida para optimizar la carga de la página
 components: {
  TrainVideo: () => import('~/components/TrainVideo.vue'),
  TrainSingleDetails: () => import('~/components/TrainSingleDetails.vue'),
  TrainContract: () => import('~/components/TrainContract.vue'),
  SiteClients: () => import('~/components/SiteClients.vue'),
  },
    layout: 'default', // Establece el diseño predeterminado para esta página
  
    data() {
      return {
        capacitar: {}, // Objeto para almacenar la información de capacitación
        singletrain: '', // Variable para almacenar la URL única de la capacitación
      };
    },
  
    async asyncData({ params }) {
      const singletrain = params.singletrain; // Obtiene la URL única de la capacitación desde los parámetros
      try {
        const res = await fetch('datos.json'); // Realiza una solicitud para obtener datos
        const datos = await res.json(); // Convierte la respuesta en formato JSON
  
        // Encuentra la capacitación cuya URL coincida con la singletrain
        let capacitarEncontrado = null;
        for (const key in datos.capacitacion) {
          if (datos.capacitacion[key].url === `capacitacion/${singletrain}`) {
            capacitarEncontrado = datos.capacitacion[key];
            break;
          }
        }
  
        if (capacitarEncontrado) {
          return {
            singletrain,
            capacitar: capacitarEncontrado,
          };
        } else {
          throw new Error(`No se encontró la capacitación con la URL: capacitacion/${singletrain}`);
        }
      } catch (error) {
        console.error('Ocurrió un error:', error);
        return {
          singletrain,
          capacitar: {},
        };
      }
    },
  
    head() {
      return {
        title: this.capacitar.name + ' | San Vicente Tagua Tagua', // Título de la página con nombre dinámico
        meta: [
          {
            hid: "description", // Identificador único para esta etiqueta meta
            name: "description", // Nombre de la etiqueta meta
            content: this.capacitar.meta, // Contenido de la etiqueta meta
          },
          {
            hid: "keywords", // Identificador único para esta etiqueta meta
            name: "keywords", // Nombre de la etiqueta meta
            content: this.capacitar.keywords, // Contenido de la etiqueta meta
          },
        ],
      };
    },
  }
  </script>
  
