<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Nuestros Valores Fundamentales
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          En Contabilidad San Vicente, nuestros valores son el pilar fundamental que guía cada una de nuestras acciones y servicios.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="text-primary-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Integridad</h3>
          <p class="text-gray-600">
            Actuamos con honestidad y transparencia en cada servicio que ofrecemos, manteniendo los más altos estándares éticos en nuestra práctica profesional.
          </p>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="text-primary-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Excelencia</h3>
          <p class="text-gray-600">
            Nos esforzamos constantemente por superar las expectativas, proporcionando servicios de la más alta calidad y manteniéndonos actualizados con las últimas normativas contables.
          </p>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
          <div class="text-primary-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Compromiso</h3>
          <p class="text-gray-600">
            Nos dedicamos plenamente al éxito de nuestros clientes, estableciendo relaciones duraderas basadas en la confianza y el servicio personalizado.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SiteValues'
}
</script>