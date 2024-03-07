<template>
    <div >

<form @submit.prevent="generarPDF()">

<!---1-->

<ServicesQuote v-if="step < 2">

<template #texto>

  <p class="question">Bienvenido</p>

  <p>Te acompañaremos paso a paso para generar un poder de representación.</p>

  <button @click="step = 2" class="btn-yes">Comencemos</button>

</template>

</ServicesQuote>

<!---2-->

<ServicesQuote v-if="step == 2">

<template #texto>

  <p class="question">¿Que tipo de poder necesitas?</p>

    <button @click="step = 3, formData.tipoPoder = 'simple'" class="btn-yes">Poder simple </button>

    <button @click="step = 3, formData.tipoPoder = 'amplio'" class="btn-yes">Poder amplio</button>

    <p class="text-info">El poder simple es para trámites puntuales, mientras que el poder amplio es para trámites más complejos.</p>

</template>

</ServicesQuote>

<!---3-->

<ServicesQuote v-if="step == 3">

<template #texto>

  <p class="question">¿Nesesitas un poder para una persona o para una empresa?</p>

    <button @click="step = 4, formData.PersonaEmpresa = 'persona'" class="btn-yes">Persona natural</button>

    <button @click="step = 4, formData.PersonaEmpresa = 'empresa'" class="btn-yes">Empresa</button>


 <p class="text-info">Persona natural es para trámites personales, mientras que empresa es para trámites de un negocio.</p>

</template>

</ServicesQuote>

<!---4-->

<ServicesQuote v-if="step === 4">

<template #texto>

  <p v-if="formData.PersonaEmpresa === 'persona'"class="question">Datos Personales</p>

<p v-if="formData.PersonaEmpresa === 'empresa'"class="question">Datos Representante</p>

  <div class="input-wrapper py-2">
            <label >Nombre </label>
            <input type="text" class="input-custom" placeholder="Ingresa tu nombre" v-model="formData.nombreMandante">
</div>

<div class="input-wrapper py-2">
            <label >Apellido </label>
            <input type="text" class="input-custom" placeholder="Ingresa tu apellido" v-model="formData.apellidoMandante">

</div>

<div class="input-wrapper py-2">
            <label >RUT </label>
            <input type="text" class="input-custom" placeholder="Ingresa tu RUT" v-model="formData.rutMandante">

</div>


<div class="input-wrapper py-2">
            <label >Nacionalidad </label>
            <input type="text" class="input-custom" placeholder="Ingresa nacionalidad" v-model="formData.nacionalidadMandante">

</div>



<div class="input-wrapper py-2" v-if="formData.PersonaEmpresa === 'persona'" style="display: flex;">
    <div style="flex: 1;" class="m-1">
        <label>Dirección</label>
        <input type="text" class="input-custom" placeholder="Dirección" v-model="formData.direccion">
    </div>
    <div style="flex: 1;" class="m-1">
        <label>Cuidad</label>
        <input type="text" class="input-custom" placeholder="cuidad" v-model="formData.cuidad">
    </div>
</div>


  <button @click="step = 5" class="btn-yes" v-if="formData.nombreMandante && formData.apellidoMandante && formData.rutMandante && formData.nacionalidadMandante ">Continuar</button>

  <p v-if="formData.PersonaEmpresa === 'empresa'">Recuerda: El poder debe ser firmado por el representante legal de la empresa.</p>

</template>

</ServicesQuote>

<!---5 aqui-->

<ServicesQuote v-if="step === 5 && formData.PersonaEmpresa === 'empresa'">

<template #texto>

  <p class="question">Datos de la empresa</p>

  <div class="input-wrapper py-2">
            <label >Empresa</label>
            <input type="text" class="input-custom" placeholder="Ingresa el nombre de la empresa" v-model="formData.nombreEmpresa">

</div>

<div class="input-wrapper py-2">
            <label >RUT</label>
            <input type="text" class="input-custom" placeholder="Ingresa el RUT de la empresa" v-model="formData.rutEmpresa">

</div>


