<template>
  <div>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="py-10 text-center">
          <!-- Título de la sección -->
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Publicaciones Recientes</h2>
          <p class="text-gray-500 text-xl text-center">Explora las últimas publicaciones de nuestro blog.</p>
      </div>
      <!-- Contenedor de publicaciones -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Bucle para cada publicación -->
          <a :href="`https://blog.contabilidadsanvicente.cl/${post.slug}`" target="_blank"
             class="group trick overflow-hidden border px-4" v-for="post in posts" :key="post.id">
              <div class="mt-7">
                  <!-- Título de la publicación -->
                  <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                      {{ post.title.rendered }}
                  </h3>
                  <!-- Fecha de la publicación -->
                  <p class="text-gray-500">{{ post.date | formatDate }}</p>
                  <!-- Extracto de la publicación -->
                  <div class="mt-3 text-gray-800" v-html="post.excerpt.rendered"></div>
                  <!-- Enlace para ver más -->
                  <span class="mt-5 inline-flex items-center gap-x-1.5 links-cards decoration-2 font-medium text-orange-600">
                      Ver más
                      <!-- Icono aquí -->
                  </span>
              </div>
          </a>
      </div>

      <div>
      <a href="https://blog.contabilidadsanvicente.cl/" 
                class="my-1 mr-4  mt-5 inline-block bg-orange-600 py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 hover:text-primary md:px-9 lg:px-6 xl:px-9">
               Visitar Blog
              </a>
            </div>
  </div>
      <!-- Componente de llamada a la acción para oficina virtual -->
      <OfficeCallToAction />

      <!-- Componente de clientes del sitio -->
      <SiteClients />

</div>
</template>

<script>
export default {
    data() {
        return {
            posts: [] // Inicializa el arreglo de publicaciones
        }
    },
    async mounted() {
        try {
            // Obtención de las publicaciones del blog
            const res = await this.$axios.$get('https://blog.contabilidadsanvicente.cl/wp-json/wp/v2/posts')
            this.posts = res
                .slice(0, 6) // Limita el número de publicaciones a 6
                .sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordena los posts por fecha descendente
        } catch (error) {
            console.error('Error al recuperar las publicaciones:', error)
        }
    },
    filters: {
        formatDate(value) {
            if (value) {
                // Formato de la fecha CL
                return new Date(value).toLocaleDateString('es-CL');
            }
        }
    },

  // Configuración de etiquetas meta para SEO
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
    };
  },
}
</script>
