<template>
    <!-- Sección de Clientes -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Título y Descripción -->
        <div class="py-10 text-center">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-gray-600">
                Nuestros Clientes
            </h2>
            <p class="mt-1 text-gray-600 text-center text-xl">
                Conozca más acerca de las diversas empresas y organizaciones que han confiado en nuestros servicios de
                Contabilidad.
            </p>
        </div>

        <!-- Lista de Logos de Clientes -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6">
            <!-- Utilizamos un bucle 'v-for' para renderizar los logos -->
            <div v-for="i in 8" :key="i">
                <!-- Aplicamos clases dinámicas para los logos -->
                <div :class="`border clients_logo-${i}`">
                    <!-- Aquí iría el contenido del logo, como una imagen o similar -->
                </div>
            </div>
        </div>
    </div>
</template>
