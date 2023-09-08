<template>
    <!-- Clients -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" data-aos="fade" data-aos-duration="1000">
        <!-- Title -->
        <div class="py-10">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Nuestros Clientes</h2>
        <p class="mt-1 text-gray-600 ">Conozca más acerca de las diversas empresas y organizaciones que han confiado en nuestros servicios de Contabilidad especializados. Aquí, destacamos la diversidad de sectores que abarcamos, desde la agricultura y la viticultura hasta la agroindustria, y cómo nuestra oferta de servicios se ajusta a las necesidades específicas de cada uno de ellos. <strong>Nuestra relación con nuestros clientes va más allá de la simple gestión contable</strong>; nos convertimos en un socio estratégico que contribuye al cumplimiento fiscal, la toma de decisiones basada en datos y, en última instancia, al éxito sostenible de sus negocios. </p>
</div>
        <!-- End Title -->

        <!-- Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">


            <div v-for="i in 10" :key="i">
                <img src="https://dummyimage.com/240x145/eee/aaa" alt="Image Description" loading="lazy">
            </div>



        </div>
        <!-- End Grid -->
    </div>
    <!-- End Clients -->
</template>