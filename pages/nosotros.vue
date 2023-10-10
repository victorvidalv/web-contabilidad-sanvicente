<template>
    <div>
        <!-- Componente del banner de "Acerca de nosotros" -->
        <AboutBanner />

        <AboutVideo />

        <!-- Componente de nuestro equipo -->
        <AboutTeam />

        <AboutVisionMisionValues />

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
