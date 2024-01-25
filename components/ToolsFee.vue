<!--  HTML -->
<template>
  <div class="container mx-auto my-10 p-5 border">
    <h1 class="text-2xl font-bold mb-5">Calculadora de Boletas de Honorarios</h1>

    <!-- Opciones para el tipo de retención -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-600 ">Tipo de Retención:</label>
      <div @change="calcular">
        <input class="p-5" type="radio" id="retencion_2023" value="13" v-model="porcentaje_retencion"
          name="tipo_retencion">
        <label for="retencion_2023">2024 - 13.75%</label>
        |
        <input class="p-5" type="radio" id="retencion_bono_covid" value="16" v-model="porcentaje_retencion"
          name="tipo_retencion">
        <label for="retencion_bono_covid">Préstamo solidario - 16%</label>
      </div>
    </div>

    <!-- Entrada para el monto a convertir -->
    <div class="mb-4">
      <label for="monto" class="block text-sm font-medium text-gray-600">Monto a Convertir:</label>
      <input id="monto" type="number" v-model="monto_convertir" @input="calcular" class="mt-1 p-2 w-full border " />
    </div>



    <!-- Resultados -->
    <div class="mt-5 grid grid-cols-2 gap-4">
      <div class="border p-4 ">
        <h3 class="text-xl font-semibold">Valor Líquido</h3>

        <div>
          <p>Debes hacer la Boleta por: $ {{ boleta_liquido.toLocaleString() }}</p>
          <p>Recibirás un Pago de: $ {{ recibir_liquido.toLocaleString() }}</p>
          <p>Retención SII: $ {{ retencion_liquido.toLocaleString() }}</p>
        </div>
      </div>
      <div class="border p-4 ">
        <h3 class="text-xl font-semibold">Valor Bruto</h3>

        <div>
          <p>Debes hacer la Boleta por: $ {{ boleta_bruto.toLocaleString() }}</p>
          <p>Recibirás un Pago de: $ {{ recibir_bruto.toLocaleString() }}</p>
          <p>Retención SII: $ {{ retencion_bruto.toLocaleString() }}</p>
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
      porcentaje_retencion: 1375/100,  // Porcentaje de retención, por defecto 13.75%
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

