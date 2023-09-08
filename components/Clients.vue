<template>
    <!-- Clients -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" data-aos="fade-up" data-aos-duration="500">
        <!-- Title -->
        <div class="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
            <h2 class="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">Nuestros
                Clientes</h2>
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