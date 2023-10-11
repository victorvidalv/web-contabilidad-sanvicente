<template>
  <div>

    <div class="max-w-[85rem] px-4  sm:px-6 lg:px-8 mx-auto" @click="showcontent = !showcontent">
      <span 
        class="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 bg-blue-950 text-white">¿
        Cómo contratar nuestros servicios ?
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-expand"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z" />
        </svg>
      </span>
    </div>

    <!-- Icon Blocks -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" v-if="showcontent">
      <!-- Grid -->
      <div class="grid md:grid-cols-2 gap-12">
        <div class="lg:w-3/4">
          <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
            Cómo Contratar Nuestros Servicios
          </h2>
          <p class="mt-3 text-gray-800 ">
            Elegir un socio contable confiable es crucial para el éxito de tu negocio. En Contabilidad San Vicente,
            simplificamos el proceso de contratación para que puedas empezar a beneficiarte de nuestros servicios
            especializados lo más pronto posible. A continuación, te presentamos una guía detallada en tres sencillos
            pasos sobre cómo puedes contratar nuestros servicios contables.
          </p>

          <img class="mt-10" src="contract.webp" alt="Image Description">
        </div>
        <!-- End Col -->

        <div class="space-y-6 lg:space-y-10">
          <!-- Icon Block -->
          <div class="flex" >
            <!-- Icon -->
            <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="flex-shrink-0 mt-1 w-10 h-10 text-orange-600 " viewBox="0 0 16 16">
                <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                <path
                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
              </svg>
            </span>
            <div class="ml-5 sm:ml-8">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                Consulta Inicial
              </h3>
              <p class="mt-1 text-gray-600">


                El primer paso para contratar nuestros servicios es <strong>agendar una consulta inicial con uno de
                  nuestros expertos contables.</strong> En esta reunión, evaluaremos tus necesidades empresariales,
                responderemos a tus preguntas y te presentaremos un panorama general de cómo podemos ayudarte. Este es un
                excelente momento para que nos hagas todas las preguntas que necesites y para que comprendas el alcance y
                valor que nuestros servicios pueden ofrecer a tu negocio. No hay ningún compromiso en esta etapa; es una
                oportunidad para que ambas partes evalúen si somos el ajuste adecuado. </p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class="flex" >
            <!-- Icon -->
            <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] ">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="flex-shrink-0 mt-1 w-10 h-10 text-orange-600" viewBox="0 0 16 16">
                <path
                  d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
                <path
                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
              </svg>
            </span>
            <div class="ml-5 sm:ml-8">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                Revisión y Personalización de Servicios
              </h3>
              <p class="mt-1 text-gray-600">
                Una vez que hayas tenido la consulta inicial y decidas continuar con nosotros, procederemos a la etapa de
                revisión y personalización de servicios. En este punto, te asignaremos un asesor contable especializado
                que realizará un análisis más detallado de tu situación financiera y necesidades contables. Con base en
                este análisis, personalizaremos un paquete de servicios que aborde tus objetivos y requisitos específicos.
                También te presentaremos un desglose detallado de los costos, para que sepas exactamente lo que estás
                obteniendo.
              </p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class="flex" >
            <!-- Icon -->
            <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="flex-shrink-0 mt-1 w-10 h-10 text-orange-600" viewBox="0 0 16 16">
                <path
                  d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
                <path
                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
              </svg>
            </span>
            <div class="ml-5 sm:ml-8">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                Formalización del Contrato y Onboarding
              </h3>
              <p class="mt-1 text-gray-600">
                El último paso es la formalización del contrato y el proceso de onboarding. Una vez que ambos lados estén
                satisfechos con el alcance del servicio y los términos financieros, procederemos a la firma de un contrato
                que detalla las responsabilidades y expectativas de ambas partes. Después de formalizar el contrato
                iniciaremos el proceso de integración de nuestros servicios con tus procesos existentes, asegurándonos de
                que la transición sea lo más suave posible.
              </p>
            </div>
          </div>
        <!-- End Icon Block -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Icon Blocks -->
</div>
</template>

<script>
export default {
  data() {
    return {
      showcontent: false,
    };
  },
};
</script>