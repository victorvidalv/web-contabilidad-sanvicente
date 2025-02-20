<template>
  <!-- Contenedor Principal con fondo sutil -->
  <div class="min-h-screen ">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Sección del Título Mejorada -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl font-bold md:text-4xl md:leading-tight  ">
          Nuestras Herramientas
        </h2>
        <p class="mt-4 text-lg text-gray-600 leading-relaxed">
          A continuación encontrará una serie de herramientas que le permitirán
          realizar cálculos y generar documentos de manera rápida y sencilla.
        </p>
        <div class="mt-4 w-32 h-1 bg-blue-950 mx-auto rounded-full"></div>
      </div>

      <!-- Menú de Componentes Mejorado -->
      <div class="flex flex-wrap gap-3 justify-center mb-8">
        <button 
          v-for="(label, component) in tools" 
          :key="component"
          @click="setCurrentComponent(component)" 
          :class="[
            buttonClass(component),
            'transition-all duration-300 ease-in-out',
            ' px-6 py-3 text-sm font-medium',
            'hover:shadow-lg hover:transform hover:-translate-y-0.5',
            'focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2'
          ]"
        >
          {{ label }}
        </button>
      </div>

      <!-- Componente Dinámico con Transición -->
      <transition name="fade" mode="out-in">
        <component :is="currentComponent" class="bg-white  shadow-sm p-6"></component>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  
  data() {
    return {
      currentComponent: "ToolsFee",
      tools: {
        ToolsFee: 'Cal. de Honorarios',
        ToolsEquilibrium: 'Punto de Equilibrio',
        ToolsIndicators: 'Ind. Económicos',
        ToolsUsdConverter: 'Con. Dólar Obs.',
        ToolsInvoice: 'Cal. de Facturas',
        ToolsRepresentation: 'Gen. Poderes',
        ToolsQuote: 'Cot. Contabilidad'
      }
    };
  },

  mounted() {
    if (this.$route.query.atiende) {
      this.setCurrentComponent('ToolsRepresentation');
    }
    if (this.$route.query.cotizar) {
      this.setCurrentComponent('ToolsQuote');
    }
  },

  head() {
    return {
      title: "Herramientas | Contabilidad San Vicente",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Utilice nuestras herramientas para realizar cálculos de manera rápida y sencilla. Si tiene alguna duda, no dude en contactarnos.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Herramientas, Contabilidad, San Vicente de Tagua Tagua, Contabilidad San Vicente, calculadora de honorarios, indicadores económicos, conversor dólar observado, calculadora de facturas",
        },
      ],
    };
  },

  methods: {
    setCurrentComponent(componentName) {
      this.currentComponent = componentName;
    },
    buttonClass(name) {
      return this.currentComponent === name
        ? 'bg-blue-950 text-white'
        : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-950 hover:text-blue-950';
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
