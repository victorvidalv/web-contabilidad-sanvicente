<template>
    <div>
      <div>     <div>
                <svg class="hs-collapse-open:hidden w-8 h-8" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg class="hs-collapse-open:block hidden w-8 h-8" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
  
          <div @click="toggleMenu"
            id="navbar-collapse-with-animation"
            :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}"
            class="hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-7">
              <nuxt-link   class="font-medium md:w-32 md:text-center md:border-l   sm:py-6 trick py-2 px-2   " to="/">Inicio</nuxt-link>
              <nuxt-link    class="font-medium md:w-32 md:text-center md:border-l   sm:py-6 trick  py-2 px-2 " to="/nosotros">Nosotros</nuxt-link>
              <nuxt-link   class="font-medium md:w-32 md:text-center md:border-l  sm:py-6 trick  py-2 px-2  " to="/servicios">Servicios</nuxt-link>

              <nuxt-link   class="font-medium md:w-32 md:text-center md:border-l  sm:py-6 trick  py-2 px-2  " to="/capacitacion">Capacitación</nuxt-link>
              <nuxt-link class="font-medium md:w-32 md:text-center md:border-l  md:border-r  sm:py-6 trick py-2 px-2  " to="/contacto">Contacto</nuxt-link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IndexPage',
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
        closeMenu() {
            this.isMenuOpen = false;
        },
    },
  };
  </script>
