<template>
    <div class="container mx-auto my-10 p-5 border">
      <h1 class="text-2xl font-bold mb-5">Indicadores Económicos de Chile</h1>
      
      <table class="min-w-full bg-white ">
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="w-1/4 py-2">Nombre</th>
            <th class="w-1/4 py-2">Valor</th>
            <th class="w-1/4 py-2">Unidad de Medida</th>
            <th class="w-1/4 py-2">Fecha</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr v-for="(item, key) in indicadores" :key="key" class="border-b">
            <td class="py-2 px-4">{{ item.nombre }}</td>
            <td class="py-2 px-4">{{ item.valor }}</td>
            <td class="py-2 px-4">{{ item.unidad_medida }}</td>
            <td class="py-2 px-4">{{ item.fecha }}</td>
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
        indicadores: null,
      };
    },
    async created() {
      try {
        const response = await axios.get('https://mindicador.cl/api');
        this.indicadores = response.data;
        delete this.indicadores.version;
        delete this.indicadores.autor;
        delete this.indicadores.fecha;
        delete this.indicadores.dolar_intercambio;
      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
      }
    }
  };
  </script>
  
  