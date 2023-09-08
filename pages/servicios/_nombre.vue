<template>
    <div>
 

<!-- Features -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div>
      <img  src="https://dummyimage.com/580x410/eee/aaa" alt="Image Description">
    </div>
    <!-- End Col -->

    <div class="mt-5 sm:mt-10 lg:mt-0">
      <div class="space-y-6 sm:space-y-8">
        <!-- Title -->
        <div class="space-y-2 md:space-y-4">
          <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
            {{servicios.name}}
          </h2>
          <p class="text-gray-500" v-html="servicios.description">

          </p>
        </div>
        <!-- End Title -->

      </div>
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Features -->

<!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
  

    <!-- Icon Block -->
    <div>
      <svg class="w-9 h-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
        <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Servicio Personalizado</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Comprendemos que cada cliente es único y tiene requerimientos específicos que no pueden ser satisfechos con soluciones estándar. Es por eso que nos enorgullece ofrecer un servicio completamente personalizado, diseñado para cumplir con tus necesidades individuales.</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
      <svg class="w-9 h-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Documentación ONLINE</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">La era digital ha revolucionado la forma en que accedemos y compartimos información. Conscientes de la importancia de esta evolución, en Contabilidad San Vicente ofrecemos una completa base de documentación en línea, accesible 24/7, para que puedas encontrar rápidamente las respuestas y recursos que necesitas.</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
      <svg class="w-9 h-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Soporte Permanente</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400"><strong>En el mundo de los negocios, los números nunca descansan. </strong>Conscientes de que cada decisión financiera cuenta, en Contabilidad San Vicente te ofrecemos un soporte contable permanente para asegurarte la paz mental que necesitas para centrarte en lo que mejor sabes hacer: dirigir tu negocio.</p>
      </div>
    </div>
    <!-- End Icon Block -->
  </div>
</div>
<!-- End Icon Blocks -->











<div class="bg-details">
<!-- Features -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
  <!-- Grid -->
  <div class="md:grid md:grid-cols-6 md:items-center md:gap-6 xl:gap-6">
    

    <div class="mt-5 sm:mt-10 lg:mt-0 col-span-4">
      <div class="space-y-6 sm:space-y-8">
        <!-- Title -->
        <div class="space-y-2 md:space-y-4">
          <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
            Detalles del Servicio
          </h2>
          <p class="text-gray-500" v-html="servicios.details">
   
          </p>
        </div>
        <!-- End Title -->

      </div>
    </div>

    <div class="col-span-2">
      <img  src="https://dummyimage.com/410x550/eee/aaa" alt="Image Description">
    </div>
    <!-- End Col -->
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Features -->


</div>
<div class="custom-shape-divider-top-1694127686">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>




<Modern/>


<!-- FAQ -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
     Preguntas Feceuntes |  {{ servicios.name }}
    </h2>
  </div>
  <!-- End Title -->

  <div class="max-w-5xl mx-auto">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
    


    <div v-for="(question, index) in servicios.questions" :key="index" data-aos="zoom-in" data-aos-duration="700">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {{ question.question }}
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400" v-html="question.answer">
        
        </p>
    </div>
 






    
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End FAQ -->

<Contract/>


<Clients/>

    </div>
  </template>



  
  <script>
import Diferences from '~/components/Diferences.vue'

  export default {
    layout: 'default',
    data() {
        return {
            servicios: {},
            nombre: ''
        };
    },
    async asyncData({ params }) {
        const nombre = params.nombre;
        try {
            const res = await fetch('/datos.json');
            const datos = await res.json();
            // Encuentra el servicio cuya URL coincida con el nombre
            let servicioEncontrado = null;
            for (const key in datos.servicios) {
                if (datos.servicios[key].url === `servicios/${nombre}`) {
                    servicioEncontrado = datos.servicios[key];
                    break;
                }
            }
            if (servicioEncontrado) {
                return {
                    nombre,
                    servicios: servicioEncontrado
                };
            }
            else {
                throw new Error(`No se encontró el servicio con la URL: servicios/${nombre}`);
            }
        }
        catch (error) {
            console.error('Ocurrió un error:', error);
            return {
                nombre,
                servicios: {}
            };
        }
    },
    head() {
        return {
            title: this.servicios.name + ' | San Vicente Tagua Tagua',
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.servicios.description,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.servicios.keywords,
                },
            ],
        };
    },
    components: { Diferences }
}
  </script>
  
<style>

.bg-details {

    background-color: #F8F9F9  !important;
}

.custom-shape-divider-top-1694127686 {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1694127686 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 35px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1694127686 .shape-fill {
    fill: #F8F9F9;
}
.custom-shape-divider-bottom-1694127887 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1694127887 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 40px;
}

.custom-shape-divider-bottom-1694127887 .shape-fill {
    fill: #F8F9F9;
}
</style>