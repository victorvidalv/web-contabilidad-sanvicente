<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  

    <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
      <!-- Form Card -->
      <div class="flex flex-col border rounded-lg shadow-sm bg-white p-8">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
              <input 
                type="text" 
                class="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                placeholder="Tu nombre completo"
                v-model="form.name"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Consulta</label>
              <select 
                class="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                v-model="form.type"
              >
                <option value="Servicios">Servicios</option>
                <option value="Capacitaciones">Capacitación</option>
                <option value="Postulaciones">Postulaciones laborales</option>
                <option value="Otros">Otros</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email"
                class="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                placeholder="tu@email.com"
                v-model="form.email"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
              <input 
                type="tel"
                class="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                placeholder="+56 9 XXXX XXXX"
                v-model="form.phone"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea
                rows="4"
                class="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                placeholder="Escribe tu mensaje aquí..."
                v-model="form.message"
              ></textarea>
            </div>
          </div>

          <div class="text-center">
            <button
              v-if="state === ''"
              class="w-full px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-200 font-medium text-base"
              @click="submitForm"
            >
              Enviar consulta
            </button>
            <p class="mt-3 text-sm" :class="{'text-green-600': !reintentar, 'text-red-600': reintentar}">
              {{ state }}
            </p>
            <p v-if="reintentar === 1" class="mt-2">
              <span 
                @click="state = ''" 
                class="text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
              >
                Reintentar
              </span>
            </p>
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="bg-[#eeeeee]  p-8 space-y-6">
        <!-- Contact items here - update styling for each contact method -->
        <div class="flex gap-x-7 py-6">
          <a href="https://wa.me/56722746337?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n.">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-whatsapp text-green-600" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
          <div>
            <h3 class="font-semibold text-gray-800">WhatsApp</h3>
            <p class="mt-1 text-gray-500">Contáctenos directamente a nuestro WhatsApp:</p>
            <a class="mt-2 inline-flex items-center gap-x-2 font-medium text-gray-600" href="https://wa.me/56722746337?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n.">
              +56722746337
            </a>
          </div>
        </div>

        <div class="flex gap-x-7 py-6">
          <a href="https://wa.me/56722746337?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n.">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            </svg>
          </a>
          <div>
            <h3 class="font-semibold text-gray-800">Agenda Online</h3>
            <p class="mt-1 text-gray-500">Reserva tu reunión en línea</p>
            <a class="mt-2 inline-flex items-center gap-x-2 font-medium text-gray-600" href="https://www.tuu.cl/asesoriascontabilidadsanvicente">
              Agenda Online
            </a>
          </div>
        </div>

        <div class="flex gap-x-7 py-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          <div>
            <h3 class="font-semibold text-gray-800">Email</h3>
            <p class="mt-1 text-gray-500">Contáctenos vía email a:</p>
            <a class="mt-2 inline-flex items-center gap-x-2 font-medium text-gray-600" href="mailto:info@contabilidadsanvicente.cl">
              info@contabilidadsanvicente.cl
            </a>
          </div>
        </div>

        <div class="flex gap-x-7 py-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-inbound" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          <div>
            <h3 class="font-semibold text-gray-800">Teléfono Oficina</h3>
            <p class="mt-1 text-gray-500">Llámenos en horario de oficina al:</p>
            <a class="mt-2 inline-flex items-center gap-x-2 font-medium text-gray-600" href="tel:+56722746337">
              +56 722 746 337.
            </a>
          </div>
        </div>

        <div class="flex gap-x-7 py-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          <div>
            <h3 class="font-semibold text-gray-800">Visítenos:</h3>
            <p class="mt-1 text-gray-500">Coordine una visita a nuestra oficina</p>
            <a class="mt-2 inline-flex items-center gap-x-2 font-medium text-gray-600" href="#">
              German Riesco N° 900, Oficina N° 3, San Vicente de Tagua Tagua.
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Inicializar los datos del formulario con valores predeterminados vacíos
       state: '',
       reintentar: 0,
   
      form: {
        name: '',
        type: 'Servicios',
        email: '',
        phone: '',
        message: '',
       
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.$post('https://www.t2g.cl/apis/public/api/contact', this.form);
        // Manejar la respuesta aquí, por ejemplo, mostrando un mensaje de éxito
        console.log('Formulario enviado con éxito:', response);
  
        this.state = 'Consulta  enviada exitosamente';
        this.reintentar = 0;
    
      } catch (error) {
        // Manejar el error aquí, por ejemplo, mostrando un mensaje de error

        console.error('Error al enviar el formulario:', error);
        this.reintentar = 1;
        this.state = 'Error al enviar la consulta, revise los datos ingresados';

      }
    }
  }
}
</script>
