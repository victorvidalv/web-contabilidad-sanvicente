<template>
  <div>
    <section class="max-w-[85rem] px-4 py-12 mx-auto">
      <!-- Contenedor principal con fondo sutil -->
      <div class="w-full px-8 py-16 bg-[#eeeeee]">
        <!-- Contenedor del contenido con espaciado mejorado -->
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
            <!-- Contenido textual optimizado para SEO -->
            <div class="w-full lg:w-3/5">
              <h2 class="text-4xl font-bold text-gray-800 mb-4">
                Domicilio tributario y Comercial para Empresas en Chile
              </h2>
              <p class="text-xl text-gray-600 leading-relaxed">
                Establezca su dirección tributaria oficial ante el SII. Gestione sus documentos comerciales y tributarios de forma 100% digital.
              </p>
            </div>
            
            <!-- Contenedor de botones con diseño mejorado -->
            <div class="w-full lg:w-2/5">
              <div class="flex flex-col sm:flex-row gap-4">
                <nuxt-link 
                  to="/oficina-virtual/"
                  class="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white text-center font-medium hover:bg-orange-700 transition-colors"
                >
                  Conocer más
                </nuxt-link>
                
                <nuxt-link 
                  to="/contacto/"
                  class="w-full sm:w-auto px-8 py-4 bg-blue-950 text-white text-center font-medium hover:bg-blue-900 transition-colors"
                >
                  Solicitar Información
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">¿Listo para comenzar con tu oficina virtual?</h2>
          <p class="text-gray-600 mb-8">Comienza hoy mismo con nuestro servicio de oficina virtual y dale a tu empresa una dirección profesional.</p>
          <div class="flex flex-col md:flex-row justify-center gap-4">
            <a href="https://forms.gle/wHyYiMHLb5VZ7kaF9" target="_blank" 
               class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Formalizar Contrato
            </a>
            <a href="https://www.tuu.cl/OficinaVirtual" target="_blank"
               class="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              Pagar Oficina Virtual
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>