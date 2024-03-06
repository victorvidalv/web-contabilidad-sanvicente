<template>
  
    
   <div class="grid grid-cols-10 bg-gray-200 gap-4" :id="id">

    <div class="col-span-3  p-2">

        <img :src="img" alt="imagen" class="w-full h-auto img-fluid">
</div>
  

    <div class="col-span-7  p-2" >
    <slot name="texto"></slot>

    </div>


  </div>


</template>

<script>

export default {

    props: {
        id: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    }

}
</script>
