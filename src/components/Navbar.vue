<template>
    <nav class="bg-black">
        <div class="container max-w-screen-lg mx-auto px-4">
            <div class="flex">
                <div class="flex-none">
                    <h1 class="py-3 px-3 text-white bg-gray-900">SL</h1>
                </div>
                <div class="flex-auto flex justify-end">
                    <ul class="flex">
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
    props: ['pages', 'activePage', 'navLinkClick'],
    components:{
        NavLink
    },
    data() {
        return{

        }
    },
    methods: {

    }
}
</script>