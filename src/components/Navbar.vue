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
                                @click.prevent="$emit('changeTheme')"
                            >Toggle Theme</button>
                        </li>
                        <li>    
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/posts">Posts</router-link>
                        </li>
                        <li>
                            <router-link to="/create-post">Create Post</router-link>
                        </li>
                        <!-- <nav-link 
                            v-for="(page, index) in pages" :key="index"
                            :page="page"
                            :index="index"
                            :isActive="activePage == index"
                        ></nav-link> -->
                    </ul>
                </div>
            </div>
        </div>
    </nav> 
</template>

<script>
// import NavLink from './PostLinks.vue';

export default {
    props: ['changeTheme'],
    // components:{
    //     PostLinks
    // },
}
</script>