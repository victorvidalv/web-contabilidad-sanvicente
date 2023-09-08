<template>
    <!-- Team -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->

    
<div class="py-10">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Nuestro equipo</h2>
        <p class="mt-1 text-gray-600 ">Para lograr estos objetivos, contamos con un equipo multidisciplinario de profesionales con más de 10 años de experiencia en áreas contables, comerciales e informáticas. Esta diversidad de talento nos habilita para ir más allá de los servicios contables tradicionales.<strong> Con nuestra combinación de experticia en contabilidad y en tecnología de la información</strong> , ofrecemos estrategias comerciales efectivas, soluciones tecnológicas innovadoras y análisis de datos de alta calidad. Nos complace ser el socio estratégico que contribuye al crecimiento y éxito de su negocio en San Vicente de Tagua Tagua y más allá.</p>
</div>
  <!-- End Title -->
  <!-- Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Repeat this block 6 times using a for loop -->
    <div v-for="i in 6">
        <div class="flex flex-col  p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
            <div class="flex items-center gap-x-4">
                <img class=" w-25 h-25" src="https://dummyimage.com/100x100/eee/aaa" alt="Image Description">
                <div class="grow">
                    <h3 class="font-medium text-gray-800 dark:text-gray-200">
                        nombre apellido
                    </h3>
                    <p class="text-xs uppercase text-gray-500">
                        Profesion / Cargo
                    </p>
                </div>
            </div>

            <p class="mt-3 text-gray-500">
                Resumen persona: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
            </p>
            
        </div>
    </div>
    <!-- End repeat block -->
</div>
    <!-- End Col -->



   
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Team -->
</template>