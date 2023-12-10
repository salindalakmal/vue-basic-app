<template>
    <div 
        :class="theme">
        <navbar 
            v-if="pages.length > 0"
            :pages="pages" 
            :active-page="activePage"
            :change-theme="changeTheme"
            :nav-link-click="(index) => activePage = index"
        ></navbar>
        <page-content 
            v-if="pages.length > 0"
            :page="pages[activePage]"
        ></page-content>
    </div>
</template>

<script>
import PageContent from './components/PageContent.vue';
import Navbar from './components/Navbar.vue';

export default{
    components: {
        Navbar,
        PageContent,
    },
    created() {
        this.getPages()
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
            let res = await fetch('../public/pages.json');
            let data = await res.json();

            this.pages = data;
        },
        changeTheme(){
            let theme = 'light';

            if(this.theme == 'light'){
                theme = 'dark'
            }
            this.theme = theme;
        }
    }
}
</script>

