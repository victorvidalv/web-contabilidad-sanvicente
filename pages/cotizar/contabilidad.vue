<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
   
  
<div class="text-right">
  <button @click="step -= 1" class="btn border p-2 m-1">Volver</button>
</div>


<!-- 1 -->

<ServicesQuote  :img=1 v-if="step <2">
  
  <template #texto>

  <strong>Hola, soy AI</strong>N, Tu asistente Virtual.</p>
  
  <p>Te guiare durante el proceso de cotización</p>

  <button @click="step = 2" class="btn-custom">Comencemos</button>

</template>

</ServicesQuote>

<!-- 2 -->


<ServicesQuote  :img=1 v-if="step === 2">
  
  <template #texto>

    <p>¿Me puedes indicar <strong>como te llamas?</strong></p>

<input type="text" class="input-custom" placeholder="Ingresa tu nombre" v-model="name">

<button @click="step = 3" class="btn-custom" v-if="name.length>3">Siguiente </button>


</button>


</template>

</ServicesQuote>


<!-- 3 -->


<ServicesQuote  :img=1 v-if="step === 3">
  
  <template #texto>

    <p><strong>{{name}}</strong>, ¿haz contrado antes nuestros servicios?</p>

<button  @click="step = 4"  class="btn-custom">
Si he Contrado Servicios Antes
</button>

<button  @click="step = 4 "  class="btn-custom">
  
    No he Contrado Servicios Antes
</button>



</template>

</ServicesQuote>

<!-- 4 -->


<ServicesQuote  :img=1 v-if="step === 4">
  
  <template #texto>

    <p><strong>{{name}}</strong> es un placer conocerte!</p>

    <p>Para comenrcar necesito algunos antecedentes</p>

<input type="text" class="input-custom" placeholder="Ingresa el nombre de tu empresa" name="empresa">

<input type="text" class="input-custom" placeholder="Ingresa el  RUT de tu empresa">

<input type="text" class="input-custom" placeholder="Ingresa tu correo electrónico">

<input type="text" class="input-custom" placeholder="Ingresa tu número de teléfono" name="phone" v-model="phone">

<button class="btn-custom" @click="step = 5" v-if="phone.length>3">Continuar </button>

</template>

</ServicesQuote>






<ServicesQuote  :img=1 v-if="step === 5">
  
  <template #texto>

    <p></p>

   


    <div class="grid grid-cols-9 gap-4 mt-2">

<!-- Esencial  -->
<div class="card border p-1 m-1 col-span-3">
  <div class="card-header">
    <strong>Esencial</strong>
  </div>
  <div class="card-body">
    <ul>
    <li>Hasta 250 Documentos tributarios</li>
    <li>Declaración  F29</li>
  </ul>
  </div>
  <div class="card-footer">
    <button class="btn-custom" @click="step = 6">
      2 UF / mes
    </button>
  </div>
</div>

<!-- Standard -->
<div class="card border p-1 m-1 col-span-3">
  <div class="card-header">
   <strong>Standard</strong> 
  </div>
  <div class="card-body">
    <p>Hasta 500 Documentos tributarios</p>
    <p>Declaración F29</p>
    <p>Inf. Movimientos Bancarios</p>
    <p>Documentación Online</p>
  </div>
  <div class="card-footer">
    <button class="btn-custom"  @click="step = 6">
      4 UF / mes
    </button>
  </div>
</div>

<!-- Avanzado -->
<div class="card border p-1 m-1 col-span-3">
  <div class="card-header">
    <strong>  Avanzado </strong>
  </div>
  <div class="card-body">
<ul>
    <li>Cantidad de Documentos tributarios a convenir</li>
    <li>Declaración  F29</li>
    <li>Inf. Movimientos Bancarios</li>
    <li>Documentación Online</li>
    <li>Informes de Venta</li>
</ul>
    <p>6.Asesoría contable permantente</p>
  </div>
  <div class="card-footer">
    <button class="btn-custom"  @click="step = 6">
      Desde 6 UF / mes
    </button>
  </div>
</div>

</div>




</template>

</ServicesQuote>


<!-- 6 -->




</div>  








</template>

<script>
import ServicesQuote from '~/components/ServicesQuote.vue';

export default {
  layout: "default",

  components: {
    ServicesQuote
  },

  data() {
    return {
      step: 5,
      name: "",
      oldClient: 1,
      phone: "",
    };
  },

  // INICIO SEO

  head() {
    return {
      title: "Cotizador Servicio Contabilidad | Contabilidad San Vicente",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " Usa nuestro cotizador para obtener el precio de nuestro servicio de contabilidad. Contabilidad San Vicente, San Vicente de Tagua Tagua, VI Región, Chile.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Atención al Cliente, Consultas, San Vicente de Tagua Tagua, Cotizador Servicio Contabilidad ",
        },
      ],
    };
  },

  // INICIO SEO
};
</script>

<style scoped>
/* En tu archivo CSS (por ejemplo, main.css) */
.btn-custom {
  @apply mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}

.img-custom {
  @apply w-full h-auto 
}

.input-custom {
  @apply w-full p-2 border  rounded mt-2;
}

</style>
