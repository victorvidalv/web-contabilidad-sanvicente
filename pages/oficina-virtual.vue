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
            title: "Oficina Virtual y Domicilio Tributario | Contabilidad San Vicente",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Soluciones de oficina virtual y domicilio tributario en San Vicente. Gestione su empresa de forma eficiente con nuestros servicios digitales y soporte profesional continuo.",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "oficina virtual, domicilio tributario, gestión empresarial digital, servicios contables online, operaciones virtuales, contabilidad remota, san vicente de tagua tagua",
                },
            ],
        };
    },
}
</script>
