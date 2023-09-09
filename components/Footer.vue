<template>
<div>

  <footer class="border-t" >
 
  <div class="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    <!-- Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div class="col-span-full lg:col-span-1">
        <span  aria-label="Brand"><Logo/></span>
      </div>
      <!-- End Col -->

      <div class="col-span-1">
        <h4 class="font-semibold ">Servicios </h4>

        <div class="mt-3 grid space-y-3">
          <p><nuxt-link to="/servicios/contabilidad" class="inline-flex gap-x-2 text-blue-500" >Contabilidad </nuxt-link></p>
          <p><nuxt-link to="/servicios/creacion-cierre-empresas" class="inline-flex gap-x-2 text-blue-500" >Creación Empresas</nuxt-link></p>
          <p><nuxt-link to="/servicios/asesoria-tributaria" class="inline-flex gap-x-2 text-blue-500" >Asesoría Tributaria</nuxt-link></p>
          <p><nuxt-link to="/servicios" class="font-semibold inline-flex gap-x-2 text-blue-500" >Ver Todos</nuxt-link></p>
        </div>
      </div>
      <!-- End Col -->

      <div class="col-span-1">
        <h4 class="font-semibold">Empresa</h4>

        <div class="mt-3 grid space-y-3">
          <p><nuxt-link to="/nosotros" class="inline-flex gap-x-2 text-blue-500" >Nosotros</nuxt-link></p>
          <p><nuxt-link to="/herramientas" class="inline-flex gap-x-2 text-blue-500 p-1 border" >Herramientas
            
            
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
</svg></nuxt-link> </p>
          <p><nuxt-link to="/terminos-condiciones" class="inline-flex gap-x-2 text-blue-500" >Términos y Condiciones</nuxt-link> </p>
          <p><nuxt-link to="/politica-privacidad" class="inline-flex gap-x-2 text-blue-500" >Politica de Privacidad</nuxt-link> </p>
    
       
        </div>
      </div>
      <!-- End Col -->

      <div class="col-span-2">
        <h4 class="font-semibold">Contabilidad San Vicente</h4>

        <p class="text-2xl">"En San Vicente de Tagua Tagua y alrededores, somos su aliado indispensable para navegar el complejo mundo de la contabilidad"
        </p>



      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->

    <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <p class="text-sm ">© 2023 Contabilidad San Vicente. Todos los Derechos Reservados.</p>
      </div>
      <!-- End Col -->

     
    </div>
  </div>
</footer>

<div class="footerend"></div>
</div>
</template>
<style scoped>

.text-blue-500  {
    color: #F25022 !important;
  }


  .border {
    border: 2px solid #F25022 !important;
  }

  .footerend {
    height: 10px;
    background-color: #F25022 !important;
  }
  </style>