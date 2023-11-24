<template>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="py-10 text-center">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">{{ post.title }}</h2>
            <p class="text-gray-500 text-xl">{{ post.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $axios, params }) {
        const post = await $axios.$get(`https://64.176.199.173:5001/articles/${params.id}`)
        return { post }
    }
}
</script>