<div class="input-wrapper py-2" v-if="formData.PersonaEmpresa === 'empresa'" style="display: flex;">
    <div style="flex: 1;" class="m-1">
        <label>Dirección</label>
        <input type="text" class="input-custom" placeholder="Dirección" v-model="formData.direccion">
    </div>
    <div style="flex: 1;" class="m-1">
        <label>Cuidad</label>
        <input type="text" class="input-custom" placeholder="cuidad" v-model="formData.cuidad">
    </div>
</div>


    <button @click="step = 6" class="btn-yes" v-if="formData.nombreEmpresa && formData.rutEmpresa && formData.direccion && formData.cuidad">Continuar</button>
    
</template>

</ServicesQuote>

<ServicesQuote v-if="step === 5 && formData.PersonaEmpresa === 'persona' || step === 6 && formData.PersonaEmpresa === 'empresa'">

<template #texto>

  <p class="question">Persona a la que Otorga Poder </p>

  <div class="input-wrapper py-2">
            <label >Nombre</label>
            <input type="text" class="input-custom" placeholder="Ingresa el nombre la persona" v-model="formData.nombrepersonapoder">

</div>

<div class="input-wrapper py-2">
            <label >RUT</label>
            <input type="text" class="input-custom" placeholder="Ingresa el RUT de la persona" v-model="formData.rutpersonapoder">

</div>

<div class="input-wrapper py-2">
            <label >Nacionalidad</label>
            <input type="text" class="input-custom" placeholder="Ingresa la nacionalidad de la persona" v-model="formData.nacionalidadpersonapoder">

</div>

    <button @click="step = 7" class="btn-yes" v-if="formData.nombrepersonapoder && formData.rutpersonapoder">Continuar</button>

    <p class="text-info">Vanessa es representante por defecto, si necesitas otro representante, puedes cambiarlo.</p>

</template>

</ServicesQuote>

<!---6-->

<ServicesQuote v-if="step === 7 && formData.PersonaEmpresa === 'persona'"">

<template #texto>

  <p class="question">Confirmación de Antecedentes</p>

  <p>Tipo de Poder: {{ formData.tipoPoder }} para {{ formData.PersonaEmpresa }}</p>

    <p>Nombre: {{ formData.nombreMandante }} {{ formData.apellidoMandante }}</p>

    <p>RUT: {{ formData.rutMandante }}</p>

    <p >Nacionalidad: {{ formData.nacionalidadMandante }}</p>

    <p>Dirección: {{ formData.direccion }}, {{ formData.cuidad }}</p>

    <p>Otorga Poder a: {{ formData.nombrepersonapoder }}, RUT: {{ formData.rutpersonapoder }}, Nacionalidad: {{ formData.nacionalidadpersonapoder }}</p>

<p><input type="checkbox" id="confirmar" name="confirmar" value="confirmar" @click="confirmar = 1"> Confirmo que los datos son correctos.</p>

<button @click="step = 8" class="btn-yes" v-if="confirmar===1">Confirmar</button>

</template>

</ServicesQuote>

<ServicesQuote v-if="step === 7 && formData.PersonaEmpresa === 'empresa'">

<template #texto>

  <p class="question">Confirmación de Antecedentes</p>

  <p>Tipo de Poder: {{ formData.tipoPoder }} para {{ formData.PersonaEmpresa }}</p>

    <p>Nombre: {{ formData.nombreMandante }} {{ formData.apellidoMandante }}</p>

    <p>RUT: {{ formData.rutMandante }}</p>

    <p >Nacionalidad: {{ formData.nacionalidadMandante }}</p>

    <p >Empresa: {{ formData.nombreEmpresa }}</p>

    <p >RUT Empresa: {{ formData.rutEmpresa }}</p>

    <p>Dirección: {{ formData.direccion }}, {{ formData.cuidad }}</p>

    <p>Otorga Poder a: {{ formData.nombrepersonapoder }}, RUT: {{ formData.rutpersonapoder }}, Nacionalidad: {{ formData.nacionalidadpersonapoder }}</p>

   <p> <input type="checkbox" id="confirmar" name="confirmar" value="confirmar" @click="confirmar = 1">Confirmo que los datos son correctos.</p>

    <button @click="step = 8" class="btn-yes" v-if="confirmar===1">Confirmar</button>

