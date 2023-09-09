<template>
    <!-- Contenedor Principal -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Sección del Título -->
      <div class="py-10 lg:py-6 mx-auto">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Nuestras Herramientas</h2>
        <p class="mt-1 text-gray-600">Estimado cliente, a continuación encontrará una serie de herramientas que le permitirán realizar cálculos de manera rápida y sencilla. Si tiene alguna duda, no dude en contactarnos.</p>
      </div>
  
      <!-- Menú de Componentes -->
      <div class="flex space-x-4 mb-4">
        <button @click="setCurrentComponent('ToolsFee')" :class="buttonClass('ToolsFee')">Calculadora de Honorarios</button>
        <button @click="setCurrentComponent('ToolsIndicators')" :class="buttonClass('ToolsIndicators')">Indicadores Económicos</button>
        <button @click="setCurrentComponent('ToolsUsdConverter')" :class="buttonClass('ToolsUsdConverter')">Conversor Dolar Obs.</button>
        <button @click="setCurrentComponent('ToolsInvoice')" :class="buttonClass('ToolsInvoice')">Calculadora de Facturas</button>
      </div>
  
      <!-- Componentes Dinámicos -->
      <component :is="currentComponent"></component>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'default',
    // SEO
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
          }
        ],
      };
    },
    // Datos
    data() {
      return {
        currentComponent: 'ToolsFee'  // Componente por defecto
      };
    },
    // Métodos
    methods: {
      // Cambia el componente actual
      setCurrentComponent(componentName) {
        this.currentComponent = componentName;
      },
      // Clase dinámica para los botones del menú
      buttonClass(name) {
        return this.currentComponent === name ? 'bg-blue-500 text-white p-2' : 'bg-gray-400 text-white p-2';
      }
    }
  }
  </script>
  



