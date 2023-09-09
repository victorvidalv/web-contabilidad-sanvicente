<template>
    <div>

      <AboutBanner/>

      <AboutTeam/>

      <HomeModern/>

      <SiteClients/>
    
    </div>
</template>

<script>

export default {
    layout: 'default',
    // INICIO SEO 
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