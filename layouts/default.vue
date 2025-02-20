<template>
  <div class="font-helvetica"> <!-- << Fuente del sitio -->

    <!-- Navbar -->
    <SiteMenu />
    <nav v-if="$route.path !== '/'" class="w-full " aria-label="Breadcrumb">
      <div class="max-w-[85rem] w-full mx-auto px-4 py-2.5">
        <ol class="flex items-center flex-wrap gap-2">
          <li class="flex items-center">
            <NuxtLink to="/" class="text-gray-600 hover:text-blue-950 transition-colors duration-200 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Inicio
            </NuxtLink>
          </li>
          <li v-for="(crumb, index) in $route.path.split('/').filter(Boolean)" :key="index" class="flex items-center">
            <svg class="w-5 h-5 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
            <NuxtLink 
              :to="'/' + $route.path.split('/').filter(Boolean).slice(0, index + 1).join('/')"
              class="text-gray-600 hover:text-blue-950 transition-colors duration-200"
            >
              {{ crumb.charAt(0).toUpperCase() + crumb.slice(1) }}
            </NuxtLink>
          </li>
        </ol>
      </div>
    </nav>
   

    <!--Página actual (se renderiza dinámicamente) -->
    <Nuxt />

    <!-- Pie de página-->
    <WhatsAppButton/>
    <SiteFooter />
    
  </div>
</template>

<script>

export default {
  //Carga diferida (optimizar carga)
  components: {
    SiteFooter: () => import('~/components/SiteFooter.vue'),
  },

  head() {
    return {
      title: this.$route.path === '/' ? 'Contabilidad San Vicente | Expertos Contables en San Vicente de Tagua Tagua' : 'Contabilidad San Vicente',
      
      htmlAttrs: {
        lang: "es",
      },

      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "author",
          name: "author",
          content: "Contabilidad San Vicente",
        },
        {
          hid: "Publisher",
          name: "Publisher",
          content: "Contabilidad San Vicente",
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow",
        },
        {
          hid: "description",
          name: "description",
          content: "Servicios contables profesionales y asesoría tributaria especializada en San Vicente de Tagua Tagua. Optimizamos sus finanzas con soluciones personalizadas y atención experta.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "contabilidad san vicente, asesoría tributaria, servicios contables, san vicente de tagua tagua, contadores expertos, gestión financiera, declaración de impuestos, asesoría empresarial",
        },
      ],

      link: [
        {
          rel: "canonical",
          href: "https://www.contabilidadsanvicente.cl" + this.$route.path,
        },
      ],
    };
  },
};
</script>
