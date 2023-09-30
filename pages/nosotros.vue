<template>
    <div>
      <!-- Componente del banner de "Acerca de nosotros" -->
      <AboutBanner/>

      <!-- Componente de nuestro equipo -->
      <AboutTeam/>

      <!-- Componente de la sección servcios modernos de inicio -->
      <HomeModern/>

      <!-- Componente de clientes del sitio -->
      <SiteClients/>
    </div>
</template>

<script>
export default {
    layout: 'default', // Establece el diseño predeterminado para esta página

    // Configuración de etiquetas meta para SEO
    head() {
        return {
            title: "Nosotros | Contabilidad San Vicente",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Conozca más sobre nuestro equipo de expertos en servicios contables y empresariales en San Vicente de Tagua Tagua. Estamos comprometidos con la excelencia y el crecimiento de su negocio.",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "Equipo Experto, San Vicente de Tagua Tagua, Servicios Contables, Excelencia Empresarial, Crecimiento de Negocio",
                },
            ],
        };
    },
}
</script>
