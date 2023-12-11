<template>
    <div 
        :class="theme">
        <navbar 
            v-if="pages.length > 0"
            :pages="publishedPages" 
            :active-page="activePage"
            :change-theme="changeTheme"
            :nav-link-click="(index) => activePage = index"
        ></navbar>
        <page-content 
            v-if="pages.length > 0"
            :page="pages[activePage]"
        ></page-content>
        <create-page
            :page-create="pageCreate"
        ></create-page>
    </div>
</template>

<script>
import PageContent from './components/PageContent.vue';
import Navbar from './components/Navbar.vue';
import CreatePage from './components/CreatePage.vue';

export default{
    components: {
        Navbar,
        PageContent,
        CreatePage,
    },
    created() {
        this.getThemeSetting()
        this.getPages()
    },
    computed: {
        publishedPages(){
            return this.pages.filter(p => p.published);
        }
    },
    data() {
        return{
            activePage: 0,
            theme: 'dark',
            pages: []
        }
    },
    methods: { 
        async getPages(){
            let res = await fetch('/pages.json');
            let data = await res.json();

            this.pages = data;
        },
        changeTheme(){
            let theme = 'light';

            if(this.theme == 'light'){
                theme = 'dark'
            }
            this.theme = theme;
            this.storeThemeSetting();
        },
        pageCreate(pageObj){
            console.log(pageObj);
            this.pages.push(pageObj);
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

