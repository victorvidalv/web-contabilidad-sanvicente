<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="py-10 text-center">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight" v-html="post.title.rendered"></h2>
        <div class="text-gray-500 text-xl" v-html="post.content.rendered"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios, params }) {
      try {
        const post = await $axios.$get(`https://blog.contabilidadsanvicente.cl/wp-json/wp/v2/posts/${params.id}`)
        return { post }
      } catch (error) {
        // Manejar el error como prefieras, por ejemplo, redirigir a una página de error personalizada
        console.error(error);
        throw new Error('La publicación no pudo ser cargada');
      }
    }
  }
  </script>
  