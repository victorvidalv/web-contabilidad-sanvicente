<template>
  <div class="container mx-auto my-12 p-8 border border-gray-200 bg-white">
    <h1 class="text-3xl font-light mb-8">Calculadora de Boletas de Honorarios Chile 2025</h1>
    
    <!-- Opciones para el tipo de retención -->
    <div class="mb-6">
      <h2 class="text-base font-medium text-gray-700 mb-3">Seleccione el tipo de retención:</h2>
      <div class="flex gap-8" @change="calcular">
        <div class="flex items-center">
          <input class="mr-2" type="radio" id="retencion_2025" value="14.5" v-model="porcentaje_retencion"
            name="tipo_retencion">
          <label class="text-gray-600" for="retencion_2025">Retención estándar 2025 (14.5%)</label>
        </div>
        <div class="flex items-center">
          <input class="mr-2" type="radio" id="retencion_prestamo_solidario" value="17.5" v-model="porcentaje_retencion"
            name="tipo_retencion">
          <label class="text-gray-600" for="retencion_prestamo_solidario">Con préstamo solidario (17.5%)</label>
        </div>
      </div>
    </div>

    <!-- Entrada para el monto -->
    <div class="mb-8">
      <label for="monto" class="block text-base font-medium text-gray-700 mb-2">Ingrese el monto a calcular:</label>
      <input 
        id="monto" 
        type="number" 
        v-model="monto_convertir" 
        @input="calcular" 
        class="w-full p-3 border border-gray-300 focus:border-gray-500 outline-none transition-colors" 
        placeholder="Ejemplo: 500000"
      />
    </div>

    <!-- Resultados -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border border-gray-200 p-6">
        <h2 class="text-2xl font-light mb-4">Cálculo Valor Líquido</h2>
        <div class="space-y-3">
          <p class="text-gray-600">Monto boleta: <span class="font-medium text-gray-900">$ {{ boleta_liquido.toLocaleString() }}</span></p>
          <p class="text-gray-600">Monto a recibir: <span class="font-medium text-gray-900">$ {{ recibir_liquido.toLocaleString() }}</span></p>
          <p class="text-gray-600">Retención SII: <span class="font-medium text-gray-900">$ {{ retencion_liquido.toLocaleString() }}</span></p>
        </div>
      </div>
      
      <div class="border border-gray-200 p-6">
        <h2 class="text-2xl font-light mb-4">Cálculo Valor Bruto</h2>
        <div class="space-y-3">
          <p class="text-gray-600">Monto boleta: <span class="font-medium text-gray-900">$ {{ boleta_bruto.toLocaleString() }}</span></p>
          <p class="text-gray-600">Monto a recibir: <span class="font-medium text-gray-900">$ {{ recibir_bruto.toLocaleString() }}</span></p>
          <p class="text-gray-600">Retención SII: <span class="font-medium text-gray-900">$ {{ retencion_bruto.toLocaleString() }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monto_convertir: null,  // Monto que el usuario desea convertir
      porcentaje_retencion: 14.5,  // Porcentaje de retención, por defecto 14.5%
      boleta_liquido: 0,
      recibir_liquido: 0,
      retencion_liquido: 0,
      boleta_bruto: 0,
      recibir_bruto: 0,
      retencion_bruto: 0
    };
  },
  methods: {
    calcular() {
      // Verificar que los valores necesarios estén disponibles
      if (!this.monto_convertir || !this.porcentaje_retencion) return;

      // Convertir el porcentaje a tasa decimal
      const tasa_impuesto = this.porcentaje_retencion / 100;

      // Cálculos para el valor líquido
      this.boleta_liquido = Math.round(this.monto_convertir);
      this.retencion_liquido = Math.round(this.monto_convertir * tasa_impuesto);
      this.recibir_liquido = Math.round(this.monto_convertir - this.retencion_liquido);

      // Cálculos para el valor bruto
      this.boleta_bruto = Math.round(this.monto_convertir / (1 - tasa_impuesto));
      this.retencion_bruto = Math.round(this.boleta_bruto * tasa_impuesto);
      this.recibir_bruto = Math.round(this.boleta_bruto - this.retencion_bruto);
    }
  }
};
</script>