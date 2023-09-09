<template>
    <div>

        <SiteSecondBanner :name="servicio.name" :description="servicio.description" img="https://dummyimage.com/580x450/eee/aaa" />

        <ServiceSingleCharacteristics />

        <ServiceSingleDetails :details="servicio.details" />

        <ServicesContract />

        <SiteClients />

    </div>
</template>

<script>

export default {
    layout: 'default',

    data() {
        return {
            servicio: {},
            singleservice: ''
        };
    },

    async asyncData({ params }) {
        const singleservice = params.singleservice;
        try {
            const res = await fetch('/datos.json');
            const datos = await res.json();
            // Encuentra el servicio cuya URL coincida con el singleservice
            let servicioEncontrado = null;
            for (const key in datos.servicios) {
                if (datos.servicios[key].url === `servicios/${singleservice}`) {
                    servicioEncontrado = datos.servicios[key];
                    break;
                }
            }
            if (servicioEncontrado) {
                return {
                    singleservice,
                    servicio: servicioEncontrado
                };
            }
            else {
                throw new Error(`No se encontró el servicio con la URL: servicios/${singleservice}`);
            }
        }
        catch (error) {
            console.error('Ocurrió un error:', error);
            return {
                singleservice,
                servicio: {}
            };
        }
    },
    
    head() {
        return {
            title: this.servicio.name + ' | San Vicente Tagua Tagua',
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.servicio.meta,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.servicio.keywords,
                },
            ],
        };
    },

}
</script>