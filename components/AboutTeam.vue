<template>
    <!-- Team -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Titulo -->

<div class="py-10 text-center">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Nuestro equipo</h2>
        <p class="mt-1 text-gray-600 text-xl text-center ">Equipo multidisciplinario de profesionales  en áreas contables, comerciales e informáticas. <strong> Esta diversidad de talento nos habilita para ir más allá de los servicios contables tradicionales.</strong></p>
</div>
  <!-- Fin Titulo -->

  <!-- Grid Team -->
  <!-- Grid Team con 3 columnas -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      <!-- Contenedor adicional para cada persona -->
      <div v-for="(persona, index) in equipo" :key="index">
        <div class="flex flex-col p-4 md:p-6 bg-white border border-gray-200">
          <div class="flex items-center gap-x-4">
            <img class="w-25 h-25" :src="persona.imagen" alt="Imagen Descripción">
            <div class="grow">
              <h3 class="font-medium text-gray-800">{{ persona.nombre }}</h3>
              <p class="text-xs uppercase text-gray-500">{{ persona.titulo }}</p>
            </div>
          </div>
          <p class="mt-3 text-gray-500">{{ persona.descripcion }}</p>
        </div>
      </div>
      <!-- Fin de Contenedor adicional -->
    </div>
    <!-- Fin Grid Team con 3 columnas -->
  
  </div>

</div>
<!-- Fin Team -->
</template>

<script>

export default {
    data() {
        return {
            equipo: [
                {
                    nombre: 'Vanessa Peralta',
                    titulo: 'Ing. Administración y Contadora / Directora',
                    descripcion: 'Es quien lidera nuestro equipo con un enfoque multidisciplinario, combinando su formación en ingeniería de administración y contabilidad. Su visión estratégica y habilidades analíticas aseguran una gestión eficiente y el cumplimiento fiscal en cada proyecto.',
                    imagen: 'https://dummyimage.com/100x100/eee/aaa'
                },
                {
                    nombre: 'Erick Herrera',
                    titulo: 'Ing. de Sistemas / Especialista Digital',
                    descripcion: 'Es nuestro experto en tecnología, especializado en soluciones digitales que optimizan los procesos contables y empresariales. Con un fuerte enfoque en la innovación, Erick transforma la manera en que interactuamos con la tecnología.',
                    imagen: 'https://dummyimage.com/100x100/eee/aaa'
                },
                {
                    nombre: 'Víctor Vidal',
                    titulo: 'Ing. Comercial / Analista Financiero',
                    descripcion: 'Brinda su experiencia en análisis financiero para fortalecer la rentabilidad y viabilidad de nuestros proyectos. Su formación en ingeniería comercial le permite integrar estrategias de mercado con sólidos análisis financieros.',
                    imagen: 'https://dummyimage.com/100x100/eee/aaa'
                },
                {
                    nombre: 'Carmen Urbina',
                    titulo: 'Contadora / Especialista Tributaria',
                    descripcion: 'Se especializa en el ámbito tributario, garantizando que nuestras operaciones estén en total conformidad con las regulaciones fiscales. Su meticulosa atención al detalle es invaluable para la planificación y cumplimiento tributario.',
                    imagen: 'https://dummyimage.com/100x100/eee/aaa'
                },
                {
                    nombre: 'Bernardino Silva',
                    titulo: 'Contador / Especialista Laboral',
                    descripcion: 'Es nuestro experto en asuntos laborales, desde la gestión de remuneraciones hasta relaciones laborales. Su enfoque garantiza que las prácticas de la empresa sean justass y estén en línea con la legislación laboral.',
                    imagen: 'https://dummyimage.com/100x100/eee/aaa'
                },

                {
                    nombre: 'Camila Flores',
                    titulo: 'Contadora / Especialista Cumplimiento Fiscal',
                    descripcion: 'Es la encargada de asegurar que nuestra empresa y nuestros clientes cumplan con todas las obligaciones fiscales. Su conocimiento profundo en la materia nos permite navegar con seguridad en el entorno fiscal.',
                    imagen: 'https://dummyimage.com/100x100/eee/aaa'
                },
            ]

        }

    }
}
</script>
