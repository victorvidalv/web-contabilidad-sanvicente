<template>
    <section class="max-w-[85rem] px-4 py-20 mx-auto" aria-labelledby="services-title">
        <div class="py-16 text-center">
            <h1 id="services-title" class="text-4xl font-bold md:text-5xl lg:text-6xl md:leading-tight mb-6 text-gray-900">
                Soluciones Contables Estratégicas
            </h1>
            <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed tracking-normal">
                Transformamos su gestión financiera con servicios contables de alto nivel.
                Combinamos experiencia profesional y tecnología avanzada para maximizar su éxito empresarial.
            </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <nuxt-link
                :to="service.url"
                class="group block rounded-xl border border-gray-100 hover:border-gray-300 transition-all duration-300 p-6 md:p-8 lg:p-10"
                v-for="service in servicios"
                :key="service.name"
            >
                <article class="flex flex-col h-full">
                    <div class="mb-4 md:mb-6">
                        <i :class="service.icon" class="text-3xl text-orange-600 group-hover:text-orange-700 transition-colors"></i>
                    </div>
                    <h2 class="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-gray-700 mb-3 md:mb-4 leading-snug">
                        {{ service.name }}
                    </h2>
                    <p class="text-base md:text-lg text-gray-600 mb-6 flex-grow leading-relaxed">
                        {{ service.description }}
                    </p>
                    <div class="flex items-center text-orange-600 font-medium group-hover:text-orange-700">
                        <span class="text-base">Conocer más</span>
                        <i class="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                    </div>
                </article>
            </nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            servicios: ''
        }
    },
    async mounted() {
        try {
            const res = await fetch('datos.json')
            const datos = await res.json()
            this.servicios = datos.servicios
        } catch (error) {
            console.error('Error al cargar los servicios:', error)
        }
    }
}
</script>
