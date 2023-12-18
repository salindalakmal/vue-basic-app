<template>
    <header class="bg-gray-100 dark:bg-gray-900">
        <div class="h-16 flex items-center max-w-screen-xl mx-auto px-4 lg:px-8">
            <router-link 
                to="/"
                class="text-gray-700 font-bold text-2xl uppercase"
            >Post App</router-link >
            <button class="menu-button ml-auto">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </button>
            <navbar></navbar>
        </div>
    </header>
</template>
<script>
import Navbar from './Navbar.vue';

export default{
    components:{
        Navbar
    }
}
</script>