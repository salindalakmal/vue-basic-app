import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './components/Home.vue';
import Posts from './components/Posts.vue';
import PostsList from './components/PostsList.vue';
import PostCreate from './components/PostCreate.vue';
import PostView from './components/PostView.vue';
import PostEdit from './components/PostEdit.vue';

const router = createRouter({ 
    history: createWebHashHistory(),
    routes : [
        {path: '/', component: Home},
        {
            path: '/posts', 
            component: Posts,
            children: [
                {path: '', component: PostsList},
                {path: 'create', component: PostCreate},
                {path: ':id/edit', component: PostEdit},
                {path: ':id', component: PostView, props: true},
            ]
        },
    ]
})

export default router;  