<template>
    <div class="container mx-auto my-10 p-5 border">
      <h1 class="text-2xl font-bold mb-5">Calculadora de Facturas con IVA</h1>
      <div class="mb-4">
        <label for="monto" class="block text-sm font-medium text-gray-600">Monto Base:</label>
        <input id="monto" type="number" v-model="montoBase" @input="calcular" class="mt-1 p-2 w-full border rounded-md" />
      </div>
  
      <div class="mt-5">
        <h3 class="text-xl font-semibold">Pesos Chilenos</h3>
  
        <h4 class="text-lg font-semibold mt-3">Valor Total y Desglose</h4>
        <div>
          <p>Valor Neto: ${{ valorNeto }}</p>
          <p>IVA (19%): ${{ iva }}</p>
          <p>Valor Total de la Factura: ${{ valorTotal }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        montoBase: null,
        valorNeto: 0,
        iva: 0,
        valorTotal: 0,
      };
    },
    methods: {
      calcular() {
        if (!this.montoBase) return;
  
        // Cálculos para el IVA y el valor total
        this.valorNeto = Math.round(this.montoBase);
        this.iva = Math.round(this.montoBase * 0.19);
        this.valorTotal = Math.round(parseFloat(this.montoBase) + parseFloat(this.iva));
      },
    },
  };
  </script>
  
  <style scoped>
  /* Puedes añadir estilos adicionales aquí si lo deseas */
  </style>
  