<template>
    <article>
        <div class="max-w-screen-md mx-auto px-4 lg:px-5">
            <h1 class="text-gray-800 font-bold text-5xl leading-tight mb-12">{{ post. title }}</h1>
            <div class="prose max-w-none">
                {{ post.body }}
            </div>
            <div class="mt-16 pt-16 border-t border-gray-200">
                <h3 class="text-gray-800 text-3xl font-semibold mb-8">Comments</h3>
                <div class="mb-8">
                    <div class="flex mb-6">
                        <div class="flex items-center">
                            <img src="" alt="">
                            <div class="ml-6">
                                <h4 class="text-gray-800 font-semibold text-xl mb-1">Bogdan Krivenchenko</h4>
                                <span class="text-gray-400 font-medium text-lg">32 minutes ago</span>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-500 font-medium text-lg leading-relaxed mb-5">
                        To be honest I liked this article it tells you how to make money competently while in quarantine. It will also help newcomers to learn freelance sites more quickly. In General the article came out fire and it is worth it!
                    </p>
                </div>
                <div class="mb-8">
                    <div class="flex mb-6">
                        <div class="flex items-center">
                            <img src="" alt="">
                            <div class="ml-6">
                                <h4 class="text-gray-800 font-semibold text-xl mb-1">Bogdan Krivenchenko</h4>
                                <span class="text-gray-400 font-medium text-lg">32 minutes ago</span>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-500 font-medium text-lg leading-relaxed mb-5">
                        To be honest I liked this article it tells you how to make money competently while in quarantine. It will also help newcomers to learn freelance sites more quickly. In General the article came out fire and it is worth it!
                    </p>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
export default{
    props: ['id'],
    created(){
        this.getPost(this.id);
    },
    data() {
        return {
            post: []
        }
    },
    methods: {
        async getPost(id){
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            let data = await res.json();

            this.post = data;
        }
    },
    watch: {
        id(newId, oldID) {
            this.getPost(newId);
        }
    }
}
</script>