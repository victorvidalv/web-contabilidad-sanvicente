<template>
  <div>
    <!--  -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
      <!--  -->
      <div class="md:grid md:grid-cols-6 md:items-center md:gap-6 xl:gap-6">

        <div class="mt-5 sm:mt-10 lg:mt-0 col-span-4">
          <div class="space-y-6 sm:space-y-8">
            <!--  -->
            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 ">
                Detalles del Servicio
              </h2>
              <p class="text-gray-500" v-html="details">

              </p>
            </div>
          </div>
        </div>

        <div class="col-span-2">
          <img src="https://dummyimage.com/410x550/e5e7eb/aaa" alt="Image Description">
        </div>
        <!--  -->
        <!--  -->
      </div>
      <!--  -->
    </div>
    <!--  -->
</div>
</template>

<script>
export default {
  props: ['details'],
};
</script>
