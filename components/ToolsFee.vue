<template>
    <div class="container mx-auto my-10 p-5 border">
      <h1 class="text-2xl font-bold mb-5">Calculadora de Boletas de Honorarios</h1>
      <div class="mb-4">
        <label for="monto" class="block text-sm font-medium text-gray-600">Monto a Convertir:</label>
        <input id="monto" type="number" v-model="montoConvertir" @input="calcular" class="mt-1 p-2 w-full border rounded-md" />
      </div>



      <div class="mb-4">
  <label class="block text-sm font-medium text-gray-600 p-5">Tipo de Retención:</label>
  <div @change="calcular">
    <input class="p-5" type="radio" id="retencion2023" value="13" v-model="porcentajeRetencion" name="tipoRetencion">
    <label for="retencion2023">2023 - 13%</label>
|
    <input class="p-5" type="radio" id="retencionBonoCovid" value="16" v-model="porcentajeRetencion" name="tipoRetencion">
    <label for="retencionBonoCovid">Bono Covid - 16%</label>
  </div>
</div>


  
      <div class="mt-5">
        <h3 class="text-xl font-semibold">Pesos Chilenos</h3>
  
        <h4 class="text-lg font-semibold mt-3">Valor Líquido</h4>
        <div>
          <p>Debes hacer la Boleta por: ${{ boletaLiquido }}</p>
          <p>Recibirás un Pago de: ${{ recibirLiquido }}</p>
          <p>Retención SII: ${{ retencionLiquido }}</p>
        </div>
  
        <h4 class="text-lg font-semibold mt-3">Valor Bruto</h4>
        <div>
          <p>Debes hacer la Boleta por: ${{ boletaBruto }}</p>
          <p>Recibirás un Pago de: ${{ recibirBruto }}</p>
          <p>Retención SII: ${{ retencionBruto }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {

    data() {
      return {
        montoConvertir: null,
        porcentajeRetencion: 13, // Por defecto es 13%
        boletaLiquido: 0,
        recibirLiquido: 0,
        retencionLiquido: 0,
        boletaBruto: 0,
        recibirBruto: 0,
        retencionBruto: 0
      };
    },
    methods: {
      calcular() {
        if (!this.montoConvertir || !this.porcentajeRetencion) return;
  
        const tasaImpuesto = this.porcentajeRetencion / 100;
  
        // Cálculos para valor líquido
        this.boletaLiquido = Math.round(this.montoConvertir);
        this.retencionLiquido = Math.round(this.montoConvertir * tasaImpuesto);
        this.recibirLiquido = Math.round(this.montoConvertir - this.retencionLiquido);
  
        // Cálculos para valor bruto
        this.boletaBruto = Math.round(this.montoConvertir / (1 - tasaImpuesto));
        this.retencionBruto = Math.round(this.boletaBruto * tasaImpuesto);
        this.recibirBruto = Math.round(this.boletaBruto - this.retencionBruto);
      }
    }
  };
  </script>

