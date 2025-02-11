<template>
  <div class="bg-gradient-to-r from-gray-100 to-gray-200">
    <div class="max-w-6xl mx-auto p-8">
      <h1 class="text-4xl font-bold text-center mb-10 text-gray-800">Simulador de Punto de Equilibrio</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Columna Izquierda: Formulario -->
        <div class="space-y-8">
          <!-- Costos Variables -->
          <div class="bg-white p-6 border">
            <h2 class="text-2xl font-bold text-gray-700 mb-2">Costos Variables</h2>
            <p class="text-gray-600 text-sm mb-6">
              Los costos variables son aquellos que fluctúan en proporción directa con el volumen de ventas. 
              Se expresan como porcentaje sobre las ventas totales.
            </p>
            
            <div class="space-y-5">
              <!-- Costo Venta -->
              <div class="bg-gray-50 p-4 border">
                <label for="costoVenta" class="block text-gray-700 font-medium mb-2">
                  Costo de Mercadería Vendida (CMV)
                  <span class="text-sm text-gray-500 ml-1">(%)</span>
                </label>
                <p class="text-gray-600 text-sm mb-4">
                  Representa el costo directo de los productos o servicios vendidos.
                </p>
                <div class="flex items-center gap-4">
                  <div class="relative flex-1">
                    <input type="range" 
                           id="costoVenta" 
                           v-model.number="simulador.costoVenta" 
                           min="0" 
                           max="100" 
                           step="1" 
                           class="slider-input">
                    <div class="slider-track" 
                         :style="{ width: simulador.costoVenta + '%' }">
                    </div>
                  </div>
                  <span class="w-16 text-right font-semibold bg-white px-3 py-1 rounded border">
                    {{ simulador.costoVenta }}%
                  </span>
                </div>
              </div>

              <!-- Costo Insumos -->
              <div class="bg-gray-50 p-4 border">
                <label for="costoInsumos" class="block text-gray-700 font-medium mb-2">
                  Costos Operativos Variables
                  <span class="text-sm text-gray-500 ml-1">(%)</span>
                </label>
                <p class="text-gray-600 text-sm mb-4">
                  Incluye insumos, comisiones y otros costos que varían con el nivel de actividad.
                </p>
                <div class="flex items-center gap-4">
                  <div class="relative flex-1">
                    <input type="range" 
                           id="costoInsumos" 
                           v-model.number="simulador.costoInsumos" 
                           min="0" 
                           max="100" 
                           step="1" 
                           class="slider-input">
                    <div class="slider-track" 
                         :style="{ width: simulador.costoInsumos + '%' }">
                    </div>
                  </div>
                  <span class="w-16 text-right font-semibold bg-white px-3 py-1 rounded border">
                    {{ simulador.costoInsumos }}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Costos Fijos -->
          <div class="bg-white p-6 border mt-6">
            <h2 class="text-2xl font-bold text-gray-700 mb-2">Costos Fijos</h2>
            <p class="text-gray-600 text-sm mb-6">
              Los costos fijos son aquellos que permanecen constantes independientemente del nivel de ventas.
              Representan la estructura básica operativa de la empresa.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="input-group">
                <label for="sueldos" class="input-label">
                  <span class="text-gray-700">Sueldos + Leyes Sociales</span>
                  <span class="text-sm text-gray-500 ml-1">(Pesos)</span>
                </label>
                <input type="number" 
                       id="sueldos" 
                       v-model.number="simulador.sueldos" 
                       min="0" 
                       class="input-field w-full"
                       placeholder="Ingrese monto en pesos">
              </div>

              <div class="input-group">
                <label for="honorarios" class="input-label">
                  <span class="text-gray-700">Hono
                  rarios</span>
                  <span class="text-sm text-gray-500 ml-1">(Pesos)</span>
                </label>
                <input type="number" 
                       id="honorarios" 
                       v-model.number="simulador.honorarios" 
                       min="0" 
                       class="input-field w-full"
                       placeholder="Ingrese monto en pesos">
              </div>

              <div class="input-group">
                <label for="costosFijos" class="input-label">
                  <span class="text-gray-700">Costos Fijos</span>
                  <span class="text-sm text-gray-500 ml-1">(Pesos)</span>
                </label>
                <input type="number" 
                       id="costosFijos" 
                       v-model.number="simulador.costosFijos" 
                       min="0" 
                       class="input-field w-full"
                       placeholder="Ingrese monto en pesos">
              </div>

              <div class="input-group">
                <label for="convenios" class="input-label">
                  <span class="text-gray-700">Convenios Tesorería</span>
                  <span class="text-sm text-gray-500 ml-1">(Pesos)</span>
                </label>
                <input type="number" 
                       id="convenios" 
                       v-model.number="simulador.convenios" 
                       min="0" 
                       class="input-field w-full"
                       placeholder="Ingrese monto en pesos">
              </div>

              <div class="input-group">
                <label for="creditos" class="input-label">
                  <span class="text-gray-700">Créditos</span>
                  <span class="text-sm text-gray-500 ml-1">(Pesos)</span>
                </label>
                <input type="number" 
                       id="creditos" 
                       v-model.number="simulador.creditos" 
                       min="0" 
                       class="input-field w-full"
                       placeholder="Ingrese monto en pesos">
              </div>

              <div class="input-group">
                <label for="ventaReal" class="input-label">
                  <span class="text-gray-700">Venta Real</span>
                  <span class="text-sm text-gray-500 ml-1">(Pesos)</span>
                </label>
                <input type="number" 
                       id="ventaReal" 
                       v-model.number="simulador.ventaReal" 
                       min="0" 
                       class="input-field w-full"
                       placeholder="Ingrese monto en pesos">
              </div>
            </div>

            <!-- Otros Gastos Fijos -->
            <div class="mt-8 border-t pt-6">
              <div class="flex justify-between items-center mb-6">
                <div>
                  <h3 class="text-xl font-semibold text-gray-800">Otros Gastos Fijos</h3>
                  <p class="text-gray-600 text-sm">Agregue gastos adicionales si es necesario</p>
                </div>
              </div>

              <!-- Lista de gastos existentes -->
              <div class="space-y-4">
                <div v-for="(gasto, index) in simulador.otrosGastos" 
                     :key="index" 
                     class="flex items-start gap-4 p-4 bg-gray-50 border">
                  <div class="flex-1 space-y-3">
                    <input type="text" 
                           v-model="gasto.descripcion" 
                           placeholder="Descripción del gasto" 
                           class="input-field w-full">
                    <input type="number" 
                           v-model.number="gasto.valor" 
                           placeholder="Ingrese monto en pesos" 
                           min="0" 
                           class="input-field w-full">
                  </div>
                  <button @click="eliminarGasto(index)" 
                          class="bg-red-500 hover:bg-red-600 text-white p-2 border transition-colors duration-200">
                    <span class="text-xl">×</span>
                  </button>
                </div>
              </div>

              <!-- Formulario para nuevo gasto -->
              <div class="mt-4 p-4 bg-blue-50 border">
                <div class="space-y-3">
                  <input type="text" 
                         v-model="nuevoGasto.descripcion" 
                         placeholder="Descripción del nuevo gasto" 
                         class="input-field w-full">
                  <input type="number" 
                         v-model.number="nuevoGasto.valor" 
                         placeholder="Ingrese monto en pesos" 
                         min="0" 
                         class="input-field w-full">
                  <button @click="agregarGasto" 
                          class="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 border transition-colors duration-200 flex items-center justify-center">
                    <span class="mr-2">+</span> Agregar Gasto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Resultados -->
        <div class="space-y-8">
          <!-- Resultados -->
          <div class="bg-white p-6 border mb-8">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Punto de Equilibrio Operativo</h2>
            <p class="text-gray-600 text-sm text-center mb-6">
              Nivel de ventas necesario para cubrir todos los costos operativos. 
              No considera aspectos de liquidez ni timing de los flujos de caja.
            </p>
            
            <div class="text-center mb-8">
              <span v-if="puntoEquilibrio !== 'Indeterminado'" class="text-4xl font-bold text-blue-600">
                ${{ formatoMoneda(puntoEquilibrio) }}
              </span>
              <span v-else class="text-4xl font-bold text-red-600">Indeterminado</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Columna izquierda -->
              <div class="space-y-4">
                <div class="p-4 bg-gray-50 border">
                  <div class="text-gray-600 text-sm">Costos Variables Totales (% sobre ventas)</div>
                  <div class="text-xl font-semibold text-gray-800">{{ formatoMoneda(costosVariablesTotales) }}%</div>
                  <p class="text-gray-500 text-xs mt-1">Porcentaje total de costos que varían con las ventas</p>
                </div>
                
                <div class="p-4 bg-gray-50 border">
                  <div class="text-gray-600 text-sm">Costos Fijos Totales</div>
                  <div class="text-xl font-semibold text-gray-800">${{ formatoMoneda(costosFijosTotales) }}</div>
                  <p class="text-gray-500 text-xs mt-1">Suma de todos los costos fijos mensuales</p>
                </div>
              </div>

              <!-- Columna derecha -->
              <div class="space-y-4">
                <div class="p-4 bg-gray-50 border">
                  <div class="text-gray-600 text-sm">Ventas Reales</div>
                  <div class="text-xl font-semibold text-gray-800">${{ formatoMoneda(simulador.ventaReal) }}</div>
                  <p class="text-gray-500 text-xs mt-1">Facturación mensual actual</p>
                </div>

                <div class="p-4 bg-gray-50 border">
                  <div class="text-gray-600 text-sm">Resultado Operativo</div>
                  <div :class="{'text-green-600': diferencia >= 0, 'text-red-600': diferencia < 0}" class="text-xl font-semibold">
                    <span v-if="diferencia !== 'N/A'">
                      ${{ formatoMoneda(diferencia) }}
                    </span>
                    <span v-else>N/A</span>
                  </div>
                  <p class="text-gray-500 text-xs mt-1">
                    {{ diferencia >= 0 ? 'Superávit' : 'Déficit' }} operativo mensual
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8 p-4 bg-yellow-50 border border-yellow-200">
              <p class="text-sm text-yellow-800">
                <strong>Nota importante:</strong> El punto de equilibrio es una herramienta de análisis operativo que no considera:
              </p>
              <ul class="list-disc ml-5 mt-2 text-sm text-yellow-800">
                <li>Flujos de efectivo y timing de cobranzas</li>
                <li>Necesidades de capital de trabajo</li>
                <li>Inversiones en activos fijos</li>
                <li>Obligaciones financieras y tributarias</li>
              </ul>
            </div>
          </div>

          <!-- Gráficos -->
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-gray-700 mb-3">Gráficos</h2>
            <div class="grid grid-cols-1 gap-6">
              <div>
                <canvas ref="ventasChart"></canvas>
              </div>
              <div>
                <canvas ref="gastosChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //Modulos con carga diferida (optimizar  carga )
  components: {
    ServicesContabilidadCallToAction: () => import('~/components/ServicesContabilidadCallToAction.vue'),
    ServicesRemuneracionesCallToaction: () => import('~/components/ServicesRemuneracionesCallToaction.vue'),
    HomeWhyChooseUs: () => import('~/components/HomeWhyChooseUs.vue'),
    HomeModern: () => import('~/components/HomeModern.vue'),
    SiteClients: () => import('~/components/SiteClients.vue'),

  },
  layout: "default", // Diseño predeterminado

  // Configuración de etiquetas meta para SEO
  head() {
    return {
      title: "Simulador Financiero | Contabilidad San Vicente",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Ofrecemos una amplia gama de servicios contables y empresariales en San Vicente de Tagua Tagua. Explore nuestras soluciones y descubra cómo podemos ayudarle a prosperar.",
        },
        {
          hid: "keywords",
          name: "keywords", 
          content:
            "Servicios Integrales, San Vicente de Tagua Tagua, Bienvenida, Soluciones Contables, Asesoramiento Contable",
        },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js' }
      ]
    };
  },

  data() {
    return {
      simulador: {
        costoVenta: 3,
        costoInsumos: 22,
        sueldos: 3000000,
        honorarios: 700000,
        costosFijos: 4000000,
        convenios: 300000,
        creditos: 1500000,
        ventaReal: 700000,
        otrosGastos: []
      },
      ventasChart: null,
      gastosChart: null,
      nuevoGasto: {
        descripcion: '',
        valor: 0
      }
    }
  },

  computed: {
    totalOtrosGastos() {
      return this.simulador.otrosGastos.reduce((total, gasto) => total + (gasto.valor || 0), 0);
    },
    puntoEquilibrio() {
      const total_costos_variables = (this.simulador.costoVenta + this.simulador.costoInsumos) / 100;
      const total_costos_fijos = this.simulador.sueldos + this.simulador.honorarios + 
                               this.simulador.costosFijos + this.simulador.convenios + 
                               this.simulador.creditos + this.totalOtrosGastos;
      if (1 - total_costos_variables <= 0) {
        return 'Indeterminado';
      }
      return total_costos_fijos / (1 - total_costos_variables);
    },
    diferencia() {
      if (typeof this.puntoEquilibrio === 'string') {
        return 'N/A';
      }
      return this.simulador.ventaReal - this.puntoEquilibrio;
    },
    gastosTotales() {
      return {
        'Costo Venta': this.simulador.costoVenta * 1000,
        'Costo Insumos': this.simulador.costoInsumos * 1000,
        'Sueldos': this.simulador.sueldos,
        'Honorarios': this.simulador.honorarios,
        'Costos Fijos': this.simulador.costosFijos,
        'Convenios': this.simulador.convenios,
        'Créditos': this.simulador.creditos,
        'Otros Gastos': this.totalOtrosGastos
      };
    },
    costosVariablesTotales() {
      return this.simulador.costoVenta + this.simulador.costoInsumos;
    },
    costosFijosTotales() {
      return this.simulador.sueldos + 
             this.simulador.honorarios + 
             this.simulador.costosFijos + 
             this.simulador.convenios + 
             this.simulador.creditos + 
             this.totalOtrosGastos;
    }
  },

  methods: {
    formatoMoneda(valor) {
      if (typeof valor === 'number') {
        return valor.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      }
      return valor;
    },
    agregarGasto() {
      if (this.nuevoGasto.descripcion && this.nuevoGasto.valor > 0) {
        this.simulador.otrosGastos.push({
          descripcion: this.nuevoGasto.descripcion,
          valor: this.nuevoGasto.valor
        });
        // Limpiar el formulario
        this.nuevoGasto.descripcion = '';
        this.nuevoGasto.valor = 0;
      }
    },
    eliminarGasto(index) {
      this.simulador.otrosGastos.splice(index, 1);
    },
    inicializarGraficos() {
      if (!process.client) return; // Verificar que estamos en el cliente

      const ctxVentas = this.$refs.ventasChart.getContext('2d');
      this.ventasChart = new Chart(ctxVentas, {
        type: 'bar',
        data: {
          labels: ['Comparación de Ventas'],
          datasets: [
            {
              label: 'Venta Requerida',
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              data: [this.puntoEquilibrio !== 'Indeterminado' ? this.puntoEquilibrio : 0]
            },
            {
              label: 'Venta Real',
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              data: [this.simulador.ventaReal]
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function(value) { return '$' + value.toLocaleString(); }
              }
            }]
          }
        }
      });

      const ctxGastos = this.$refs.gastosChart.getContext('2d');
      this.gastosChart = new Chart(ctxGastos, {
        type: 'doughnut',
        data: {
          labels: Object.keys(this.gastosTotales),
          datasets: [{
            data: Object.values(this.gastosTotales),
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
              '#9966FF', '#FF9F40', '#C9CBCF', '#8BC34A'
            ]
          }]
        },
        options: {
          responsive: true
        }
      });
    },
    actualizarGraficos() {
      if (!this.ventasChart || !this.gastosChart) return;

      this.ventasChart.data.datasets[0].data = [
        this.puntoEquilibrio !== 'Indeterminado' ? this.puntoEquilibrio : 0
      ];
      this.ventasChart.data.datasets[1].data = [this.simulador.ventaReal];
      this.ventasChart.update();

      this.gastosChart.data.labels = Object.keys(this.gastosTotales);
      this.gastosChart.data.datasets[0].data = Object.values(this.gastosTotales);
      this.gastosChart.update();
    },
    descargarExcel() {
      const headers = [
        "Concepto", "Valor",
        "Costo Venta (%)", this.simulador.costoVenta,
        "Costo Insumos (%)", this.simulador.costoInsumos,
        "Sueldos ($)", this.simulador.sueldos,
        "Honorarios ($)", this.simulador.honorarios,
        "Costos Fijos ($)", this.simulador.costosFijos,
        "Convenios ($)", this.simulador.convenios,
        "Créditos ($)", this.simulador.creditos,
        "Venta Real ($)", this.simulador.ventaReal,
        "Punto de Equilibrio ($)", this.puntoEquilibrio,
        "Diferencia ($)", this.diferencia
      ];
      let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";
      this.simulador.otrosGastos.forEach(gasto => {
        csvContent += `${gasto.descripcion},${gasto.valor}\n`;
      });
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "resultados_simulador.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },

  watch: {
    simulador: {
      handler() {
        this.actualizarGraficos();
      },
      deep: true
    }
  },

  mounted() {
    // Asegurarse de que Chart.js esté cargado antes de inicializar
    if (process.client) {
      if (typeof Chart !== 'undefined') {
        this.inicializarGraficos();
      } else {
        const checkChart = setInterval(() => {
          if (typeof Chart !== 'undefined') {
            this.inicializarGraficos();
            clearInterval(checkChart);
          }
        }, 100);
      }
    }
  }
};
</script>

<style scoped>
.input-group {
  @apply space-y-2;
}

.input-label {
  @apply block text-sm font-medium;
}

.input-field {
  @apply border border-gray-300 px-4 py-2.5 
         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
         outline-none transition-all duration-200
         bg-white;
}

/* Eliminar flechas de inputs numéricos */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
input[type=number] {
  -moz-appearance: textfield;
}

/* Estilos para el slider */
.slider-input {
  @apply w-full h-2 rounded-full appearance-none bg-gray-200 outline-none;
  position: relative;
  z-index: 2;
}

.slider-track {
  @apply h-2 bg-blue-500 rounded-full absolute left-0 top-0;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

.slider-input::-webkit-slider-thumb {
  @apply w-6 h-6 bg-white rounded-full border-2 border-blue-500 appearance-none cursor-pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}

.slider-input::-webkit-slider-thumb:hover {
  @apply border-blue-600;
  transform: scale(1.1);
}

.slider-input::-webkit-slider-thumb:active {
  @apply border-blue-700;
  transform: scale(0.95);
}
</style>
