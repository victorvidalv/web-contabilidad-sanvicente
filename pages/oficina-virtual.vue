<template>
    <div>
        <!-- Componente del banner de "Acerca de nosotros" -->
        <OfficeBanner />

<OfficeDetails/>


<AboutVideo/>

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
            title: "Oficina Virtual | Contabilidad San Vicente",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Oficina Virtual en  San Vicente de Tagua Tagua, su solución para domicilio tributario y comercial.",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "Oficina Virtual, Equipo Experto, San Vicente de Tagua Tagua, Servicios Contables, Excelencia Empresarial, Crecimiento de Negocio",
                },
            ],
        };
    },
}
</script>
