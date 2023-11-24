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

//coge lel slug de la url y lo busca en la api de wordpress




    async asyncData({ $axios, params }) {
      try {
        const slug = params.slug;
        const response = await $axios.$get(`https://blog.contabilidadsanvicente.cl/wp-json/wp/v2/posts?slug=${params.slug}`);

        const post = response.length > 0 ? response[0] : null;
  
        if (!post) {
          throw new Error('Post not found');
        }
  
        return { post };
      } catch (error) {
        console.error(error);
        throw new Error('La publicación no pudo ser cargada');
      }
    }
  }
  </script>
  