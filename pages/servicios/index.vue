<template>
  <div>
      <!-- Slider inicio Servicios -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <!-- Grid -->
          <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
              <div>
                  <img src="https://dummyimage.com/580x410/eee/aaa" alt="Image Description">
                
              </div>
              <!-- End Col -->

              <div class="mt-5 sm:mt-10 lg:mt-0">
                  <div class="space-y-6 sm:space-y-8">
                      <!-- Title -->
                      <div class="space-y-2 md:space-y-4">
                          <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                              Servicios Contabilidad
                          </h2>
                          <!-- Título principal de la sección -->
                          <p class="text-gray-500">
                              Situados estratégicamente en San Vicente de Tagua Tagua, un epicentro clave en la Región de O'Higgins para los sectores de la agroindustria y la agricultura en Chile, brindamos una amplia variedad de servicios contables y financieros especializados.
                              <strong>Nuestra oferta incluye Contabilidad Financiera, Asesoría Tributaria según la Ley de Impuesto a la Renta de Chile, y Auditoría</strong>, así como nichos más focalizados como Evaluación Financiera y Consultoría en Fusiones y Adquisiciones.
                          </p>
                          <!-- Descripción de los servicios de contabilidad ofrecidos -->
                          <p class="text-gray-500">
                              Gracias a nuestra profunda comprensión del entorno económico regional, estamos altamente capacitados para proporcionar soluciones a medida para negocios en áreas como la agricultura, la viticultura, la agroindustria, y también para el comercio local y diversos servicios.
                          </p>
                          <!-- Más información sobre los servicios y el enfoque de la empresa -->
                      </div>
                      <!-- End Title -->
                  </div>
              </div>
              <!-- End Col -->
          </div>
          <!-- End Grid -->
      </div>
      <!-- Slider inicio Servicios -->

      <!-- Llamada a componentes personalizados (Allservices, Contract, Clients) -->
      <Allservices/>

      <Contract/>
      
      <Clients/>

  </div>
</template>

<script>
export default {
  layout: 'default',
  // SEO (Optimización para motores de búsqueda)
  head() {
      return {
          title: "Servicios Contables | San Vicente de Tagua Tagua",
          meta: [
              {
                  hid: "description",
                  name: "description",
                  content: "oo",
              },
              {
                  hid: "keywords",
                  name: "keywords",
                  content: "sss",
              },
          ],
      };
  },
}
</script>
