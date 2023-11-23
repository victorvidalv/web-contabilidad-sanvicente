<template>
    <!-- Team -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Titulo -->

        <div class="py-10 text-center">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Nuestro equipo</h2>
            <p class="mt-1 text-gray-600 text-xl text-center">Nuestra diversidad de talento nos habilita para ir más allá
                de los servicios contables tradicionales.</p>
        </div>
        <!-- Fin Titulo -->

        <!-- Grid Team -->
        <!-- Grid Team con 3 columnas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <!-- Contenedor adicional para cada persona -->
            <div v-for="(persona, index) in equipo" :key="index">
                <div class="flex flex-col p-4 md:p-6 bg-white border border-gray-200">
                    <div class="flex">
                        <!-- Contenedor de imagen -->
                        <div class="w-1/3">
                            <img class="w-full h-full object-cover" :src="persona.imagen" :alt="persona.nombre">
                        </div>
                        <!-- Contenedor de nombre y título -->
                        <div class="w-2/3 pl-4">
                            <h3 class="font-medium text-gray-800">{{ persona.nombre }}</h3>
                            <p class="text-xs uppercase text-gray-500">{{ persona.titulo }}<p class="mt-3 text-gray-500">{{ persona.descripcion }}</p>
                        </div>
                    </div>
                    <!-- Descripción -->
                </div>
            </div>
            <!-- Fin de Contenedor adicional -->
        </div>
        <!-- Fin Grid Team con 3 columnas -->
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
                    descripcion: 'Es quien lidera nuestro equipo con un enfoque multidisciplinario, combinando su formación en ingeniería de administración y contabilidad. ',
                    imagen: 'https://dummyimage.com/100x100/e5e7eb/aaa'
                },
                {
                    nombre: 'Erick Herrera',
                    titulo: 'Ing. de Sistemas / Especialista Digital',
                    descripcion: 'Es nuestro experto en tecnología, especializado en soluciones digitales que optimizan los procesos contables y empresariales.',
                    imagen: 'https://dummyimage.com/100x100/e5e7eb/aaa'
                },
                {
                    nombre: 'Víctor Vidal',
                    titulo: 'Ing. Comercial / Analista Financiero',
                    descripcion: 'Brinda su experiencia en análisis financiero para fortalecer la rentabilidad y viabilidad de nuestros proyectos.',
                    imagen: 'https://dummyimage.com/100x100/e5e7eb/aaa'
                },
                {
                    nombre: 'Carmen Urbina',
                    titulo: 'Contadora / Especialista Tributaria',
                    descripcion: 'Se especializa en el ámbito tributario, garantizando que nuestras operaciones estén en total conformidad con las regulaciones fiscales. ',
                    imagen: 'https://dummyimage.com/100x100/e5e7eb/aaa'
                },
                {
                    nombre: 'Bernardino Silva',
                    titulo: 'Contador / Especialista Laboral',
                    descripcion: 'Es nuestro destacado experto en asuntos laborales, con una vasta experiencia y conocimientos profundos en el campo. Maneja con maestría desde la compleja gestión de remuneraciones, pasando por la administración de beneficios, hasta llegar a las relaciones laborales. Su habilidad para navegar por la normativa laboral, especialmente en el contexto chileno, y su capacidad para resolver conflictos y asegurar un ambiente laboral armonioso, lo han convertido en una pieza esencial en nuestro equipo.  ',
                    imagen: 'bernardino_s.webp'
                },

                {
                    nombre: 'Camila Flores',
                    titulo: 'Contadora / Especialista Cumplimiento Fiscal',
                    descripcion: 'Es la encargada de asegurar que nuestra empresa y nuestros clientes cumplan con todas las obligaciones fiscales. ',
                    imagen: 'denisse_p.webp'
                },
            ]

        }

    }
}
</script>
