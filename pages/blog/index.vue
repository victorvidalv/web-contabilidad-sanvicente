<template>
  <div>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="py-10 text-center">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Publicaciones Recientes</h2>
        <p class="text-gray-500 text-xl text-center">Explora las últimas publicaciones de nuestro blog.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <nuxt-link
          v-for="article in articles"
          :key="article.slug"
          :to="`/blog/content/${article.slug}`"
          class="group trick overflow-hidden border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 px-4"
        >
          <div class="mt-7 pb-7">
            <img v-if="article.image" :src="article.image" :alt="article.title" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
              {{ article.title }}
            </h3>
            <p class="text-gray-500 mt-2">{{ formatDate(article.date) }}</p>
            <div class="mt-3 text-gray-600 line-clamp-3">{{ article.description }}</div>
            <span class="mt-4 inline-flex items-center gap-x-1.5 links-cards decoration-2 font-medium text-orange-600">
              Leer más
              <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <OfficeCallToAction />
    <SiteClients />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'slug', 'date', 'image'])
      .sortBy('date', 'desc')
      .fetch()

    return { articles }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('es-CL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  head() {
    return {
      title: "Blog de Actualidad Contable y Tributaria | Contabilidad San Vicente",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Manténgase informado sobre las últimas actualizaciones en contabilidad, tributación y normativas financieras. Artículos especializados por expertos contables de San Vicente.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "blog contable, noticias tributarias, actualidad financiera, normativa contable, asesoría tributaria, artículos especializados, contabilidad san vicente",
        },
      ],
    }
  },
}
</script>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
