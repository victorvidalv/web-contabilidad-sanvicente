<template>

  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id="web">

    <form @submit.prevent="submitForm">

      <!-- 1 -->

      <ServicesQuote v-if="step < 2">

        <template #texto>

          <p class="question">Bienvenido</p>

          <p>Te acompañaremos paso a paso en la cotización del Servicio de Contabilidad Mensual.</p>

          <button @click="step = 2" class="btn-yes">Comenzar</button>

        </template>

      </ServicesQuote>

      <!-- 2 -->

      <ServicesQuote v-if="step === 2">

        <template #texto>

          <p class="question">Indicanos tu nombre</p>

          <input type="text" class="input-custom" placeholder="Nombre Apellido" v-model="name">

          <button @click="step = 3" class="btn-yes" v-if="name.length > 3">Continuar</button>

        </template>

      </ServicesQuote>

      <!-- 3 -->

      <ServicesQuote v-if="step === 3">

        <template #texto>

          <p class="question">¿Has contratado nuestros servicios previamente?</p>

          <button class="btn-yes" @click="step = 4, oldClient = 1">Sí, soy cliente</button>

          <button class="btn-no" @click="step = 4, oldClient = 0">No, aún no soy cliente</button>

          <p class="text-info">Cliente: Personas o empresas que han contratado nuestros servicios previamente.</p>

        </template>

      </ServicesQuote>

      <!-- 4 -->

      <ServicesQuote v-if="step === 4">

        <template #texto>
          <p class="question">Por favor completa los antecedentes:</p>

          <div class="input-wrapper py-2" v-if="oldClient === 0">
            <label for="company">Nombre de tu empresa</label>
            <input type="text" class="input-custom" placeholder="Nombre empresa" name="company" v-model="company">
          </div>

          <div class="input-wrapper py-2">
            <label for="rut">RUT de la empresa</label>
            <input type="text" class="input-custom" placeholder="RUT de tu empresa" name="rut" v-model="rut">
          </div>

          <div class="input-wrapper py-2">
            <label for="workers">Número trabajadores contratados</label>
            <input type="number" class="input-custom" placeholder="Número trabajadores contratados" name="workers"
              v-model="workers">
          </div>

          <div class="input-wrapper py-2" v-if="oldClient === 0">
            <label for="phone">Número de teléfono</label>
            <input type="phone" class="input-custom" placeholder="Número de teléfono" name="phone" v-model="phone">
          </div>

          <div class="input-wrapper py-2">
            <label for="email">Correo electrónico</label>
            <input type="email" class="input-custom" placeholder="Correo electrónico" name="email" v-model="email">
          </div>

          <div class="input-wrapper py-2">
            <button class="btn-yes" @click="step = 5" v-if="email.length > 3">Continuar</button>
          </div>



          <p class="text-info">Las personas naturales que funcionen como empresa individual, deberán ingresar su RUT
            personal.</p>

        </template>

      </ServicesQuote>

      <!-- 5 -->

      <ServicesQuote v-if="step === 5">

        <template #texto>
          <p class="question">¿Qué plan se ajusta a tus necesidades?</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 mt-2">
            <!-- Esencial -->

            <div class="card border p-1 m-1 col-span-1 lg:col-span-3">
              <div class="card-header mb-3">
                <strong>Personzalidado</strong>
              </div>
              <div class="card-body">
                <ul>

                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Ya tengo una oferta personalizada</span>
                  </li>
                 
                </ul>

              </div>
              <div class="card-footer">
                <button class="btn-yes" @click="step = 6, servicetype = 1">
                 Valor Especial
                </button>
              </div>
            </div>
            <!-- Standard -->
            <div class="card border p-1 m-1 col-span-1 lg:col-span-3">
              <div class="card-header mb-3">
                <strong>Esencial (Microempresas)</strong>
              </div>
              <div class="card-body">
                <ul>

                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Hasta 250 Documentos tributarios</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Declaración F29</span>
                  </li>
                </ul>

              </div>
              <div class="card-footer">
                <button class="btn-yes" @click="step = 6, servicetype = 1">
                  $ 59.900 / mes
                </button>
              </div>
            </div>
            <!-- Standard -->
            <div class="card border p-1 m-1 col-span-1 lg:col-span-3">
              <div class="card-header mb-3">
                <strong>Standard (Pequeñas Empresas)</strong>
              </div>
              <div class="card-body">
                <ul>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Hasta 500 Documentos tributarios</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Declaración F29</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Inf. Movimientos Bancarios</span>
                  </li>
                </ul>
              </div>
              <div class="card-footer">
                <button class="btn-yes" @click="step = 6, servicetype = 2">
                  $ 119.900 / mes
                </button>
              </div>
            </div>
            <!-- Avanzado -->
            <div class="card border p-1 m-1 col-span-1 lg:col-span-3">
              <div class="card-header mb-3">
                <strong>Avanzado (Medianas y Grandes Empresas)</strong>
              </div>
              <div class="card-body">
                <ul>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Cantidad de Documentos tributarios a convenir</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Declaración F29</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Inf. Movimientos Bancarios</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Documentación Online</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span>Informes de Venta</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <SiteCheck /><span> Asesoría contable permanente</span>
                  </li>
                </ul>
              </div>
              <div class="card-footer">
                <button class="btn-yes" @click="step = 6, servicetype = 3">
                  Desde $ 399.900 / mes
                </button>
              </div>
            </div>
          </div>

          <p class="text-info">Los precios pueden ser más bajos si existe una  cotización especial previa</p>
                    </template>
      </ServicesQuote>

      <!-- 6 -->

      <ServicesQuote v-if="step === 6 && workers > 0">

        <template #texto>

          <p class="question">¿Deseas contratar nuestro servicio de Remuneraciones?</p>

          <p><strong>$15.000</strong> por trabajador contratado al mes</p>
          <button class="btn-yes" @click="step = 7, salary = 1">Si, 15.0000 / Trabajador</button>
          <button class="btn-yes" @click="step = 7, salary = 2">Si, tengo una oferta personalizada</button>
          <button class="btn-no" @click="step = 7, salary = 0">No gracias</button>

          <p class="text-info">-El servicio de remuneraciones incluye: Liquidaciones de sueldo, Contratos de trabajo,
            Finiquitos, Certificados de renta, Declaraciones juradas, entre otros.<br>-Los precios pueden ser más bajos si existe una  cotización especial previa.</p>

        </template>

      </ServicesQuote>

      <ServicesQuote v-if="step === 6 && workers < 1">

        <template #texto>

          <p class="question">¿Planeas contratar personal a futuro?</p>

          <button class="btn-yes" @click="step = 7, salary = 0">Si, posiblemente </button>
          <button class="btn-no" @click="step = 7, salary = 0">No, no planeo contratar personal</button>

        </template>

      </ServicesQuote>

      <!-- 7 -->

      <ServicesQuote v-if="step === 7">

        <template #texto>

          <p class="question">¿Publicar tu empresa en nuestro directorio online?</p>
          <p>El precio de la incorporación Standard es $ 25.000 (pago único), pero tenemos un <strong>descuento para
              ti</strong></p>
          <button class="btn-yes" @click="step = 8">
            Si, incorporación Standard ( gratis )
          </button>
          <button class="btn-yes" @click="step = 8">
            Si, incorporación destacada ( $ 10.000 )
          </button>

          <button class="btn-no" @click="step = 8">
            No, gracias
          </button>

          <p class="text-info">El directorio online es un espacio donde publicaremos una reseña de tu empresa, tus
            servicios y productos, además de tus datos de contacto, te ayudará amejorar tu posicionamiento en internet y
            atraer más clientes.</p>

        </template>

      </ServicesQuote>

      <!-- 8 -->

      <ServicesQuote v-if="step === 8">

        <template #texto>

          <p class="question">¿Publicar un articulo acerca de tus productos o servicios en nuestro blog?</p>

          <p>El precio de una publicación promocional Standard es $ 15.000 (por publicación), pero tenemos un
            <strong>descuento para ti</strong></p>
          <button class="btn-yes" @click="step = 9">
            Si, 1 publicación Standard ( gratis )
          </button>
          <button class="btn-yes" @click="step = 9">
            Si, publicación destacada ( $ 45.000 )
          </button>

          <button class="btn-no" @click="step = 9">
            No, gracias
          </button>

          <p class="text-info">El blog es un espacio donde publicamos artículos acerca de nuestros clientes, sus
            productos y servicios, te ayuda a mejorar tu posicionamiento en internet y atraer más clientes. </p>

        </template>

      </ServicesQuote>

      <!-- 9 -->

      <ServicesQuote v-if="step === 9">

        <template #texto>

          <p class="question">¿Te gustaría unirte a nuestro grupo de WhatsApp?</p>
          <p>Un grupo único donde estas tu con nuestro equipo y puedes hacer consultas directamente en horario de
            oficina</p>
          <button class="btn-yes" @click="step = 10">
            Si, horario oficina ( gratis )
          </button>
          <button class="btn-yes" @click="step = 10">
            Si, horario extendido ( $ 55.000/mes )
          </button>
          <button class="btn-no" @click="step = 10">
            No, gracias
          </button>

          <p class="text-info">El grupo de WhatsApp es un espacio donde podrás hacer consultas directamente a nuestro
            equipo, te ayudará a resolver dudas y a estar al tanto de las novedades tributarias y contables</p>

        </template>

      </ServicesQuote>

      <!-- 10 -->

      <ServicesQuote v-if="step === 10 && emailService === 1">

        <template #texto>

          <p class="question">¿Te gustaría contar con un correo corporativo?</p>
          <p>Un correo del tipo tunombre@nombretuempresa.cl te dará una imagen más profesional</p>

          <button class="btn-yes" @click="step = 11">
            Si, una cuenta de email ( $ 5.000/mes )
          </button>
          <button class="btn-yes" @click="step = 11">
            Si, hasta 10 cuenta de email ( $ 10.000/mes )
          </button>
          <button class="btn-no" @click="step = 11">
            No, gracias
          </button>

          <p class="text-info">El correo corporativo incluye la compra del dominio y la configuración de las cuentas de
            correo.</p>

        </template>

      </ServicesQuote>

      <ServicesQuote v-if="step === 10 && emailService === 0">

        <template #texto>

          <p class="question">¿Te gustaria recibir noticias y novedades tributarias y contables en tu correo?</p>

          <button class="btn-yes" @click="step = 11">
            Si, noticias y novedades
          </button>

          <button class="btn-no" @click="step = 11">
            No, gracias
          </button>

          <p class="text-info">Recibirás noticias y novedades tributarias y contables en tu correo, te ayudará a estar
            al tanto de las novedades tributarias y contables</p>

        </template>

      </ServicesQuote>

      <!-- 11 -->

      <ServicesQuote v-if="step === 11 && emailService === 1">

        <template #texto>

          <p class="question">¿Te gustaría contar con un sitio web?</p>
          <p>Un sitio web te permitirá tener presencia en internet y atraer más clientes</p>

          <button class="btn-yes" @click="step = 12">
            Si, sitio web básico ( $ 7.500/mes )
          </button>
          <button class="btn-no" @click="step = 12">
            No, gracias
          </button>

          <p><a href="#">Ver ejemplo de Sitio </a></p>

          <p class="text-info">El sitio web básico incluye el diseño básico, la configuración y la mantención del sitio
            web, además de la compra del dominio y el hosting</p>
        </template>

      </ServicesQuote>


      <ServicesQuote v-if="step === 11 && emailService === 0">

        <template #texto>

          <p class="question">¿Te gustaría una revisión de tu posicionamiento web (SEO)?</p>
          <p>Una revisión de tu sitio web te permitirá tener una visión de tu presencia en internet y atraer más
            clientes</p>

          <button class="btn-yes" @click="step = 12">
            Si, análisis básico ( gratis )
          </button>

          <button class="btn-yes" @click="step = 12">
            Si, análisis avanzado ( $ 35.000 )
          </button>
          <button class="btn-no" @click="step = 12">
            No, gracias
          </button>

          <p class="text-info">La revisión de posicionamiento web incluye un informe de tu presencia en internet y
            recomendaciones para mejorar tu posicionamiento</p>
        </template>

      </ServicesQuote>

      <!-- 11 -->

      <ServicesQuote v-if="step === 12">

        <template #texto>

          <p class="question">¿Te gustaría contar con un domicilio tributario?</p>
          <p>Un domicilio tributario te permitirá iniciar actividades, cuidar privacidad, tu correspondencia y tener una
            dirección para tu empresa</p>

          <button class="btn-yes" @click="step = 13">
            Si, domicilio tributario ( $ 9.900/mes )
          </button>
          <button class="btn-no" @click="step = 13">
            No, gracias
          </button>
          <p class="text-info">El domicilio tributario incluye la dirección tributaria, la recepción de correspondencia
            y la custodia de documentos tributarios, no incluye gastos notariales.</p>
        </template>

      </ServicesQuote>

      <!-- 11 -->

      <ServicesQuote v-if="step === 13">

        <template #texto>

          <p class="question">Muchas gracias</p>

          <p>Confirma, acepta y envía tus datos para finalizar la cotización</p>
    

          <h3 class="mt-3 text-blod">Resumen:</h3>

          <p>Nombre: {{ name }}</p>
          <p>RUT: {{ rut }}</p>
          <p>Correo: {{ email }}</p>
          <p>Plan nivel: {{ servicetype }}</p>

          <div class="mt-3">
          <input type="checkbox" v-model="accept" class="m-2"> <label for="accept">Confirmo que los datos ingresados son
            correctos </label>

        </div>

          <button type="submit" class="btn-yes">Finalizar Cotización</button>


          <!-- Mensaje de éxito -->
          <div v-if="submitSuccess" class="alert alert-success text-green-700">
            {{ submitMessage }}
          </div>
          
  
          <!-- Mensaje de error -->
          <div v-if="submitError" class="alert alert-danger text-red-700">
            {{ submitMessage }}
          </div>

        </template>

      </ServicesQuote>

      <div class="bg-gray-200 border border-t-gray-500">
        <button @click="step -= 1" class="btn text-blue-500 p-2 m-1" v-if="step > 1">Atrás</button>
        <button @click="step = 1" class="btn text-blue-500 p-2 m-1" v-if="step > 2">Inicio</button>
      </div>


    </form>
  </div>

