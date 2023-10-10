<!-- HTML -->
<template>
  <div class="container mx-auto my-10 p-5 border">
    <h1 class="text-2xl font-bold mb-5">Conversor a Dólar Observado</h1>
    <div class="mb-4">
      <label for="monto" class="block text-sm font-medium text-gray-600">Monto a Convertir:</label>
      <input id="monto" type="number" v-model="monto_a_convertir" @input="convertir"
        class="mt-1 p-2 w-full border rounded-md" />
    </div>
    <div class="mt-5">
      <p>Resultado Dólar a Pesos: ${{ resultado_pesos }}</p>
      <p>Resultado Pesos a Dólares: ${{ resultado_dolares }}</p>
    </div>
  </div>
</template>

  
<script>

import axios from 'axios';

export default {
  data() {
    return {
      monto_a_convertir: null,  // Monto ingresado por el usuario para convertir
      dolar_observado: null,    // Valor del dólar observado obtenido desde la API
      resultado_pesos: 0,       // Resultado de la conversión a pesos chilenos
      resultado_dolares: 0      // Resultado de la conversión a dólares estadounidenses
    };
  },
  async created() {
    try {
      // Obtener el valor del dólar observado desde la API
      const response = await axios.get('https://mindicador.cl/api');
      this.dolar_observado = response.data.dolar.valor;
    } catch (error) {
      console.error('Hubo un error al obtener los datos del dólar observado:', error);
    }
  },
  methods: {
    convertir() {
      // Verificar que el monto y el valor del dólar observado estén disponibles
      if (!this.monto_a_convertir || !this.dolar_observado) return;

      // Conversión de moneda
      this.resultado_pesos = Math.round(this.monto_a_convertir * this.dolar_observado);
      this.resultado_dolares = Math.round((this.monto_a_convertir / this.dolar_observado) * 100) / 100;
    }
  }
};

</script>
  