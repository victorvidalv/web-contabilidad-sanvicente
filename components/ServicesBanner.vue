<template>
  <section class="services-section">
    <div class="max-w-[85rem] px-4 py-24 sm:px-6 lg:px-8 mx-auto">
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-24">
        <div class="services-image-container">
          <img 
            src="services.webp" 
            alt="Asesoría contable y financiera especializada para el sector agrícola en O'Higgins" 
            loading="lazy"
            class="services-image"
          >
        </div>

        <div class="mt-12 md:mt-0 p-12 bg-blue-950">
          <div class="space-y-10">
            <div class="text-white">
              <h1 class="text-4xl lg:text-5xl font-extralight mb-8">
                Asesoría Contable y Financiera
              </h1>
              <p class="text-lg leading-relaxed font-light">
                Expertos en servicios contables y financieros para el sector agroindustrial 
                en la Región de O'Higgins. Transformamos la gestión financiera 
                de su empresa con soluciones precisas.
              </p>
            </div>

            <div class="space-y-8 text-white">
              <div class="border-l border-white pl-6">
                <p class="text-lg font-light">
                  <span class="block text-xl mb-2 font-normal">Experiencia Sectorial</span>
                  Especialistas en las necesidades del sector agrícola
                </p>
              </div>

              <div class="border-l border-white pl-6">
                <p class="text-lg font-light">
                  <span class="block text-xl mb-2 font-normal">Innovación Digital</span>
                  Sistemas modernos de gestión financiera agrícola
                </p>
              </div>

              <div class="border-l border-white pl-6">
                <p class="text-lg font-light">
                  <span class="block text-xl mb-2 font-normal">Atención Personalizada</span>
                  Respuesta inmediata y acompañamiento continuo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {

}

.services-image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* Proporción 4:3 más profesional */
  overflow: hidden;
}

.services-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

