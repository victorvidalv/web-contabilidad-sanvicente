<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">


        <div class=" py-10  lg:py-6 mx-auto" >
        <!-- Title -->
        <div class="">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Nuestras Herramientas</h2>
        <p class="mt-1 text-gray-600 ">Estimado cliente, a continuación encontrará una serie de herramientas que le permitirán realizar cálculos de manera rápida y sencilla. Si tiene alguna duda, no dude en contactarnos.</p>
</div>
</div>




        <!-- Menú superior -->
        <div class="flex space-x-4 mb-4">
            <button @click="setCurrentComponent('HonCal')" :class="currentComponent === 'HonCal' ? 'bg-blue-500 text-white p-2' : 'bg-gray-400 text-white p-2'">Calculadora de Honorarios</button>
            <button @click="setCurrentComponent('Indicators')" :class="currentComponent === 'Indicators' ? 'bg-blue-500 text-white p-2' : 'bg-gray-400 text-white p-2'">Indicadores Económicos</button>
            <button @click="setCurrentComponent('CurrencyConverter')" :class="currentComponent === 'CurrencyConverter' ? 'bg-blue-500 text-white p-2' : 'bg-gray-400 text-white p-2'">Conversor Dolar Obs.</button>
            <button @click="setCurrentComponent('InvoiceCal')" :class="currentComponent === 'InvoiceCal' ? 'bg-blue-500 text-white p-2' : 'bg-gray-400 text-white p-2'">Calculadora de Facturas</button>
        </div>

        <!-- Componentes -->
        <Indicators v-if="currentComponent === 'Indicators'"/>
        <HonCal v-if="currentComponent === 'HonCal'"/>
        <CurrencyConverter v-if="currentComponent === 'CurrencyConverter'"/>
        <InvoiceCal v-if="currentComponent === 'InvoiceCal'"/>
    </div>
</template>

<script>


export default {
    layout: 'default',
    // SEO (Optimización para motores de búsqueda)
    head() {
      return {
          title: "Nosotros | Contabilidad San Vicente",
          meta: [
              {
                  hid: "description",
                  name: "description",
                  content: "Utilice nuestras herramientas para realizar cálculos de manera rápida y sencilla. Si tiene alguna duda, no dude en contactarnos.",
              },
              {
                  hid: "keywords",
                  name: "keywords",
                  content: "Herramientas, Contabilidad, San Vicente de Tagua Tagua, Contabilidad San Vicente, calculadora de honorarios, indicadores económicos, conversor dolar observado, calculadora de facturas",
              },
          ],
      };
  },
 
    data() {
        return {
            currentComponent: 'HonCal'  // Componente visible por defecto
        };
    },
    methods: {
        setCurrentComponent(componentName) {
            this.currentComponent = componentName;
        }
    }
}
</script>


<style>

.bg-blue-500 {

background-color: #F25022;

}

.bg-gray-400 {

background-color: #eeeeee;
color: black;

}



</style>


