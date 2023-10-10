<!--  HTML -->
<template>
  <div class="container mx-auto my-10 p-5 border">
    <h1 class="text-2xl font-bold mb-5">Calculadora de Facturas con IVA</h1>
    <div class="mb-4">
      <label for="monto" class="block text-sm font-medium text-gray-600">Monto Base:</label>
      <input id="monto" type="number" v-model="monto_base" @input="calcular" class="mt-1 p-2 w-full border rounded-md" />
    </div>
    <div class="mt-5">
      <h3 class="text-xl font-semibold">Pesos Chilenos</h3>
      <h4 class="text-lg font-semibold mt-3">Valor Total y Desglose</h4>
      <div>
        <p>Valor Neto: ${{ valor_neto }}</p>
        <p>IVA (19%): ${{ iva }}</p>
        <p>Valor Total de la Factura: ${{ valor_total }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      monto_base: null,  // Monto base para el cálculo del IVA
      valor_neto: 0,  // Valor neto de la factura
      iva: 0,  // Valor del IVA
      valor_total: 0  // Valor total de la factura
    };
  },
  methods: {
    calcular() {
      if (!this.monto_base) return;  // Validar que el monto base esté establecido

      // Cálculo del valor neto, IVA y valor total de la factura
      this.valor_neto = Math.round(this.monto_base);
      this.iva = Math.round(this.monto_base * 0.19);
      this.valor_total = this.valor_neto + this.iva;
    },
  },
};

</script>