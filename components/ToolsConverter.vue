<!-- HTML -->
<template>
  <div class="container mx-auto my-10 p-5 border">
    <h1 class="text-2xl font-bold mb-5">Conversor de Monedas</h1>
    
    <div class="mb-4">
      <label for="monto" class="block text-sm font-medium text-gray-600">Monto en pesos chilenos:</label>
      <input id="monto" type="number" v-model="montoPesos" @input="convertirDesdesPesos"
        class="mt-1 p-2 w-full border rounded-md" placeholder="Ingrese monto en pesos" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <!-- Resultados de las conversiones -->
      <div class="p-3 border rounded-md">
        <h3 class="font-medium">Dólar Observado</h3>
        <p v-if="valores.dolar">1 USD = ${{ formatNumber(valores.dolar) }} CLP</p>
        <p>{{ formatNumber(resultados.dolar) }} USD</p>
      </div>
      
      <div class="p-3 border rounded-md">
        <h3 class="font-medium">UF (Unidad de Fomento)</h3>
        <p v-if="valores.uf">1 UF = ${{ formatNumber(valores.uf) }} CLP</p>
        <p>{{ formatNumber(resultados.uf) }} UF</p>
      </div>
      
      <div class="p-3 border rounded-md">
        <h3 class="font-medium">Euro</h3>
        <p v-if="valores.euro">1 EUR = ${{ formatNumber(valores.euro) }} CLP</p>
        <p>{{ formatNumber(resultados.euro) }} EUR</p>
      </div>
      
      <div class="p-3 border rounded-md">
        <h3 class="font-medium">UTM (Unidad Tributaria Mensual)</h3>
        <p v-if="valores.utm">1 UTM = ${{ formatNumber(valores.utm) }} CLP</p>
        <p>{{ formatNumber(resultados.utm) }} UTM</p>
      </div>
    </div>
    
    <div class="mt-6">
      <p class="text-sm text-gray-500">Último valor obtenido: {{ fechaActualizacion }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      montoPesos: null,       // Monto en pesos ingresado por el usuario
      valores: {              // Valores de las diferentes monedas/unidades
        dolar: null,
        uf: null,
        euro: null,
        utm: null
      },
      resultados: {           // Resultados de las conversiones
        dolar: 0,
        uf: 0,
        euro: 0,
        utm: 0
      },
      fechaActualizacion: ''  // Fecha de actualización de los valores
    };
  },
  async created() {
    await this.obtenerValores();
  },
  methods: {
    async obtenerValores() {
      try {
        // Obtener los valores desde la API
        const response = await axios.get('https://mindicador.cl/api');
        
        // Guardar los valores obtenidos
        this.valores.dolar = response.data.dolar.valor;
        this.valores.uf = response.data.uf.valor;
        this.valores.euro = response.data.euro.valor;
        this.valores.utm = response.data.utm.valor;
        
        // Formatear la fecha de actualización
        const fecha = new Date(response.data.fecha);
        this.fechaActualizacion = fecha.toLocaleString('es-CL');
        
        // Realizar conversión inicial si hay un monto
        if (this.montoPesos) {
          this.convertirDesdesPesos();
        }
      } catch (error) {
        console.error('Hubo un error al obtener los datos financieros:', error);
      }
    },
    
    convertirDesdesPesos() {
      // Verificar que el monto y los valores estén disponibles
      if (!this.montoPesos) {
        this.resetearResultados();
        return;
      }
      
      // Conversión de moneda (de pesos chilenos a otras unidades)
      if (this.valores.dolar) {
        this.resultados.dolar = parseFloat((this.montoPesos / this.valores.dolar).toFixed(2));
      }
      
      if (this.valores.uf) {
        this.resultados.uf = parseFloat((this.montoPesos / this.valores.uf).toFixed(4));
      }
      
      if (this.valores.euro) {
        this.resultados.euro = parseFloat((this.montoPesos / this.valores.euro).toFixed(2));
      }
      
      if (this.valores.utm) {
        this.resultados.utm = parseFloat((this.montoPesos / this.valores.utm).toFixed(4));
      }
    },
    
    resetearResultados() {
      this.resultados.dolar = 0;
      this.resultados.uf = 0;
      this.resultados.euro = 0;
      this.resultados.utm = 0;
    },
    
    formatNumber(num) {
      if (!num && num !== 0) return '-';
      return new Intl.NumberFormat('es-CL').format(num);
    }
  }
};
</script>
