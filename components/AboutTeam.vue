<template>
    <!-- Team -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Titulo -->
        <div class="py-12 text-center">
            <h2 class="text-3xl font-bold md:text-5xl md:leading-tight text-gray-900">Equipo de Expertos en Contabilidad y Asesoría Tributaria en San Vicente</h2>
            <p class="mt-4 text-gray-600 text-xl text-center max-w-3xl mx-auto leading-relaxed">
                Nuestro equipo de contadores certificados y asesores tributarios brinda servicios especializados en contabilidad, auditoría, planificación fiscal y gestión financiera. Más de 15 años de experiencia sirviendo a empresas agrícolas y PyMEs en la Región de O'Higgins.
            </p>
        </div>
        <!-- Fin Titulo -->

        <!-- Grid Team -->
        <!-- Grid Team con 3 columnas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <!-- Contenedor adicional para cada persona -->
            <div v-for="(persona, index) in equipo" :key="index">
                <div class="flex flex-col p-6 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
                    <div class="flex">
                        <!-- Contenedor de imagen -->
                        <div class="w-1/3">
                            <img class="w-full h-full object-cover" :src="persona.imagen" :alt="persona.nombre">
                        </div>
                        <!-- Contenedor de nombre y título -->
                        <div class="w-2/3 pl-6">
                            <h3 class="text-xl font-semibold text-gray-900">{{ persona.nombre }}</h3>
                            <p class="text-sm font-medium uppercase tracking-wider text-gray-500 mt-1">{{ persona.titulo }}</p>
                            <p class="mt-4 text-gray-600 leading-relaxed text-sm">{{ persona.descripcion }}</p>
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
                    titulo: 'Directora Ejecutiva | Asesora Contable y Tributaria Senior',
                    descripcion: 'Ingeniera Comercial especializada en asesoría contable, tributaria y financiera con más de 15 años liderando proyectos de optimización fiscal y contable. Experta en implementación de sistemas ERP, planificación tributaria estratégica y gestión financiera para empresas agrícolas y PyMEs de la región.',
                    imagen: 'vanessa_peralta.png'
                },
                {
                    nombre: 'Bernardino Silva',
                    titulo: 'Director de Gestión Laboral y Recursos Humanos',
                    descripcion: 'Especialista certificado en legislación laboral chilena y gestión de recursos humanos con 12 años de experiencia. Experto en cumplimiento normativo, contratos laborales agrícolas, remuneraciones y asesoría en relaciones laborales para el sector agroindustrial.',
                    imagen: 'bernardino_silva.png'
                },
                {
                    nombre: 'Denisse Palma',
                    titulo: 'Directora de Análisis Financiero y Contabilidad IFRS',
                    descripcion: 'Contadora auditora especializada en normas IFRS, análisis financiero avanzado y gestión de costos para el sector agrícola. Experta en elaboración de estados financieros, optimización de procesos contables y planificación presupuestaria estratégica.',
                    imagen: 'denisse_palma.png'
                },
                {
                    nombre: 'Carmen Urbina',
                    titulo: 'Directora de Asesoría Tributaria y Planificación Fiscal Estratégica',
                    descripcion: 'Asesora tributaria especializada en IVA agrícola, impuesto a la renta y planificación fiscal para empresas del sector. Experta en declaraciones de impuestos, reorganizaciones empresariales y auditoría tributaria preventiva.',
                    imagen: 'carmen_urbina.png'
                },
                {
                    nombre: 'Camila Flores',
                    titulo: 'Directora de Cumplimiento Tributario y Auditoría Especializada',
                    descripcion: 'Auditora especializada en cumplimiento tributario agrícola, prevención de riesgos fiscales y gestión de procedimientos ante el SII. Experta en due diligence tributario y resolución de controversias fiscales del sector.',
                    imagen: 'camila_flores.png'
                },
            ]

        }

    }
}
</script>
