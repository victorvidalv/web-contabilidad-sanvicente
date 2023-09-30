module.exports = {
    // Configuración del modo oscuro
    darkMode: 'class', // Habilita el modo oscuro con la clase .dark

    // Contenido a procesar por Tailwind CSS
    content: [
        'node_modules/preline/dist/*.js', // Incluye archivos JavaScript de preline
    ],

    // Plugins de Tailwind CSS
    plugins: [
        require('preline/plugin'), // Agrega el plugin de preline
    ],
}
