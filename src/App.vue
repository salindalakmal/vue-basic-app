<template>
    <navbar 
        :pages="pages" 
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"
    ></navbar>
    <div class="container max-w-screen-lg mx-auto px-4">
        <div class="border-b border-gray-200 py-4">
            <h1 class="text-xl font-semibold">{{ pages[activePage].title }}</h1>
        </div>
    </div>
</template>

<script>

import Navbar from './components/Navbar.vue';

export default{
    components: {
        Navbar,
    },
    data() {
        return{
            activePage: 0,
            pages: [
                {
                    title : 'Home',
                    link: {text: 'Home', url: 'home'}
                }, 
                {
                    title : 'About',
                    link: {text: 'About', url: 'about'}
                }, 
            ]
        }
    }
}

</script>

