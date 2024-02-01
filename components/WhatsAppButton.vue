<template>
  <div class="whatsapp-button">
    <a :href="whatsappUrl" target="_blank">
      <img src="/WhatsApp_icon.png" alt="WhatsApp"/>
      <span>Escríbenos</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Reemplaza con tu número de WhatsApp
      phoneNumber: '+56722746337',
    }
  },
  computed: {
    whatsappUrl() {
      const message = encodeURIComponent('Hola, me gustaría obtener más información.');
      return `https://wa.me/${this.phoneNumber}?text=${message}`;
    }
  }
}
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  /* Estilos adicionales para el botón */
}

.whatsapp-button img {
  width: 50px;
  height: 50px;
  /* Estilos adicionales para el icono */
}

.whatsapp-button span {
  /* Estilos para el texto */
}
</style>
