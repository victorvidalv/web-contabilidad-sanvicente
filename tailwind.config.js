module.exports = {
    // Configuración PURGE CSS
  purge: {
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js',
      './nuxt.config.js',
    ],
    options: {
      safelist: [], 
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  // Configuración del modo oscuro
  darkMode: 'class', // Habilita el modo oscuro con la clase .dark

  // Contenido a procesar por Tailwind CSS

}
