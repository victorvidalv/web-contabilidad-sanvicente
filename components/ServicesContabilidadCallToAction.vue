<template>
  <section class="bg-white">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <!--  -->
        <h2 class="mb-4 text-4xl font-extrabold text-gray-600">
          Planes de Contabilidad Mensual
        </h2>
      </div>
      <!--  -->
      <div class="lg:grid-cols-3 space-y-8 lg:space-y-0 lg:grid sm:gap-6 xl:gap-10">
        <!--  -->
        <div v-for="plan in planes" :key="plan.id"
          class="flex flex-col p-6 max-w-lg mx-auto text-center border border-gray-300 text-gray-600 bg-white xl:p-8">
          <!--  -->
          <h3 class="mb-4 text-2xl font-semibold">{{ plan.nombre }}</h3>
          <p class="font-light text-gray-600 sm:text-lg">
            {{ plan.descripcion }}
          </p>
          <!--  -->
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-4xl font-extrabold">
              {{ plan.precio }} 
            </span>
            <span class="text-gray-600">/mes</span>
          </div>
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li v-for="caracteristica in plan.caracteristicas" :key="caracteristica" class="flex items-center space-x-3">
              <SiteCheck /><span>{{ caracteristica }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <p class="text-sm text-gray-600 pt-5">
        * Los precios indicados corresponden exclusivamente al servicio de
        contabilidad y no incluyen declaración de renta,  remuneraciones, u otros costos adicionales.
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
          caracteristicas: ['Hasta 200 Documentos tributarios', 'Declaración mensual de impuestos F29']
        },
        {
          id: 2,
          nombre: 'Standard',
          descripcion: 'Recomendado para la mayoría de empresas.',
          precio: '$ 149.900',
          caracteristicas: ['Hasta 350 Documentos tributarios', 'Declaración mensual de impuestos F29', 'Informes de movimientos Bancarios']
        },
        {
          id: 3,
          nombre: 'Avanzado',
          descripcion: 'Recomendado para medianas y grandes empresas.',
          precio: 'Desde $ 399.900 ',
          caracteristicas: ['Cantidad de Documentos tributarios a convenir', 'Declaración mensual de impuestos F29', 'Informes de Venta', 'Documentación Online', 'Asesoría contable permantente','Entre otros por acordar']
        },
      ]
    }
  }
}
</script>
