<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
   
  
<div class="text-right">
  <button @click="step -= 1" class="btn border p-2 m-1">Volver</button>
</div>


<!-- 1 -->

<ServicesQuote  :img=1 v-if="step <2">
  
  <template #texto>

  <p class="question">Bienvenido al sistema de cotización</p>
  
  <p>Te guiaremos en la cotización del servicio Contabilidad Mensual</p>

  <button @click="step = 2" class="btn-yes">Comencemos</button>

</template>

</ServicesQuote>

<!-- 2 -->


<ServicesQuote  :img=1 v-if="step === 2">
  
  <template #texto>

    <p class="question">¿Nos puedes indicar como te llamas?</p>

<input type="text" class="input-custom" placeholder="Ingresa tu nombre" v-model="name">

<button @click="step = 3" class="btn-yes" v-if="name.length>3">Continuar</button>


</button>


</template>

</ServicesQuote>


<!-- 3 -->


<ServicesQuote  :img=1 v-if="step === 3">
  
  <template #texto>

    <p class="question">¿Has contratado servicios de contabilidad anteriormente?</p>

<button  @click="step = 4"  class="btn-yes">
Si, he Contrado Servicios anteriormente
</button>

<button  @click="step = 4 "  class="btn-no">
  
    No he Contrado Servicios anteriormente
</button>

<p class="text-sm text-gray-500"

>Las personas que han contratado nuestros servicios anteriormente tienen descuentos especiales</p>

</template>

</ServicesQuote>

<!-- 4 -->


<ServicesQuote  :img=1 v-if="step === 4">
  
  <template #texto>

    <p class="question">Por favor completa algunos antecedentes:</p>


<input type="text" class="input-custom" placeholder="Ingresa el nombre de tu empresa" name="empresa">

<input type="text" class="input-custom" placeholder="Ingresa el  RUT de tu empresa">

<input type="number" class="input-custom" placeholder="Número trabajadores contratados" name="trabajadores contratados">


<input type="text" class="input-custom" placeholder="Ingresa tu correo electrónico">

<input type="text" class="input-custom" placeholder="Ingresa tu número de teléfono" name="phone" v-model="phone">

<button class="btn-yes" @click="step = 5" v-if="phone.length>3">Continuar </button>

</template>

</ServicesQuote>


<ServicesQuote  :img=1 v-if="step === 5">
  
  <template #texto>
    <p class="question">¿Qué tipo de servicio necesitas?</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-4 mt-2">
    <!-- Esencial -->
    <div class="card border p-1 m-1 col-span-1 lg:col-span-3">
      <div class="card-header">
        <strong>Esencial (Microempresas)</strong>
      </div>
      <div class="card-body">
        <ul>
          <li>Hasta 250 Documentos tributarios</li>
          <li>Declaración F29</li>
        </ul>
      </div>
      <div class="card-footer">
        <button class="btn-yes" @click="step = 6">
         $ 59.900 / mes
        </button>
      </div>
    </div>
    <!-- Standard -->
    <div class="card border p-1 m-1 col-span-1 lg:col-span-3">
      <div class="card-header">
        <strong>Standard (Pequeñas Empresas)</strong>
      </div>
      <div class="card-body">
        <p>Hasta 500 Documentos tributarios</p>
        <p>Declaración F29</p>
        <p>Inf. Movimientos Bancarios</p>
        <p>Documentación Online</p>
      </div>
      <div class="card-footer">
        <button class="btn-yes" @click="step = 6">
         $ 119.900  / mes
        </button>
      </div>
    </div>
    <!-- Avanzado -->
    <div class="card border p-1 m-1 col-span-1 lg:col-span-3">
      <div class="card-header">
        <strong>Avanzado (Medianas Empresas)</strong>
      </div>
      <div class="card-body">
        <ul>
          <li>Cantidad de Documentos tributarios a convenir</li>
          <li>Declaración F29</li>
          <li>Inf. Movimientos Bancarios</li>
          <li>Documentación Online</li>
          <li>Informes de Venta</li>
        </ul>
        <p>Asesoría contable permanente</p>
      </div>
      <div class="card-footer">
        <button class="btn-yes" @click="step = 6">
          Desde  $ 399.900 / mes
        </button>
      </div>
    </div>
  </div>
</template>
</ServicesQuote>

<!-- 6 -->
<ServicesQuote  :img=1 v-if="step === 6">
  
  <template #texto>

    <p class="question">¿Deseas agregar nuestro servicio de Remuneraciones?</p>


    <p><strong>$15.000</strong> por trabajador contratado al mes</p>

<button class="btn-yes" @click="step = 7">Si</button>

<button class="btn-no" @click="step = 7" >No gracias</button>

<p class="text-sm text-gray-500">El servicio de remuneraciones incluye: Liquidaciones de sueldo, Contratos de trabajo, Finiquitos, Certificados de renta, Declaraciones juradas, entre otros.</p>

</template>

</ServicesQuote>

<!-- 7 -->

<ServicesQuote  :img=1 v-if="step === 7">
  
  <template #texto>

    <p class="question">¿Publicar tu empresa en nuestro directorio online?</p>
        <p>El precio de la incorporación Standard es $ 25.000 (pago único), pero tenemos un <strong>descuento para ti</strong></p>
        <button class="btn-yes" @click="step = 8">
          Si, incorporación Standard (gratis)
        </button>
        <button class="btn-yes" @click="step = 8">
          Si, incorporación destacada ( $ 10.000 )
        </button>

        <button class="btn-no" @click="step = 8">
          No, Gracias
        </button> 

    <p class="text-sm text-gray-500">El directorio online es un espacio donde publicaremos una reseña de tu empresa, tus servicios y productos, además de tus datos de contacto, te ayudará amejorar tu posicionamiento en internet y atraer más clientes.</p>

