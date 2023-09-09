<template>
    <div class="container mx-auto my-10 p-5 border">
      <h1 class="text-2xl font-bold mb-5">Conversor a Dólar Observado</h1>
  
      <div class="mb-4">
        <label for="monto" class="block text-sm font-medium text-gray-600">Monto a Convertir:</label>
        <input id="monto" type="number" v-model="monto" @input="convertir" class="mt-1 p-2 w-full border rounded-md" />
      </div>
  
      <div class="mt-5">
        <p>Resultado Dolar a Pesos: ${{ resultadoPesos }}</p>
        <p>Resultado  Pesos a Dólares: ${{ resultadoDolares }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        monto: null,
        dolarObservado: null,
        resultadoPesos: 0,
        resultadoDolares: 0
      };
    },
    async created() {
      try {
        const response = await axios.get('https://mindicador.cl/api');
        this.dolarObservado = response.data.dolar.valor;
      } catch (error) {
        console.error('Hubo un error al obtener los datos del dólar observado:', error);
      }
    },
    methods: {
      convertir() {
        if (!this.monto || !this.dolarObservado) return;
        this.resultadoPesos = Math.round(this.monto * this.dolarObservado);
        this.resultadoDolares = Math.round((this.monto / this.dolarObservado) * 100) / 100;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Puedes añadir estilos adicionales aquí si lo deseas */
  </style>
  