</template>

</ServicesQuote>

<ServicesQuote v-if="step === 8">

<template #texto>

  <p class="question">Descargar Poder</p>

    <p>Debes Leerlo, firmalo y envialo a contacto@contabilidadsanvicente.cl</p>

    <button @click="generarPDF('simple')" class="btn-yes">Descargar Poder</button>

</template>

</ServicesQuote>

<div class="bg-gray-200 border border-t-gray-500">
        <button @click="step = 1 " class="btn text-blue-500 p-2 m-1" v-if="step > 2">Inicio</button>
</div>
        </form>
    </div>
</template>

  <script>
   // Importar jsPDF
import jsPDF from 'jspdf';

export default {
  data() {
    return {
      showform: 1,
      step: 1,
      confirmar: 0,
      formData: {
        nombreMandante: '',
        apellidoMandante: '',
        rutMandante: '',
        nombreEmpresa: '',
        rutEmpresa: '',
        tipoPoder: '',
        PersonaEmpresa: '',
        nombrepersonapoder: 'VANESSA BETTINA PERALTA VIDAL',
        rutpersonapoder: '17.510.748-7',
        nacionalidadpersonapoder: 'CHILENA',
        direccion: '',
        nacionalidadMandante: 'CHILENA',
        cuidad: '',

        // Otros campos necesarios
      },
    };
  },
  methods: {

    generarPDF(tipoPoder) {

    //configuración general:
       
    const doc = new jsPDF();
    doc.setFontSize(12);

    //formdata a mayusculas

    this.formData.nombreMandante = this.formData.nombreMandante.toUpperCase();
    this.formData.apellidoMandante = this.formData.apellidoMandante.toUpperCase();
    this.formData.nombreEmpresa = this.formData.nombreEmpresa.toUpperCase();
    this.formData.nacionalidadMandante = this.formData.nacionalidadMandante.toUpperCase();
    this.formData.cuidad = this.formData.cuidad.toUpperCase();
    this.formData.direccion = this.formData.direccion.toUpperCase();
    this.formData.nombrepersonapoder = this.formData.nombrepersonapoder.toUpperCase();
    this.formData.nacionalidadpersonapoder = this.formData.nacionalidadpersonapoder.toUpperCase();

     //titulos 

if (tipoPoder === 'simple') { if (this.formData.tipoPoder === 'simple') { doc.text('PODER SIMPLE DE REPRESENTACIÓN', 20, 17.); } else {doc.text('PODER AMPLIO DE REPRESENTACIÓN', 20, 17);}



if (this.formData.tipoPoder === 'amplio') {

//TEXTO INICIO

if (this.formData.PersonaEmpresa === 'persona') {

const textoPoder = `En ${this.formData.cuidad}, a ${new Date().toLocaleDateString()}, Yo ${this.formData.nombreMandante} ${this.formData.apellidoMandante}, RUT ${this.formData.rutMandante}, de nacionalidad ${this.formData.nacionalidadMandante}, domiciliado en ${this.formData.direccion}, ${this.formData.cuidad}. Por el presente instrumento confiero poder especial, tan amplio como en derecho se requiere a ${this.formData.nombrepersonapoder}, RUT ${this.formData.rutpersonapoder}, de nacionalidad ${this.formData.nacionalidadpersonapoder},para que me represente ante el Servicio de Impuestos Internos, Tesorería General de la República, y en general ante cualquier organismo público o privado, en todos los trámites y gestiones que sean necesarios para el cumplimiento de las obligaciones tributarias, fiscales y laborales, incluyendo, pero no limitándose a:`;
doc.text(textoPoder, 20, 25, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido

} else {

  const textoPoder = `En ${this.formData.cuidad}, a ${new Date().toLocaleDateString()}, Yo ${this.formData.nombreMandante} ${this.formData.apellidoMandante}, RUT ${this.formData.rutMandante}, de nacionalidad ${this.formData.nacionalidadMandante}, en representación de ${this.formData.nombreEmpresa}, RUT ${this.formData.rutEmpresa}, ambos domiciliados en ${this.formData.direccion}, ${this.formData.cuidad}. Por el presente instrumento confiero poder especial, tan amplio como en derecho se requiere a ${this.formData.nombrepersonapoder}, RUT ${this.formData.rutpersonapoder}, de nacionalidad ${this.formData.nacionalidadpersonapoder}, para que me represente ante el Servicio de Impuestos Internos, Tesorería General de la República, y en general ante cualquier organismo público o privado, en todos los trámites y gestiones que sean necesarios para el cumplimiento de las obligaciones tributarias, fiscales y laborales, incluyendo, pero no limitándose a:`;
   doc.text(textoPoder, 20, 25, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido

}

// SERVICIO DE IMPUESTOS INTERNOS, SII
doc.text('SERVICIO DE IMPUESTOS INTERNOS, SII', 20, 75);
const textoSII = `Para que ejecute ante el Servicio de Impuestos Internos, todos los trámites relacionados con presentación de RAV y RAF, rectificatorias, notificaciones de giros, citaciones, presentar declaraciones fuera de plazo, de IVA o Renta, realizar el timbraje de boletas, facturas, guías de despacho, notas de crédito y ó débito, libros de contabilidad, apertura o cierre de sucursales, inicio de actividades, cambios de domicilio, solicitud de clave, término de giro, ser notificado de los giros y firmar los giros, firmar cualquier tipo de documentos recibidos, y en general para que realice todo tipo de trámites ante el SII.`;
doc.text(textoSII, 20, 82, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido

// TESORERÍA GENERAL DE LA REPÚBLICA, TGR
doc.text('TESORERÍA GENERAL DE LA REPÚBLICA, TGR', 20, 123);
const textoTGR = `Para que en mi nombre y representación ejecute ante la Tesorería General de la República, las solicitudes de certificados, obtener y recuperar clave de acceso a portal de la TGR, pagar giros, información de multas pendientes de pago, anulación de giros, devolución de pagos duplicados, recuperación de impuestos, cheques devueltos, en especial de declaraciones de renta y saldos a favor, alzamiento de embargos, y en general todos los trámites relacionados ante dicha institución.`;
doc.text(textoTGR, 20, 130, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido

//Municipalidades, Notarías, Bancos, AFP, Isapres, Cajas de Compensación, Correos de Chile, Empresas de Servicios, etc.

doc.text('MUNICIPALIDAD', 20, 165);

const textoMunicipalidad = `Para que realice trámites de patentes comerciales, permisos de circulación, certificados de dominio, certificados de deuda, certificados de avalúo fiscal, certificados de no expropiación, certificados de no afecto a expropiación, certificados de no pago de contribuciones, certificados de no pago de multas, certificados de no pago de derechos, certificados de no pago de patentes, certificados de no pago de permisos de circulación en la Municipalidad correspondiente, y en general todos los trámites relacionados ante dicha institución`;

//direccion trabajo

doc.text(textoMunicipalidad, 20, 172, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido

doc.text('DIRECCIÓN DEL TRABAJO, DT', 20, 212);

const textoDireccionTrabajo = `Para que realice trámites de fiscalización, inspecciones, multas, sanciones, denuncias, reclamos, recursos, y en general todo tipo de trámites relacionados con la Dirección del Trabajo.`;

doc.text(textoDireccionTrabajo, 20, 219, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido


} else {  
  
  //poder simple
  
  if (this.formData.PersonaEmpresa === 'persona') {

const textoPoder = `En ${this.formData.cuidad}, a ${new Date().toLocaleDateString()}, Yo ${this.formData.nombreMandante} ${this.formData.apellidoMandante}, RUT ${this.formData.rutMandante}, de nacionalidad ${this.formData.nacionalidadMandante}, domiciliado en ${this.formData.direccion}, ${this.formData.cuidad}. Por el presente instrumento confiero poder a ${this.formData.nombrepersonapoder}, RUT ${this.formData.rutpersonapoder}, de nacionalidad ${this.formData.nacionalidadpersonapoder}, para que me represente ante el Servicio de Impuestos Internos, Tesorería General de la República, y en general ante cualquier organismo público o privado, en todos los trámites y gestiones que sean necesarios para el cumplimiento de las obligaciones tributarias, fiscales y laborales especificadas:`;
doc.text(textoPoder, 20, 25, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido

} else {

  const textoPoder = `En ${this.formData.cuidad}, a ${new Date().toLocaleDateString()}, Yo ${this.formData.nombreMandante} ${this.formData.apellidoMandante}, RUT ${this.formData.rutMandante}, de nacionalidad ${this.formData.nacionalidadMandante}, en representación de ${this.formData.nombreEmpresa}, RUT ${this.formData.rutEmpresa}, ambos domiciliados en ${this.formData.direccion}, ${this.formData.cuidad}. Por el presente instrumento confiero poder a ${this.formData.nombrepersonapoder}, RUT ${this.formData.rutpersonapoder}, de nacionalidad ${this.formData.nacionalidadpersonapoder}, para que me represente ante el Servicio de Impuestos Internos, Tesorería General de la República, y en general ante cualquier organismo público o privado, en todos los trámites y gestiones que sean necesarios para el cumplimiento de las obligaciones tributarias, fiscales y laborales especificadas`;
   doc.text(textoPoder, 20, 25, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido

}

// SERVICIO DE IMPUESTOS INTERNOS, SII
doc.text('SERVICIO DE IMPUESTOS INTERNOS, SII', 20, 75);
const textoSII = `Para que ejecute ante el Servicio de Impuestos Internos, todos los trámites relacionados con presentación de RAV y RAF, rectificatorias, notificaciones de giros, citaciones, presentar declaraciones fuera de plazo, de IVA o Renta, realizar el timbraje de boletas, facturas, guías de despacho, notas de crédito y ó débito, libros de contabilidad.`;
doc.text(textoSII, 20, 82, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido


// TESORERÍA GENERAL DE LA REPÚBLICA, TGR
doc.text('TESORERÍA GENERAL DE LA REPÚBLICA, TGR', 20, 106);
const textoTGR = `Para que en mi nombre y representación ejecute ante la Tesorería General de la República, las solicitudes de certificados, obtener y recuperar clave de acceso a portal de la TGR, pagar giros, información de multas pendientes de pago, anulación de giros, devolución de pagos duplicados, recuperación de impuestos, cheques devueltos, en especial de declaraciones de renta y saldos a favor.`;
doc.text(textoTGR, 20, 113, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido

//Municipalidades, Notarías, Bancos, AFP, Isapres, Cajas de Compensación, Correos de Chile, Empresas de Servicios, etc.

doc.text('MUNICIPALIDAD', 20, 143);

const textoMunicipalidad = `Para que realice trámites de patentes comerciales, permisos de circulación, certificados de dominio, certificados de deuda, certificados de avalúo fiscal, certificados de no expropiación, certificados de no afecto a expropiación, certificados de no pago de contribuciones, certificados de no pago de multas, certificados de no pago de derechos, certificados de no pago de patentes, certificados de no pago de permisos de circulación en la Municipalidad correspondiente.`;

doc.text(textoMunicipalidad, 20, 150, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido


//direccion trabajo
doc.text('DIRECCIÓN DEL TRABAJO, DT', 20, 185);

const textoDireccionTrabajo = `Para que realice trámites de fiscalización, inspecciones, multas, sanciones, denuncias, reclamos y  recursos.`;

doc.text(textoDireccionTrabajo, 20, 195, { maxWidth: 170,align: "justify" }); // Ajuste el ancho máximo permitido



        }



        // Firma y fecha
        doc.text(`Firma del Mandante: ________________________  Fecha: ${new Date().toLocaleDateString()}`, 20, 260);

        // Guardar el documento
        doc.save('poder_de_representacion.pdf');
      }
    },
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