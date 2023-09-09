<template>
    <!-- Inicio Clientes -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" data-aos="fade-up" data-aos-duration="500">
        <!-- Title -->
        <div class="py-10 text-center">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Nuestros Clientes</h2>
        <p class="mt-1 text-gray-600 text-center text-xl">Conozca más acerca de las diversas empresas y organizaciones que han confiado en nuestros servicios de Contabilidad. </p>
</div>
 

  
        <div class="grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3 lg:gap-6">
            <div v-for="i in 8" :key="i">
                <div :class="'border clients_logo-'+i"></div>
            </div>
        </div>





    </div>
    <!-- Fin Clientes -->
</template>