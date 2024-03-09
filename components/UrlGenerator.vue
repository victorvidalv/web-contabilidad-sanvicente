<template>
    <div>

<div class="flex justify-end bg-white p-2 ">
  
<button @click="show = 1" v-if="show === 0">¿Generar URL?</button>
<button @click="show = 0" v-if="show === 1">Ocultar</button>



</div> 
 




    <div class="bg-white p-2 border border-gray-300 shadow-sm" v-if="show === 1">
        <p class="text-lg font-semibold mb-4">Generador URLs</p>
        <p class="text-lg  mb-4">Genera una Url personaliza para pre completar campos del Generador de poderes.</p>

        <div class="mb-4">
            <label for="nombre" class="block text-sm font-medium text-gray-700">Nombres Representante</label>
            <input type="text" id="nombre" v-model="nombre" class="input-custom" placeholder="Nombres Representante">
        </div>

        <div class="mb-4">
            <label for="apellido" class="block text-sm font-medium text-gray-700">Apellidos Representante</label>
            <input type="text" id="apellido" v-model="apellido" class="input-custom" placeholder="Apellidos Representante">
        </div>

        <div class="mb-4">
            <label for="empresa" class="block text-sm font-medium text-gray-700">Empresa</label>
            <input type="text" id="empresa" v-model="empresa" class="input-custom" placeholder="Nombre de la empresa">
        </div>

        <div class="mb-4">
            <label for="atiende" class="block text-sm font-medium text-gray-700">Atiende</label>
            <select id="atiende" v-model="atiende" class="input-custom">
                <option value="ninguno" selected>ninguno</option>
                <option value="venessa">Vanessa</option>
                <option value="camila">Camila</option>
                <option value="carmen">Carmen</option>
            </select>
        </div>

        <div class="mb-4">
            <label for="oficina" class="inline-flex items-center">
                <input type="checkbox" id="oficina" v-model="oficina" value="si" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <span class="ml-2">Usa Oficina San Vicente</span>
            </label>
        </div>

        <button @click="generarUrl" class="btn-yes">Generar URL</button>

         <div class="" v-if="url !== ''">
                ...
                <p class="mt-4 text-sm text-gray-500">{{url}}</p>
                <!-- Botón Copiar URL -->
                <button @click="copiarUrl" class="btn-no">Copiar URL</button>
            </div>


    </div></div></div>
</template>

<script>
export default {
    data() {
        return {
            nombre: '',
            apellido: '',
            empresa: '',
            atiende: 'ninguno', // Establecido como 'ninguno' por defecto si eso es lo deseado
            oficina: false, // Asumiendo que 'oficina' es un valor booleano (si/no). Cambiar según sea necesario.
            url: '',
            show:0
        }
    },

    methods: {
        generarUrl() {
            // Función de ayuda para codificar valores o asignar %20 si están vacíos
            const codificarOAsignarEspacio = valor => valor ? encodeURIComponent(valor) : '%20';

            let nombreCodificado = codificarOAsignarEspacio(this.nombre);
            let apellidoCodificado = codificarOAsignarEspacio(this.apellido);
            let empresaCodificada = codificarOAsignarEspacio(this.empresa);
            let atiendeCodificado = codificarOAsignarEspacio(this.atiende);
            let oficinaCodificados = this.oficina ? 'si' : '%20'; // Ajusta esta lógica si 'oficina' maneja múltiples valores

            this.url = `https://contabilidadsanvicente.cl/herramientas/?nombre=${nombreCodificado}&apellido=${apellidoCodificado}&empresa=${empresaCodificada}&atiende=${atiendeCodificado}&oficina=${oficinaCodificados}`;
            console.log(this.url);
        },
        copiarUrl() {
                    // Verifica si la URL no es 'no url'
                    if(this.url && this.url !== 'no url') {
                        // Crea un elemento input temporal
                        const el = document.createElement('textarea');
                        // Asigna la URL al elemento
                        el.value = this.url;
                        // Evita que el elemento sea visible
                        el.setAttribute('readonly', '');
                        el.style.position = 'absolute';
                        el.style.left = '-9999px';
                        document.body.appendChild(el);
                        // Selecciona el contenido del elemento
                        el.select();
                        // Copia el contenido seleccionado al portapapeles
                        document.execCommand('copy');
                        // Elimina el elemento temporal del documento
                        document.body.removeChild(el);
                        // Opcional: muestra una notificación o mensaje al usuario
                        alert('URL copiada al portapapeles');
                    } else {
                        // Opcional: manejar el caso en que no hay URL para copiar
                        alert('No hay URL para copiar');
                    }}
    }
}
</script>

<style scoped>
/* En tu archivo CSS (por ejemplo, main.css) */
.btn-yes {
  @apply mt-5 bg-blue-950 hover:bg-blue-800 text-white py-2 px-4 my-2 mr-5;
}

.img-custom {
  @apply w-full h-auto
}

.input-custom {
  @apply w-full p-2 border rounded mt-2;
}

.btn-no {
  @apply mt-5 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 my-2;
}

.question {
  @apply text-2xl mb-2;
}

.text-info {
  @apply text-sm text-gray-500 mt-10
}

li {
  @apply flex items-center space-x-3 mb-3;
}
</style>