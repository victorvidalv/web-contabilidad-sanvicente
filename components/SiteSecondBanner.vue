<template>
  <!-- Sección Inicio -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
      <!-- Columna de la imagen -->
      <div>
        <img :src="img" alt="Descripción de la imagen">
      </div>
      <!-- Fin de la columna -->

      <!-- Columna del contenido textual -->
      <div class="mt-5 sm:mt-10 lg:mt-0 border p-5 bg-red-500">
        <div class="space-y-6 sm:space-y-8">
          <!-- Título -->
          <div class="space-y-2 md:space-y-4">
            <h2 class="text-3xl lg:text-4xl text-white">
              {{ name }}
            </h2>
            <!-- Descripción usando v-html para interpretar HTML en la cadena -->
            <p class="text-white" v-html="description">
            </p>
          </div>
          <!-- Fin del título -->
        </div>
      </div>
      <!-- Fin de la columna del contenido textual -->
    </div>
    <!-- Fin del grid -->
  </div>
</template>

<script>
export default {
  // Definición de las propiedades para el componente
  props: {
    name: String,
    description: String,
    img: String,
  },
};
</script>
