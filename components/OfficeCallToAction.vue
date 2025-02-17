<template>
  <section class="max-w-[85rem] px-4 py-12 mx-auto">
    <!-- Contenedor principal con fondo sutil -->
    <div class="w-full px-8 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
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
</template>