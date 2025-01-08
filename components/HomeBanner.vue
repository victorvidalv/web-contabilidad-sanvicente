<template>
  <!-- Principal -->
  <div class="max-w-[85rem] mx-auto pl-4 sm:pl-6 lg:pl-8 mt-10 bg-gray-100">
    <!-- Cuadrícula -->
    <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
      <div>
        <h1 class="block text-3xl text-gray-600 sm:text-4xl lg:text-6xl lg:leading-tight">
          Contabilidad <span class="text-orange-600">San Vicente</span>
        </h1>
        <p class="mt-3 text-lg text-gray-600">
          Situados en San Vicente de Tagua Tagua, comprendemos
          de manera íntima las necesidades de los sectores agroindustriales y
          agrícolas en la Región de O'Higgins.
        </p>

        <!-- Botones -->
        <div class="mt-7 grid gap-3 w-full sm:inline-flex">
          <nuxt-link to="/servicios/" 
            class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-950 border  text-sm lg:text-base text-white font-medium transition py-3 px-4">
            Conocer Servicios
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </nuxt-link>
          <nuxt-link to="/contacto/" 
            class="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border border-orange-600  font-medium  py-3 px-4 text-gray-800">
            Ponerse en contacto
          </nuxt-link>
        </div>
        <!-- Fin Botones -->
      </div>
      <!-- Fin Col -->

      <div class="relative ml-4">
        <img class="w-full" src="home-enhanced.webp" alt="contabilidad san vicente" />
      </div>
      <!-- Fin Col -->
    </div>
    <!-- Fin Cuadrícula -->
  </div>
  <!-- Fin Principal -->
</template>
  