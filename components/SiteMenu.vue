<template>
  <div>
    <nav class="bg-blue-950 text-white">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-2">
        <!-- Logo y nombre del sitio -->
        <nuxt-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <SiteLogo />
        </nuxt-link>

        <!-- Botón para menú móvil -->
        <button @click="toggleMenu" type="button" 
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-white md:hidden hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-800"
          aria-controls="navbar-main" aria-expanded="false">
          <span class="sr-only">Abrir menú principal</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path v-if="!isMenuOpen" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            <path v-else stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1 15 15M1 15 15 1"/>
          </svg>
        </button>

        <!-- Menú principal -->
        <div id="navbar-main" :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}"
          class="items-center justify-between w-full md:flex md:w-auto mt-4 md:mt-0">
          <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-1">
            <li>
              <nuxt-link to="/" 
                class="block py-2 px-3 md:px-4 md:py-2.5 hover:bg-blue-950"
                exact-active-class="bg-orange-600 text-white">
                Inicio
              </nuxt-link>
            </li>
            
            <!-- Menú desplegable Nosotros -->
            <li class="relative" 
                @mouseenter="handleMouseEnter('nosotros')" 
                @mouseleave="handleMouseLeave('nosotros')">
              <button id="nosotros-dropdown-button" 
                @click="toggleNosotrosDropdown"
                class="flex items-center justify-between w-full py-2 px-3 md:px-4 md:py-2.5 hover:bg-blue-950"
                :class="{'bg-orange-600': $route.path.startsWith('/nosotros') || $route.path.startsWith('/blog')}">
                Nosotros
                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              
              <!-- Dropdown menu -->
              <div id="nosotros-dropdown" 
                v-show="nosotrosDropdown"
                class="absolute z-10 bg-blue-950 border border-blue-800 shadow-lg w-40 md:mt-2">
                <div class="p-2">
                  <nuxt-link to="/nosotros/" 
                    class="block px-4 py-2 text-white hover:bg-blue-950"
                    @click.native="closeDropdowns">
                    Empresa
                  </nuxt-link>
                  <nuxt-link to="/blog/" 
                    class="block px-4 py-2 text-white hover:bg-blue-950 mt-1"
                    @click.native="closeDropdowns">
                    Blog
                  </nuxt-link>
                </div>
              </div>
            </li>

            <!-- Menú desplegable Servicios -->
            <li class="relative"
                @mouseenter="handleMouseEnter('servicios')" 
                @mouseleave="handleMouseLeave('servicios')">
              <button id="servicios-dropdown-button" 
                @click="toggleServiciosDropdown"
                class="flex items-center justify-between w-full py-2 px-3 md:px-4 md:py-2.5 hover:bg-blue-950"
                :class="{'bg-orange-600': $route.path.startsWith('/servicios') || $route.path.startsWith('/capacitacion')}">
                Servicios
                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              
              <!-- Dropdown menu -->
              <div id="servicios-dropdown" 
                v-show="serviciosDropdown"
                class="absolute z-10 bg-blue-950 border border-blue-800 shadow-lg w-48 md:mt-2">
                <div class="p-2">
                  <nuxt-link to="/servicios/" 
                    class="block px-4 py-2 text-white hover:bg-blue-950"
                    @click.native="closeDropdowns">
                    Servicios Contables
                  </nuxt-link>
                  <nuxt-link to="/capacitacion/" 
                    class="block px-4 py-2 text-white hover:bg-blue-950 mt-1"
                    @click.native="closeDropdowns">
                    Capacitación
                  </nuxt-link>
                </div>
              </div>
            </li>
            
            <li>
              <nuxt-link to="/oficina-virtual/" 
                class="block py-2 px-3 md:px-4 md:py-2.5 hover:bg-blue-950"
                exact-active-class="bg-orange-600 text-white">
                Oficina Virtual
              </nuxt-link>
            </li>
            
            <li>
              <nuxt-link to="/herramientas/" 
                class="block py-2 px-3 md:px-4 md:py-2.5 hover:bg-blue-950"
                exact-active-class="bg-orange-600 text-white">
                Herramientas
              </nuxt-link>
            </li>
            
            <li>
              <nuxt-link to="/contacto/" 
                class="block py-2 px-3 md:px-4 md:py-2.5 hover:bg-blue-950"
                exact-active-class="bg-orange-600 text-white">
                Contacto
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
  
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isMenuOpen: false,
      nosotrosDropdown: false,
      serviciosDropdown: false,
      timeoutNosotros: null,
      timeoutServicios: null,
      isMobile: false
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
    this.clearTimeouts();
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen === false) {
        this.closeDropdowns();
      }
    },
    toggleNosotrosDropdown(event) {
      // En móvil, maneja el evento como toggle normal
      if (this.isMobile) {
        this.nosotrosDropdown = !this.nosotrosDropdown;
        if (this.nosotrosDropdown) {
          this.serviciosDropdown = false;
        }
      } else {
        // En desktop, siempre abre el dropdown al hacer clic
        this.serviciosDropdown = false;
        this.nosotrosDropdown = true;
      }
      // Prevenir que el evento click propague si está abierto
      if (this.nosotrosDropdown) {
        event.stopPropagation();
      }
    },
    toggleServiciosDropdown(event) {
      // En móvil, maneja el evento como toggle normal
      if (this.isMobile) {
        this.serviciosDropdown = !this.serviciosDropdown;
        if (this.serviciosDropdown) {
          this.nosotrosDropdown = false;
        }
      } else {
        // En desktop, siempre abre el dropdown al hacer clic
        this.nosotrosDropdown = false;
        this.serviciosDropdown = true;
      }
      // Prevenir que el evento click propague si está abierto
      if (this.serviciosDropdown) {
        event.stopPropagation();
      }
    },
    handleMouseEnter(menu) {
      // Solo aplicar hover en desktop
      if (this.isMobile) return;

      this.clearTimeouts();
      
      if (menu === 'nosotros') {
        this.nosotrosDropdown = true;
        this.serviciosDropdown = false;
      } else if (menu === 'servicios') {
        this.serviciosDropdown = true;
        this.nosotrosDropdown = false;
      }
    },
    handleMouseLeave(menu) {
      // Solo aplicar hover en desktop
      if (this.isMobile) return;

      // Retraso para permitir que el cursor se mueva al dropdown
      if (menu === 'nosotros') {
        this.timeoutNosotros = setTimeout(() => {
          this.nosotrosDropdown = false;
        }, 300);
      } else if (menu === 'servicios') {
        this.timeoutServicios = setTimeout(() => {
          this.serviciosDropdown = false;
        }, 300);
      }
    },
    clearTimeouts() {
      if (this.timeoutNosotros) {
        clearTimeout(this.timeoutNosotros);
        this.timeoutNosotros = null;
      }
      if (this.timeoutServicios) {
        clearTimeout(this.timeoutServicios);
        this.timeoutServicios = null;
      }
    },
    closeDropdowns() {
      this.nosotrosDropdown = false;
      this.serviciosDropdown = false;
    }
  },
  watch: {
    '$route'() {
      // Cerrar menú desplegable y menú móvil al cambiar de ruta
      this.nosotrosDropdown = false;
      this.serviciosDropdown = false;
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Mejoras para pantallas pequeñas */
@media (max-width: 768px) {
  #navbar-main ul {
    @apply space-y-2 py-2;
  }
  
  #nosotros-dropdown,
  #servicios-dropdown {
    position: relative;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
