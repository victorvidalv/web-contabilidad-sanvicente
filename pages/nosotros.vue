<template>
    <div>
        <!-- Componente del banner de "Acerca de nosotros" -->
        <AboutBanner />

    
        <AboutVisionMisionValues />
    <TrainVideo/>

        <!-- Componente de nuestro equipo -->
        <AboutTeam />

  

        <!-- Componente de la sección servcios modernos de inicio -->
        <HomeModern />

        <!-- Componente de clientes del sitio -->
        <SiteClients />
    </div>
</template>

<script>
export default {
    //Modulos con carga diferida para optimizar la carga de la página
    components: {
        AboutTeam: () => import('~/components/AboutTeam.vue'),
        AboutVisionMisionValues: () => import('~/components/AboutVisionMisionValues.vue'),
        HomeWhyChooseUs: () => import('~/components/HomeWhyChooseUs.vue'),
        HomeModern: () => import('~/components/HomeModern.vue'),
        SiteClients: () => import('~/components/SiteClients.vue'),
    },
    layout: 'default', // Establece el diseño predeterminado para esta página

    // Configuración de etiquetas meta para SEO
    head() {
        return {
            title: "Nuestro Equipo Contable Experto | Contabilidad San Vicente",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Conozca a nuestro equipo de expertos contables y asesores tributarios en San Vicente. Profesionales comprometidos con la excelencia y el éxito financiero de su empresa.",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "equipo contable, contadores expertos, asesores tributarios, profesionales contables, san vicente de tagua tagua, experiencia contable, asesoría financiera personalizada",
                },
            ],
        };
    },
}
</script>
