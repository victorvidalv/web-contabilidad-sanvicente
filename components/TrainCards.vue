<template>
    <!-- Componente-->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Título -->
        <div class="py-10 text-center">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Capacitación Online</h2>
            <!-- Descripción general de los capacitacion -->
            <p class="text-gray-500 text-xl text-center">Potencie su negocio y cumpla con la normativa vigente a través de
                nuestros programas de capacitación.</p>
        </div>
        <!-- Fin Título -->

        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- INICIO BUCLE capacitacion -->
            <nuxt-link :to="service.url" class="group overflow-hidden border px-4" v-for="service in capacitacion"
                :key="service">
                <div class="mt-7">
                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                        {{ service.name }}
                    </h3>
                    <!-- Nombre del servicio -->
                    <p class="mt-3 text-gray-800 ">
                        {{ service.description }}
                    </p>
                    <!-- Descripción del servicio -->
                    <span
                        class="mt-5 inline-flex items-center gap-x-1.5 links-cards decoration-2 font-medium text-orange-600">
                        Ver más
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                            <path fill-rule="evenodd"
                                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                        <!-- Icono y texto "Ver más" -->
                    </span>
                </div>
            </nuxt-link>
            <!-- FIN BUCLE capacitacion -->
        </div>
        <!-- Fin Grid -->
    </div>
    <!-- Fin Card Blog -->
</template>

<script>
export default {
    data() {
        return {
            capacitacion: ''
        }
    },
    async mounted() {
        const res = await fetch('datos.json') //lee la info desde datos.json
        const datos = await res.json()
        this.capacitacion = datos.capacitacion
    }
}
</script>