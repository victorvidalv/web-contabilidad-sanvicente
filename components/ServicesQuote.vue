<template>
    <div class="grid grid-cols-1 md:grid-cols-10 border  gap-4 bg-gray-200 min-h-40" >
      <!-- Oculta en pantallas menores a 'md' y muestra en 'md' o más grandes -->
     
      <!-- Ajusta el span para ocupar todo el ancho en pantallas pequeñas y 7/10 en pantallas md o mayores -->
      <div class="col-span-1 md:col-span-10 p-4">
        <slot name="texto"></slot>
      </div>
    </div>
  </template>
  
 

<script>

export default {

    props: {
      
        
    }

}
</script>