<template>
  <section class="bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="mx-auto max-w-screen-md text-center mb-12 lg:mb-16">
        <h2 class="mb-4 text-4xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
          Planes de Contabilidad Mensual
        </h2>
      </div>

      <div class="lg:grid-cols-3 space-y-8 lg:space-y-0 lg:grid sm:gap-8 xl:gap-12">
        <div v-for="plan in planes" :key="plan.id"
          class="flex flex-col p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-2xl border border-gray-200 bg-white">
          <h3 class="mb-4 text-2xl font-bold text-gray-800">{{ plan.nombre }}</h3>
          <p class="font-medium text-gray-500 mb-6">
            {{ plan.descripcion }}
          </p>

          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              {{ plan.precio }}
            </span>
            <span class="text-gray-500 font-medium">/mes</span>
          </div>

          <ul role="list" class="mb-8 space-y-4 text-left">
            <li v-for="caracteristica in plan.caracteristicas" :key="caracteristica" 
              class="flex items-center space-x-3 text-gray-600">
              <SiteCheck class="text-emerald-500 w-5 h-5" />
              <span class="font-medium">{{ caracteristica }}</span>
            </li>
          </ul>

          <button class="mt-auto py-3 px-6  font-semibold text-white transition-all duration-300
            bg-blue-950 hover:from-gray-800 hover:to-gray-950">
            Seleccionar Plan
          </button>
        </div>
      </div>

      <p class="text-sm text-gray-500 pt-8 text-center max-w-3xl mx-auto">
        * Los precios indicados corresponden exclusivamente al servicio de
        contabilidad y no incluyen declaración de renta, remuneraciones, u otros costos adicionales.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      planes: [
        {
          id: 1,
          nombre: 'Esencial',
          descripcion: 'La mejor opción para pequeños negocios.',
          precio: '$ 79.900',
          caracteristicas: ['Hasta 200 Documentos tributarios.', 'Declaración mensual de impuestos F29.','Registros contables asociados al regimen tributario.']
         
        },
        {
          id: 2,
          nombre: 'Standard',
          descripcion: 'Recomendado para la mayoría de empresas.',
          precio: '$ 149.900',
          caracteristicas: ['Hasta 350 Documentos tributarios.', 'Declaración mensual de impuestos F29.', 'Informes de movimientos Bancarios.','Registros contables  asociados al regimen tributario.']
        },
        {
          id: 3,
          nombre: 'Avanzado',
          descripcion: 'Recomendado para medianas y grandes empresas.',
          precio: 'Desde $ 399.900 ',
          caracteristicas: ['Cantidad de Documentos tributarios a convenir.', 'Declaración mensual de impuestos F29.','Registros contables asociados al regimen tributario.', 'Informes de Venta.', 'Documentación Online.', 'Asesoría contable permantente.','Entre otros por acordar.']
        },
      ]
    }
  }
}
</script>
