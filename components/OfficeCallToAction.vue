<template>
  <!-- Contenedor principal del componente -->
  <section class="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-8 mx-auto">
    <div class="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-2 lg:py-6 mx-auto bg-gray-100">
      <!-- Div contenedor con estilos de fondo y padding -->
      <div class="relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
        <!-- Flex container para los elementos internos -->
        <div class="-mx-4 flex flex-wrap items-center">
          <!-- Contenedor izquierdo con títulos -->
          <div class="w-full px-4 lg:w-1/2">
            <span class="mb-2 text-base font-semibold text-gray-600">
              <!-- Título pequeño -->
           Dirección Tributaria y Comercial ONLINE
            </span>
            <h2 class="mb-6 text-3xl font-bold leading-tight text-gray-600 sm:mb-8 lg:mb-0">
              <!-- Título principal -->
              <span class="xs:block">Domicilio tributario y comercial válido ante el SII para que pueda emitir sus facturas </span>
            </h2>
          </div>
          <!-- Contenedor derecho con botones -->
          <div class="w-full px-4 lg:w-1/2">
            <div class="flex flex-wrap lg:justify-end">
              <!-- Botón para conocer más detalles -->
              <nuxt-link to="/oficina-virtual"
                class="my-1 mr-4 inline-block bg-orange-600 py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 hover:text-primary md:px-9 lg:px-6 xl:px-9">
                Conocer más detalles
              </nuxt-link>
              <!-- Botón para contactar -->
              <nuxt-link to="contacto"
                class="my-1 inline-block rounded py-4 px-6 text-base font-medium text-gray-600 transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9 border bg-blue-950 text-white">
                Contactar Ahora
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- Contenedor para elementos absolutos -->
        <div>
          <span class="absolute top-0 left-0 z-[-1]"></span>
          <span class="absolute bottom-0 right-0 z-[-1]"></span>
        </div>
      </div>
    </div>
  </section>
</template>