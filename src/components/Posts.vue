<template>
    <post-content 
        v-if="posts.length > 0"
        v-for="(post, index) in posts" 
        :key="index"
        :post="post"
    ></post-content>
    <!-- <create-post
        @post-create="postCreate"
    ></create-post> -->
</template>
<script>
import PostContent from './PostContent.vue';
import CreatePost from './CreatePost.vue';

export default{
    components:{
        PostContent,
        CreatePost
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
        // postCreate(postObj){
        //     this.posts.push(postObj);
        // },
    }
}
</script>