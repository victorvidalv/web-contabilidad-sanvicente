# Utilizar una imagen de Node como base
FROM node:18

# Instalar Git
RUN apt-get update && apt-get install -y git

# Establecer variables de entorno si es necesario
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Crear un directorio para la aplicación
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación en modo desarrollo
CMD [ "npm", "run", "dev" ]
