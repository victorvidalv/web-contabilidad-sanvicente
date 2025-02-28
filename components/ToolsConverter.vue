<!-- HTML -->
<template>
  <div class="container mx-auto my-10 p-5 border">
    <h1 class="text-2xl font-bold mb-5">Conversor de Monedas</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Entrada del monto -->
      <div class="mb-4">
        <label for="monto" class="block text-sm font-medium text-gray-600">Monto:</label>
        <input id="monto" type="number" v-model="monto" @input="convertir"
          class="mt-1 p-2 w-full border rounded-md" placeholder="Ingrese monto" />
      </div>
      
      <!-- Selector de unidad de origen -->
      <div class="mb-4">
        <label for="unidadOrigen" class="block text-sm font-medium text-gray-600">De:</label>
        <select id="unidadOrigen" v-model="unidadOrigen" @change="convertir"
          class="mt-1 p-2 w-full border rounded-md">
          <option value="peso">Peso Chileno (CLP)</option>
          <option value="dolar">Dólar (USD)</option>
          <option value="euro">Euro (EUR)</option>
          <option value="uf">UF</option>
          <option value="utm">UTM</option>
        </select>
      </div>
      
      <!-- Selector de unidad de destino -->
      <div class="mb-4">
        <label for="unidadDestino" class="block text-sm font-medium text-gray-600">A:</label>
        <select id="unidadDestino" v-model="unidadDestino" @change="convertir"
          class="mt-1 p-2 w-full border rounded-md">
          <option value="peso">Peso Chileno (CLP)</option>
          <option value="dolar">Dólar (USD)</option>
          <option value="euro">Euro (EUR)</option>
          <option value="uf">UF</option>
          <option value="utm">UTM</option>
        </select>
      </div>
    </div>
    
    <!-- Resultado de la conversión -->
    <div class="p-5 border rounded-md bg-gray-50 mb-6">
      <h2 class="text-xl font-bold mb-2">Resultado</h2>
      <div v-if="monto && resultado !== null">
        <p class="text-lg">
          {{ formatNumber(monto) }} {{ getUnidadLabel(unidadOrigen) }} = 
          <span class="font-bold">{{ formatNumber(resultado) }} {{ getUnidadLabel(unidadDestino) }}</span>
        </p>
      </div>
      <div v-else>
        <p class="text-gray-500">Ingrese un monto para ver el resultado</p>
      </div>
    </div>
    
    <!-- Tabla de valores actuales -->
    <div class="mt-6">
      <h3 class="text-lg font-medium mb-3">Valores actuales</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-3 border rounded-md">
          <h3 class="font-medium">Dólar Observado</h3>
          <p v-if="valores.dolar">1 USD = ${{ formatNumber(valores.dolar) }} CLP</p>
        </div>
        
        <div class="p-3 border rounded-md">
          <h3 class="font-medium">UF (Unidad de Fomento)</h3>
          <p v-if="valores.uf">1 UF = ${{ formatNumber(valores.uf) }} CLP</p>
        </div>
        
        <div class="p-3 border rounded-md">
          <h3 class="font-medium">Euro</h3>
          <p v-if="valores.euro">1 EUR = ${{ formatNumber(valores.euro) }} CLP</p>
        </div>
        
        <div class="p-3 border rounded-md">
          <h3 class="font-medium">UTM (Unidad Tributaria Mensual)</h3>
          <p v-if="valores.utm">1 UTM = ${{ formatNumber(valores.utm) }} CLP</p>
        </div>
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
      monto: null,           // Monto ingresado por el usuario
      unidadOrigen: 'peso',  // Unidad de origen seleccionada por defecto
      unidadDestino: 'uf',   // Unidad de destino seleccionada por defecto
      resultado: null,       // Resultado de la conversión
      valores: {              // Valores de las diferentes monedas/unidades
        dolar: null,
        uf: null,
        euro: null,
        utm: null
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
        if (this.monto) {
          this.convertir();
        }
      } catch (error) {
        console.error('Hubo un error al obtener los datos financieros:', error);
      }
    },
    
    convertir() {
      // Verificar que el monto y los valores estén disponibles
      if (!this.monto) {
        this.resultado = null;
        return;
      }
      
      // Primero convertir a pesos chilenos
      let valorEnPesos;
      switch (this.unidadOrigen) {
        case 'peso':
          valorEnPesos = this.monto;
          break;
        case 'dolar':
          valorEnPesos = this.monto * this.valores.dolar;
          break;
        case 'euro':
          valorEnPesos = this.monto * this.valores.euro;
          break;
        case 'uf':
          valorEnPesos = this.monto * this.valores.uf;
          break;
        case 'utm':
          valorEnPesos = this.monto * this.valores.utm;
          break;
      }
      
      // Luego convertir de pesos a la unidad de destino
      switch (this.unidadDestino) {
        case 'peso':
          this.resultado = valorEnPesos;
          break;
        case 'dolar':
          this.resultado = valorEnPesos / this.valores.dolar;
          break;
        case 'euro':
          this.resultado = valorEnPesos / this.valores.euro;
          break;
        case 'uf':
          this.resultado = valorEnPesos / this.valores.uf;
          break;
        case 'utm':
          this.resultado = valorEnPesos / this.valores.utm;
          break;
      }
      
      // Formatear el resultado dependiendo de la unidad
      if (this.unidadDestino === 'peso' || this.unidadDestino === 'dolar' || this.unidadDestino === 'euro') {
        this.resultado = parseFloat(this.resultado.toFixed(2));
      } else {
        this.resultado = parseFloat(this.resultado.toFixed(4));
      }
    },
    
    getUnidadLabel(unidad) {
      switch (unidad) {
        case 'peso':
          return 'CLP';
        case 'dolar':
          return 'USD';
        case 'euro':
          return 'EUR';
        case 'uf':
          return 'UF';
        case 'utm':
          return 'UTM';
        default:
          return '';
      }
    },
    
    formatNumber(num) {
      if (!num && num !== 0) return '-';
      return new Intl.NumberFormat('es-CL').format(num);
    }
  }
};
</script>
