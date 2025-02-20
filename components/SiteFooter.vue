<template>
  <div class="mainfooter bg-gray-50">
    <!-- Call to action mejorado -->
    <div class="call-to-action text-center py-10 bg-[#eeeeee]">
      <a href="tel:+56722746337" class="inline-block text-2xl font-bold px-8 py-4 text-blue-950 rounded-lg hover:bg-gray-100 transition duration-300">
        Contáctenos al: +56 72 2746337
      </a>
    </div>

    <footer class="border-t">
      <div class="max-w-[85rem] py-16 px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <!-- Columna Servicios -->
          <div>
            <h4 class="font-bold text-gray-800 text-lg mb-6">Servicios</h4>
            <nav class="flex flex-col space-y-4">
              <nuxt-link to="/servicios/contabilidad/" class="text-gray-600 hover:text-blue-950 transition duration-300">Contabilidad</nuxt-link>
              <nuxt-link to="/servicios/creacion-cierre-empresas/" class="text-gray-600 hover:text-blue-950 transition duration-300">Creación Empresas</nuxt-link>
              <nuxt-link to="/servicios/asesoria-tributaria/" class="text-gray-600 hover:text-blue-950 transition duration-300">Asesoría Tributaria</nuxt-link>
              <nuxt-link to="/servicios/" class="font-semibold text-blue-950 hover:text-blue-800 transition duration-300">Ver Todos →</nuxt-link>
            </nav>
          </div>

          <!-- Columna Empresa -->
          <div>
            <h4 class="font-bold text-gray-800 text-lg mb-6">Empresa</h4>
            <nav class="flex flex-col space-y-4">
              <nuxt-link to="/nosotros/" class="text-gray-600 hover:text-blue-950 transition duration-300">Nosotros</nuxt-link>
              <nuxt-link to="/herramientas/" class="inline-flex items-center gap-2 text-gray-600 hover:text-blue-950 px-4 py-2 bg-gray-100 rounded-lg transition duration-300 w-fit">
                Herramientas
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                </svg>
              </nuxt-link>
              <nuxt-link to="/terminos-condiciones/" class="text-gray-600 hover:text-blue-950 transition duration-300">Términos y Condiciones</nuxt-link>
              <nuxt-link to="/politica-privacidad/" class="text-gray-600 hover:text-blue-950 transition duration-300">Política de Privacidad</nuxt-link>
            </nav>
          </div>

          <!-- Columna Descripción -->
          <div class="md:col-span-2">
            <h4 class="font-bold text-gray-800 text-lg mb-6">Contabilidad San Vicente</h4>
            <p class="text-xl leading-relaxed text-gray-700">"En San Vicente de Tagua Tagua y alrededores, somos su aliado indispensable para navegar el complejo mundo de la contabilidad"</p>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-16 pt-8 border-t border-gray-200">
          <p class="text-sm text-gray-500 text-center">© 2025 Contabilidad San Vicente. Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
