<template>
    <div class="container max-w-screen-lg mx-auto px-4">
        <div class="border-b border-gray-200 py-4">
            <h1 class="text-xl font-semibold">{{ post.title }}</h1>
            <div>
                {{ post.body }}
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        post: {
            type: Object,
            default(rawProps){
                return{
                    title: '',
                    body: '',
                }
            } 
        }
    }
}
</script>