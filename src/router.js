import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './components/Home.vue';
import Posts from './components/Posts.vue';
import CreatePost from './components/CreatePost.vue';
import ViewPost from './components/ViewPost.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/posts', component: Posts},
    {path: '/post/:id', component: ViewPost, props: true},
    {path: '/create-post', component: CreatePost}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})


export default router;  