</template>

</ServicesQuote>





<!-- 7 -->

<ServicesQuote  :img=1 v-if="step === 8">
  
  <template #texto>

    <p class="question">¿Publicar un articulo acerca de tus productos o servicios en nuestro blog?</p>
    
        <p>El precio de una publicación promocional Standard es $ 15.000 (por publicación), pero tenemos un <strong>descuento para ti</strong></p>
        <button class="btn-yes" @click="step = 9">
          Si, 1 publicación Standard (gratis)
        </button>
        <button class="btn-yes" @click="step = 9">
          Si, publicación destacada ( $ 45.000 )
        </button>

        <button class="btn-no" @click="step = 9">
          No, Gracias
        </button> 

      <p class="text-sm text-gray-500">El blog es un espacio donde publicamos artículos acerca de nuestros clientes, sus productos y servicios, te ayuda a mejorar tu posicionamiento en internet y atraer más clientes.


      </p>
  
</template>

</ServicesQuote>


<!-- 9 -->

<ServicesQuote :img=1 v-if="step === 9">
  
  <template #texto>

    <p class="question">¿Te gustaría unirte a nuestro grupo de WhatsApp?</p>
        <p>Un grupo único donde estas tu con nuestro equipo y puedes hacer consultas directamente en horario de oficina</p>
        <button class="btn-yes" @click="step = 10">
          Si, horario oficina (gratis)
        </button>
        <button class="btn-yes" @click="step = 10">
          Si, horario extendido ($ 55.000/mes)
        </button>
        <button class="btn-no" @click="step = 10">
          No, Gracias
        </button> 

        <p class="text-sm text-gray-500">El grupo de WhatsApp es un espacio donde podrás hacer consultas directamente a nuestro equipo, te ayudará a resolver dudas y a estar al tanto de las novedades tributarias y contables</p>
  
</template>

</ServicesQuote>



<!-- 10 -->

<ServicesQuote :img=1 v-if="step === 10">
  
  <template #texto>

    <p class="question">¿Te gustaría contar con un correo corporativo?</p>
        <p>Un correo del tipo tunombre@nombretuempresa.cl te dará una imagen más profesional</p>
    
        <button class="btn-yes" @click="step = 11">
          Si, una cuenta de email ($ 5.000/mes)
        </button>
        <button class="btn-yes" @click="step = 11">
          Si, hasta 10 cuenta de email ($ 10.000/mes)
        </button>
        <button class="btn-no" @click="step = 11">
          No, Gracias
        </button> 

        <p class="text-sm text-gray-500">El correo corporativo incluye la compra del dominio y la configuración de las cuentas de correo.</p>
  
</template>

</ServicesQuote>



<!-- 11 -->

<ServicesQuote :img=1 v-if="step === 11">
  
  <template #texto>

    <p class="question">¿Te gustaría contar con un sitio web?</p>
        <p>Un sitio web te permitirá tener presencia en internet y atraer más clientes</p>
      
        <button class="btn-yes" @click="step = 12">
          Si, sitio web básico ($ 7.500/mes)
        </button>
        <button class="btn-no" @click="step = 12">
          No, Gracias
        </button> 
        <p class="text-sm text-gray-500">El sitio web básico incluye el diseño básico, la configuración y la mantención del sitio web, además de la compra del dominio y el hosting</p>
</template>

</ServicesQuote>




<!-- 11 -->

<ServicesQuote :img=1 v-if="step === 12">
  
  <template #texto>

    <p class="question">¿Te gustaría contar con un domicilio tributario?</p>
        <p>Un domicilio tributario te permitirá iniciar actividades, cuidar privacidad, tu correspondencia y tener una dirección para tu empresa</p>
   
        <button class="btn-yes" @click="step = 13">
          Si, domicilio tributario ($ 9.900/mes)
        </button>
        <button class="btn-no" @click="step = 13">
          No, Gracias
        </button> 
        <p class="text-sm text-gray-500">El domicilio tributario incluye la dirección tributaria, la recepción de correspondencia y la custodia de documentos tributarios, no incluye gastos notariales.</p>
</template>

</ServicesQuote>


<!-- 11 -->

<ServicesQuote :img=1 v-if="step === 13">
  
  <template #texto>

    <p>Muchas gracias por completar la cotización</p>
        <p>Presiona el botón para enviar tu cotización a nuestro equipo</p>
        <p>Nos pondremos en contacto contigo a la brevedad</p>
        <button class="btn-yes" @click="step = 13">
          Enviar Cotización
        </button>
       
        <h3>Detalles:</h3>
        <p>Nombre: {{name}}</p>
        <p>Empresa: {{empresa}}</p>
        <p>RUT: {{rut}}</p>
        <p>Correo: {{correo}}</p>
        <p>Teléfono: {{phone}}</p>
     
</template>

</ServicesQuote>



{{ step }}




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
      step: 7,
      name: "victor",
      oldClient: 1,
      phone: "12345",
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
.btn-yes {
  @apply mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}

.img-custom {
  @apply w-full h-auto 
}

.input-custom {
  @apply w-full p-2 border  rounded mt-2;
}

.btn-no {
  @apply  mt-5 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}

.question {
  @apply text-2xl ;
}

</style>
