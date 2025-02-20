<template>

    <!-- Hero Section -->
    <div class="relative h-screen flex items-center justify-center overflow-hidden">
        <!-- Video de fondo -->
        <video autoplay muted loop playsinline class="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
            <source src="/intro.mp4" type="video/mp4">
            Tu navegador no soporta videos HTML5.
        </video>

        <!-- Capa oscura para mejorar la legibilidad del texto -->
        <div class="absolute z-10 w-full h-full bg-blue-900/40"></div>

        <!-- Contenido del Hero -->
        <div class="relative z-20 text-center text-white max-w-4xl px-4">
            <h1 class="text-5xl font-bold animate-slide-up">
                Expertos en Consultoría y Contabilidad
            </h1>
            <p class="mt-6 text-xl animate-slide-up animate-delay-500">
                Soluciones contables integrales y asesoría estratégica para el crecimiento de tu negocio
            </p>
            <div class="mt-8 space-x-4">
                <a href="/servicios" class="inline-block bg-orange-600 text-white px-8 py-3 hover:bg-orange-700 transition duration-300 animate-slide-up animate-delay-1000">
                    Conoce nuestros servicios
                </a>
                <a href="/contacto" class="inline-block border-2 border-white text-white px-8 py-3  hover:bg-white/10 transition duration-300 animate-slide-up animate-delay-1000">
                    Contáctanos
                </a>
            </div>
        </div>
    </div>

    <!-- Animaciones personalizadas -->
  

</template>

