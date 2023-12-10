<template>
    <nav class="bg-gray-200 dark:bg-black">
        <div class="container max-w-screen-lg mx-auto px-4">
            <div class="flex">
                <div class="flex-none">
                    <h1 class="py-3 px-3 text-white bg-gray-900">SL</h1>
                </div>
                <div class="flex-auto flex justify-end">
                    <ul class="flex items-center">
                        <li>
                            <button 
                                type="button" 
                                class="block bg-blue-900 rounded-full text-white text-sm py-2 px-3 mr-2" 
                                @click.prevent="changeTheme()"
                            >Toggle Theme</button>
                        </li>
                        <li v-for="(page, index) in pages" :key="index">
                            <nav-link 
                                :page="page"
                                :isActive="activePage == index"
                                @click.prevent="navLinkClick(index)"
                            ></nav-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav> 
</template>

<script>
import NavLink from './NavLink.vue';

export default {
    props: ['changeTheme', 'pages', 'activePage', 'navLinkClick'],
    components:{
        NavLink
    },
}
</script>