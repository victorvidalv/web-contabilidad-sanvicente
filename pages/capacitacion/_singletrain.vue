<template>
    <div>
 
      <SiteSecondBanner :name="capacitar.name" :description="capacitar.description" img="https://dummyimage.com/580x450/eee/aaa"/>

      <TrainSingleCharacteristics/>

      <TrainSingleDetails :details="capacitar.details"/>

      <TrainContract />

      <SiteClients/>

    </div>
  </template>

  <script>


  export default {
    layout: 'default',
    data() {
        return {
            capacitar: {},
            singletrain: ''
        };
    },
    async asyncData({ params }) {
        const singletrain = params.singletrain;
        try {
            const res = await fetch('/datos.json');
            const datos = await res.json();
            // Encuentra el capacitar cuya URL coincida con el singletrain
            let capacitarEncontrado = null;
            for (const key in datos.capacitacion) {
                if (datos.capacitacion[key].url === `capacitacion/${singletrain}`) {
                    capacitarEncontrado = datos.capacitacion[key];
                    break;
                }
            }
            if (capacitarEncontrado) {
                return {
                    singletrain,
                    capacitar: capacitarEncontrado
                };
            }
            else {
                throw new Error(`No se encontró el capacitar con la URL: capacitacion/${singletrain}`);
            }
        }
        catch (error) {
            console.error('Ocurrió un error:', error);
            return {
                singletrain,
                capacitar: {}
            };
        }
    },
    head() {
        return {
            title: this.capacitar.name + ' | San Vicente Tagua Tagua',
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.capacitar.meta,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.capacitar.keywords,
                },
            ],
        };
    },
  
}
  </script>