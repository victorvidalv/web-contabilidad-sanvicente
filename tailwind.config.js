// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
        'node_modules/preline/dist/*.js',
    ],
    plugins: [
        require('preline/plugin'),
    ],
    
  }