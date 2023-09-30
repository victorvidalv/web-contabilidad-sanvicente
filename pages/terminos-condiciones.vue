<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h1><strong>Términos y Condiciones </strong></h1>
    <p>
      Bienvenido al sitio web de Contabilidad San Vicente. Los siguientes
      términos y condiciones regulan el uso de nuestro sitio web y los servicios
      que ofrecemos. Al acceder a este sitio web, usted acepta, sin limitación
      ni calificación, estos términos y condiciones. Si no está de acuerdo con
      alguno de los siguientes términos y condiciones, por favor absténgase de
      utilizar este sitio web.
    </p>

    <h2><strong>Alcance de los Servicios</strong></h2>
    <ol>
      <li>
        Contabilidad: Realizamos labores de registro y análisis de transacciones
        financieras de acuerdo con las normas contables y leyes tributarias
        vigentes en Chile.
      </li>
      <li>
        Gestión Remuneraciones: Administramos la nómina de su empresa,
        incluyendo el cálculo de remuneraciones, imposiciones y el cumplimiento
        de obligaciones previsionales y tributarias.
      </li>
      <li>
        Asesoría Tributaria: Brindamos consultoría y planificación tributaria,
        preparación y presentación de declaraciones de impuestos.
      </li>
      <li>
        Cumplimiento Fiscal: Nos aseguramos de que su empresa cumpla con todas
        las obligaciones fiscales, incluidas las declaraciones de impuestos y
        pagos a las autoridades correspondientes.
      </li>
      <li>
        Evaluación Financiera: Ofrecemos análisis de la salud financiera de su
        empresa, incluyendo la evaluación de activos, pasivos, ingresos y
        gastos.
      </li>
      <li>
        Gestión de Riesgos Financieros: Evaluamos los riesgos financieros y
        diseñamos estrategias para mitigar su impacto en su negocio.
      </li>
      <li>
        Creación y Cierre de Empresas: Asesoramos en los trámites legales y
        fiscales necesarios para la creación y cierre de empresas.
      </li>
      <li>
        Fusiones y Adquisiciones: Proporcionamos asesoramiento en la
        consolidación de empresas y adquisiciones, garantizando el cumplimiento
        de todas las obligaciones legales y fiscales.
      </li>
      <li>
        Procesos de Quiebra: Asesoramos en la reestructuración financiera y
        trámites legales asociados con la quiebra.
      </li>
    </ol>

    <h2><strong>Responsabilidades y Limitaciones</strong></h2>
    <p>
      Los servicios descritos anteriormente están sujetos a las leyes y
      regulaciones vigentes en Chile, incluidas, pero no limitadas a, la Ley de
      Impuesto a la Renta, el Código de Comercio y otras normativas fiscales y
      comerciales.
    </p>
    <p>
      Contabilidad San Vicente no será responsable por cualquier pérdida
      financiera o sanciones incurridas debido al incumplimiento de las leyes o
      regulaciones por parte del cliente.
    </p>

    <h2><strong>Confidencialidad y Protección de Datos</strong></h2>
    <p>
      Respetamos la privacidad y la confidencialidad de los datos de nuestros
      clientes, de acuerdo con la Ley Nº 19.628 sobre Protección de la Vida
      Privada.
    </p>

    <h2><strong>Tarifas y Pagos</strong></h2>
    <p>
      Las tarifas de nuestros servicios serán acordadas previamente con el
      cliente. Los pagos deberán realizarse en los plazos establecidos en el
      contrato de servicio.
    </p>

    <h2><strong>Modificaciones</strong></h2>
    <p>
      Nos reservamos el derecho de modificar estos términos y condiciones en
      cualquier momento, siempre y cuando cumplan con las leyes y regulaciones
      de Chile.
    </p>

    <h2><strong>Ley Aplicable y Jurisdicción</strong></h2>
    <p>
      Estos términos y condiciones se rigen por las leyes de Chile y cualquier
      disputa será resuelta en los tribunales competentes de Chile.
    </p>
    <p>
      Al utilizar los servicios de Contabilidad San Vicente, usted acepta estar
      vinculado por estos términos y condiciones.
    </p>
    <p>Última actualización: 01-01-2023</p>
    <p>
      Si tiene alguna pregunta o inquietud acerca de estos términos y
      condiciones, por favor contáctenos a contacto@contabilidadsanvicente.cl o
      al +56 722 746 337.
    </p>

    <p>
      Esperamos tener el placer de trabajar con usted en el cumplimiento de sus
      necesidades contables y financieras.
    </p>

    <p>Atentamente,<br />Equipo de Contabilidad San Vicente.</p>
  </div>
</template>

<script>
export default {
  layout: "default",

  // INICIO SEO

  head() {
    return {
      title: "Términos y Condiciones | Contabilidad San Vicente",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Los siguientes términos y condiciones regulan el uso de nuestro sitio web y los servicios que ofrecemos. Al acceder a este sitio web, usted acepta, sin limitación ni calificación, estos términos y condiciones.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Atención al Cliente, Consultas, San Vicente de Tagua Tagua, términios y condiciones, uso del sitio",
        },
      ],
    };
  },

  // FIN SEO
};
</script>

<style scoped>
h2,
li {
  margin-top: 20px;
}

p {
  text-align: justify;
}

h1 strong {
  font-size: 2rem;
}
</style>
