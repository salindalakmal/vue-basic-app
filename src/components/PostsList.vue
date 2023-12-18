<template>
    <div class="grid grid-cols-12 gap-y-8 md:gap-x-8">
        <post-content 
            v-if="posts.length > 0"
            v-for="(post, index) in posts" 
            :key="index"
            :post="post"
        ></post-content>
    </div>
    <div class="mt-16">
        <ul class="flex justify-center gap-2">
            <li>
                <a class="flex items-center justify-center text-gray-400 text-xl font-semibold border border-gray-200 w-12 h-12 rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600" href="#">
                    <svg class="stroke-current" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.84497 2.311L1.99997 10.156L9.84497 18" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>  
                </a>
            </li>
            <li>
                <span class="flex items-center justify-center bg-blue-600 text-white text-xl font-semibold border border-blue-600 w-12 h-12 rounded-2xl">1</span>
            </li>
            <li>
                <a class="flex items-center justify-center text-gray-500 text-xl font-semibold border border-gray-75 w-12 h-12 rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600" href="#">2</a>
            </li>
            <li>
                <a class="flex items-center justify-center text-gray-500 text-xl font-semibold border border-gray-75 w-12 h-12 rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600" href="#">3</a>
            </li>
            <li>
                <a class="flex items-center justify-center text-gray-500 text-xl font-semibold border border-gray-75 w-12 h-12 rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600" href="#">
                    <svg class="stroke-current" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18L9.845 10.155L2 2.31097"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg> 
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import PostContent from '../components/PostContent.vue';

export default{
    components:{ 
        PostContent,
    },
    created() {
        this.getPosts()
    },
    computed: {
        publishedPosts(){
            return this.posts.filter(p => p.published);
        }
    },
    data() {
        return{
            activePost: 0,
            theme: 'dark',
            posts: []
        }
    },
    methods: { 
        async getPosts(){

            let res = await fetch('https://jsonplaceholder.typicode.com/posts');
            let data = await res.json();

            this.posts = data

        },
    }
}
</script>