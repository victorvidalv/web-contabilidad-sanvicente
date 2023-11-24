<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="py-10 text-center">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Publicaciones Recientes</h2>
            <p class="text-gray-500 text-xl text-center">Explora las últimas publicaciones de nuestro blog.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <nuxt-link :to="`/blog/${post.url}`" class="group trick overflow-hidden border px-4" 
                v-for="post in posts" :key="post.url">
                <div class="mt-7">
                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                        {{ post.title }}
                    </h3>
                    <p class="mt-3 text-gray-800">
                        {{ post.description }}...
                    </p>
                    <span class="mt-5 inline-flex items-center gap-x-1.5 links-cards decoration-2 font-medium text-orange-600">
                        Ver más
                        <!-- Icono aquí -->
                    </span>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: []
        }
    },
    async mounted() {
        const res = await this.$axios.$get('/api/articles')
        this.posts = res.slice(0, 9) // Limita el número de publicaciones, por ejemplo a 9
    }
}
</script>
