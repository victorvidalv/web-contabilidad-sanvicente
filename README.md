## Configuración de Construcción


# instalar dependencias
$ npm install

# servir con recarga en caliente en localhost:3000
$ npm run dev

# construir para producción y lanzar el servidor
$ npm run build

# generar proyecto estático
$ npm run generate


Para obtener una explicación detallada de cómo funcionan las cosas, consulta la [documentación](https://nuxtjs.org).

## Directorios Especiales

Puedes crear los siguientes directorios adicionales, algunos de los cuales tienen comportamientos especiales. Solo `pages` es obligatorio; puedes eliminarlos si no deseas utilizar su funcionalidad.

### `assets`

El directorio de assets contiene tus activos sin compilar, como archivos Stylus o Sass, imágenes o fuentes.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

El directorio de components contiene tus componentes Vue.js. Los componentes componen las diferentes partes de tu página y se pueden reutilizar e importar en tus páginas, layouts e incluso otros componentes.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Los layouts son de gran ayuda cuando deseas cambiar el aspecto y la sensación de tu aplicación Nuxt, ya sea que desees incluir una barra lateral o tener diseños distintos para móviles y escritorio.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

Este directorio contiene las vistas y rutas de tu aplicación. Nuxt leerá todos los archivos `*.vue` dentro de este directorio y configurará automáticamente Vue Router.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

El directorio de plugins contiene plugins JavaScript que deseas ejecutar antes de instanciar la aplicación Vue.js principal. Este es el lugar para agregar plugins de Vue y para inyectar funciones o constantes. Cada vez que necesites usar `Vue.use()`, debes crear un archivo en `plugins/` y agregar su ruta a los plugins en `nuxt.config.js`.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

Este directorio contiene tus archivos estáticos. Cada archivo dentro de este directorio se asigna a `/`.

Ejemplo: `/static/robots.txt` se asigna como `/robots.txt`.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

Este directorio contiene tus archivos de almacenamiento Vuex. Crear un archivo en este directorio activa automáticamente Vuex.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/store).

Si tienes alguna pregunta o necesitas más detalles sobre alguno de estos directorios o cualquier otro aspecto de tu proyecto Nuxt.js, no dudes en preguntar. Estoy aquí para ayudarte.