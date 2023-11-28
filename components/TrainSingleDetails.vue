<template>
  <div>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="md:grid md:grid-cols-6 md:items-center md:gap-6 xl:gap-6">
        <div class="mt-5 sm:mt-10 lg:mt-0 col-span-4">
          <div class="space-y-6 sm:space-y-8">
            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-3xl lg:text-4xl text-gray-800">
                Detalles del Capacitación
              </h2>
              <p class="text-gray-500">
                <span v-html="displayedText"></span>
                <button v-if="!showFullText" @click="toggleText" class="text-blue-500">Leer más</button>
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <img src="detail1.webp" alt="Descripción de la Imagen">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['details'],
  data() {
    return {
      showFullText: false,
    };
  },
  computed: {
    displayedText() {
      if (this.showFullText) {
        return this.details;
      } else {
        let firstParagraph = this.details.split('.')[0] + '.';
        return firstParagraph;
      }
    }
  },
  methods: {
    toggleText() {
      this.showFullText = !this.showFullText;
    }
  }
};
</script>
