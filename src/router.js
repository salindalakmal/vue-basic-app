import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './components/Home.vue';
import Posts from './components/Posts.vue';
import CreatePost from './components/CreatePost.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/posts', component: Posts},
    // {path: '/post/:index', component: ViewwPost},
    {path: '/create-post', component: CreatePost}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})


export default router; 