</template>

<script>

import axios from 'axios';
import ServicesQuote from '~/components/ServicesQuote.vue';

export default {
  layout: "default",

  components: {
    ServicesQuote
  },

  data() {
    return {
      submitSuccess: false,
      submitError: false,
      submitMessage: '',
      step: 13,
      name: "",
      oldClient: 0,
      company: "",
      rut: "",
      workers: "",
      email: "",
      phone: "",
      servicetype: 0,
      salary: 0,
      emailService: 0,
      accept: false,
    };
  },

  // Dentro de tu componente Vue o instancia

  methods: {

    async submitForm() {

      if (!this.accept) {
    // Mostrar mensaje de error si algún campo obligatorio está vacío
    this.submitError = true;
    this.submitSuccess = false;
    this.submitMessage = 'Acepta los términos y condiciones para continuar.';
    return;
  }
      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: `Antecedentes: Nombre: ${this.name}, Email: ${this.email}, Teléfono: ${this.phone}, Empresa: ${this.company}, RUT: ${this.rut}, Trabajadores: ${this.workers}, Plan: ${this.servicetype}, Remuneraciones: ${this.salary}`,

      };

      try {
        const response = await axios.post('https://formspree.io/f/xdoqdkyl', formData);
        // Si la solicitud fue exitosa:
        this.submitSuccess = true;
        this.submitError = false;
        this.submitMessage = 'Formulario enviado correctamente, nos pondremos en contacto a la brevedad, para continuar con la solicitud y validación de antecedentes.';
        // Opcional: Redirigir o mostrar resumen
        // this.$router.push('/ruta-de-exito'); // Si estás usando Vue Router
      } catch (error) {
        this.submitError = true;
        this.submitSuccess = false;
        this.submitMessage = 'Acepta los términos y condiciones para continuar.';
      }
    },

  },

  watch: {
    // Observa cambios en la propiedad 'email'
    email(newEmail) {
      // Lista de dominios de correo a verificar gratuitos 
      const emailDomains = [
        'gmail.com',
        'outlook.com',
        'outlook.cl',
        'hotmail.com',
        'live.com',
        'yahoo.com',
        'aol.com',
        'mail.com',
        'yandex.com',
        'protonmail.com',
        'icloud.com',
        'zoho.com'];

      // Extrae el dominio del correo electrónico
      const emailDomain = newEmail.split('@')[1];
      // Comprueba si el dominio está en la lista y actualiza 'emailService'
      this.emailService = emailDomains.includes(emailDomain) ? 1 : 0;
    },
  },

  // INICIO SEO

  head() {
    return {
      title: "Cotizador Servicio Contabilidad | Contabilidad San Vicente",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " Usa nuestro cotizador para obtener el precio de nuestro servicio de contabilidad. Contabilidad San Vicente, San Vicente de Tagua Tagua, VI Región, Chile.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Atención al Cliente, Consultas, San Vicente de Tagua Tagua, Cotizador Servicio Contabilidad ",
        },
      ],
    };
  },
};

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