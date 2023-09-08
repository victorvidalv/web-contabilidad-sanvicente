<template>
    <div>
 
      <SingleServiceBanner :name="servicio.name" :description="servicio.description" />




<!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
  

    <!-- Icon Block -->
    <div>
      <svg class="w-9 h-9 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
        <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 ">Servicio Personalizado</h3>
        <p class="mt-1 text-gray-600 ">Comprendemos que cada cliente es único y tiene requerimientos específicos que no pueden ser satisfechos con soluciones estándar. Es por eso que nos enorgullece ofrecer un servicio completamente personalizado, diseñado para cumplir con tus necesidades individuales.</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
      <svg class="w-9 h-9 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 ">Documentación ONLINE</h3>
        <p class="mt-1 text-gray-600 ">La era digital ha revolucionado la forma en que accedemos y compartimos información. Conscientes de la importancia de esta evolución, en Contabilidad San Vicente ofrecemos una completa base de documentación en línea, accesible 24/7, para que puedas encontrar rápidamente las respuestas y recursos que necesitas.</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div >
      <svg class="w-9 h-9 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 ">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5 " >
        <h3 class="text-lg font-semibold text-gray-800 ">Soporte Permanente</h3>
        <p class="mt-1 text-gray-600 "><strong>En el mundo de los negocios, los números nunca descansan. </strong>Conscientes de que cada decisión financiera cuenta, en Contabilidad San Vicente te ofrecemos un soporte contable permanente para asegurarte la paz mental que necesitas para centrarte en lo que mejor sabes hacer: dirigir tu negocio.</p>
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
          <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 ">
            Detalles del Servicio
          </h2>
          <p class="text-gray-500" v-html="servicio.details">
   
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




<Modern/>


<!-- FAQ -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
     Preguntas Feceuntes |  {{ servicio.name }}
    </h2>
  </div>
  <!-- End Title -->

  <div class="">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
    


    <div v-for="(question, index) in servicio.questions" :key="index" data-aos="zoom-in" data-aos-duration="700">
        <h3 class="text-lg font-semibold text-gray-800 ">
            {{ question.question }}
        </h3>
        <p class="mt-2 text-gray-600 " v-html="question.answer">
        
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


  export default {
    layout: 'default',
    data() {
        return {
            servicio: {},
            singleservice: ''
        };
    },
    async asyncData({ params }) {
        const singleservice = params.singleservice;
        try {
            const res = await fetch('/datos.json');
            const datos = await res.json();
            // Encuentra el servicio cuya URL coincida con el singleservice
            let servicioEncontrado = null;
            for (const key in datos.servicios) {
                if (datos.servicios[key].url === `servicios/${singleservice}`) {
                    servicioEncontrado = datos.servicios[key];
                    break;
                }
            }
            if (servicioEncontrado) {
                return {
                    singleservice,
                    servicio: servicioEncontrado
                };
            }
            else {
                throw new Error(`No se encontró el servicio con la URL: servicios/${singleservice}`);
            }
        }
        catch (error) {
            console.error('Ocurrió un error:', error);
            return {
                singleservice,
                servicio: {}
            };
        }
    },
    head() {
        return {
            title: this.servicio.name + ' | San Vicente Tagua Tagua',
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.servicio.description,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.servicio.keywords,
                },
            ],
        };
    },
  
}
  </script>