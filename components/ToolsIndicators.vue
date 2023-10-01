<!-- HTML -->
<template>
  <div class="container mx-auto my-10 p-5 border">
    <h1 class="text-2xl font-bold mb-5">Indicadores Económicos de Chile</h1>
    <table class="min-w-full bg-white">
      <thead class="bg-blue-500 text-white">
        <tr>
          <th class="w-1/4 py-2 text-justify">Nombre</th>
          <th class="w-1/4 py-2 text-justify">Valor</th>
          <th class="w-1/4 py-2 text-justify">Unidad de Medida</th>
          <th class="w-1/4 py-2 text-justify">Fecha</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr v-for="(item, key) in indicadores_filtrados" :key="key" class="border-b">
          <td class="py-2 px-4 text-justify">{{ item.nombre }}</td>
          <td class="py-2 px-4 text-justify">{{ item.valor }}</td>
          <td class="py-2 px-4 text-justify">{{ item.unidad_medida }}</td>
            <td class="py-2 px-4 text-justify">{{ new Date(item.fecha).toLocaleDateString('es-CL') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      indicadores: {},  // Inicializamos como un objeto vacío en lugar de null
    };
  },
  computed: {
    indicadores_filtrados() {
      if (this.indicadores) {  // Comprobamos si 'this.indicadores' no es null o undefined
        const campos_no_deseados = ['version', 'autor', 'fecha', 'dolar_intercambio'];
        return Object.fromEntries(
          Object.entries(this.indicadores).filter(([key]) => !campos_no_deseados.includes(key))
        );
      }
      return {};  // Retornamos un objeto vacío si 'this.indicadores' es null o undefined
    }
  },
  async created() {
    try {
      const { data } = await axios.get('https://mindicador.cl/api');
      this.indicadores = data;
    } catch (error) {
      console.error('Hubo un error al obtener los datos:', error);
    }
  }
};
</script>

  
  