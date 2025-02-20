module.exports = {
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
        'sans': ['Roboto', 'Arial', 'sans-serif'],
        'helvetica': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
}
