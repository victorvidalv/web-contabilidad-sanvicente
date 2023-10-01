<template>
    <!-- Principal -->
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <!-- Cuadrícula -->
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 class="block text-3xl text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Contabilidad <span class="homebanner">San Vicente</span>
          </h1>
          <p class="mt-3 text-lg text-gray-800">
            Situados en San Vicente de Tagua Tagua, comprendemos
            de manera íntima las necesidades de los sectores agroindustriales y
            agrícolas en la Región de O'Higgins.
          </p>
  
          <!-- Botones -->
          <div class="mt-7 grid gap-3 w-full sm:inline-flex">
            <nuxt-link
              to="servicios"
              data-aos="fade"
              data-aos-duration="1000"
              class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
              href="#"
            >
              Conocer Servicios
              <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </nuxt-link>
            <nuxt-link
              to="contacto"
              data-aos="fade"
              data-aos-duration="1000"
              class="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
              href="#"
            >
              Ponerse en contacto
            </nuxt-link>
          </div>
          <!-- Fin Botones -->
        </div>
        <!-- Fin Col -->
  
        <div class="relative ml-4">
          <img class="w-full" src="https://dummyimage.com/590x600/eee/aaa" alt="Descripción de la imagen" />
        </div>
        <!-- Fin Col -->
      </div>
      <!-- Fin Cuadrícula -->
    </div>
    <!-- Fin Principal -->
  </template>
  