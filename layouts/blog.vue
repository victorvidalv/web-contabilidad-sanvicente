<template>
  <div>
    <SiteMenu />
    
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contenido principal -->
        <div class="lg:col-span-2">
          <Nuxt />
        </div>
        
        <!-- Barra lateral -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Artículos Recientes</h3>
            <ul class="space-y-4">
              <li v-for="post in recentPosts" :key="post.slug" class="border-b border-gray-200 pb-4 last:border-b-0">
                <NuxtLink 
                  :to="`/blog/content/${post.slug}`"
                  class="text-gray-700 hover:text-orange-600 font-medium">
                  {{ post.title }}
                </NuxtLink>
                <p class="text-sm text-gray-500 mt-1">{{ formatDate(post.date) }}</p>
              </li>
            </ul>

            <div class="mt-8">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Enlaces Útiles</h3>
              <ul class="space-y-3">
                <li>
                  <NuxtLink to="/servicios" class="text-orange-600 hover:underline">
                    Nuestros Servicios
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/herramientas" class="text-orange-600 hover:underline">
                    Herramientas
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contacto" class="text-orange-600 hover:underline">
                    Contacto
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="mt-8 bg-gray-100 p-4 rounded-lg">
              <h3 class="text-lg font-bold text-gray-800 mb-3">¿Necesitas ayuda?</h3>
              <p class="text-gray-600 mb-4">Contáctanos para una asesoría personalizada</p>
              <NuxtLink 
                to="/contacto"
                class="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition">
                Contactar
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentPosts: []
    }
  },
  async fetch() {
    this.recentPosts = await this.$content('blog')
      .only(['title', 'slug', 'date'])
      .sortBy('date', 'desc')
      .limit(5)
      .fetch()
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('es-CL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>