<template>
  <article class="prose lg:prose-xl">
    <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
    <div class="text-gray-600 mb-8">
      {{ formatDate(article.date) }}
      <span v-if="article.author"> · {{ article.author }}</span>
    </div>
   
    <nuxt-content :document="article" class="prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:list-disc prose-ol:list-decimal" />
  </article>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
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
      title: this.article?.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article?.description || ''
        }
      ]
    }
  }
}
</script>

<style>
.nuxt-content h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}
.nuxt-content h3 {
  @apply text-xl font-bold mt-6 mb-3;
}
.nuxt-content p {
  @apply mb-4;
}
.nuxt-content ul {
  @apply mb-4 ml-6;
}
.nuxt-content ol {
  @apply mb-4 ml-6;
}
</style>