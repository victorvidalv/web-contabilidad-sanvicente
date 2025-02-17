<template>
  <section class="max-w-[85rem] px-4 py-16 mx-auto" aria-labelledby="about-heading">
    <div class="md:grid md:grid-cols-2 md:items-center md:gap-16">
      <div class="aspect-video">
        <img 
          src="about.webp" 
          alt="Equipo de profesionales de contabilidad y consultoría" 
          class="object-cover w-full h-full"
          loading="lazy"
        >
      </div>

      <div class="mt-8 md:mt-0 p-8 bg-slate-900">
        <div class="space-y-8">
          <header class="space-y-4">
            <h1 id="about-heading" class="text-3xl lg:text-4xl font-medium text-white">
              Expertos en Consultoría y Contabilidad
            </h1>
            <p class="text-lg text-slate-200 leading-relaxed">
              Somos especialistas en servicios contables y consultoría estratégica, enfocados en el sector agroindustrial y comercial del Perú. Ofrecemos soluciones integrales en Contabilidad Financiera, Consultoría Empresarial y Gestión de Tesorería.
            </p>
          </header>

          <ul class="space-y-6 text-slate-200">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-white mr-4"></span>
              <span class="text-lg">Experiencia y conocimiento del mercado local</span>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-white mr-4"></span>
              <span class="text-lg">Implementación de soluciones tecnológicas avanzadas</span>
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-white mr-4"></span>
              <span class="text-lg">Servicio personalizado y atención dedicada</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
