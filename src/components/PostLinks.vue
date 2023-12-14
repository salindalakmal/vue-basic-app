<template>
    <div 
        :class="theme">
        <navbar 
            v-if="posts.length > 0"
            :posts="publishedPosts" 
            :active-page="activePage"
            @change-theme="changeTheme"
        ></navbar>
        <router-view></router-view>
        <!-- <create-page
            @page-create="pageCreate"
        ></create-page> -->
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default{
    components: {
        Navbar,
    },
    created() {
        
        this.getThemeSetting()
        this.getPosts()

        this.$bus.$on('navLinkClick', (index) => {
            this.activePage = index;
        })
    },
    computed: {
        publishedPosts(){
            return this.posts.filter(p => p.published);
        }
    },
    data() {
        return{
            activePage: 0,
            theme: 'dark',
            posts: []
        }
    },
    methods: { 
        async getPosts(){
            let res = await fetch('/posts.json');
            let data = await res.json();

            this.posts = data;
        },
        changeTheme(){
            let theme = 'light';

            if(this.theme == 'light'){
                theme = 'dark'
            }
            this.theme = theme;
            this.storeThemeSetting();
        },
        storeThemeSetting(){
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting(){
            let theme = localStorage.getItem('theme');

            if(theme){
                this.theme = theme;
            }
        }
    }
}
</script>

