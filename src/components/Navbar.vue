<template>
    <nav>
        <ul class="flex flex-col items-center md:flex-row gap-2 md:gap-8">
            <li class="md:py-1">
                <router-link 
                    to="/" 
                    active-class="text-gray-700"
                    class="text-gray-400 font-semibold text-base hover:text-gray-700 transition duration-200 ease-in-out"
                >Home</router-link>
            </li>
            <li class="md:py-1">
                <router-link 
                    to="/posts" 
                    active-class="text-gray-700"
                    class="text-gray-400 font-semibold text-base hover:text-gray-700 transition duration-200 ease-in-out"
                >Posts</router-link>
            </li>
            <li class="md:py-1">
                <button
                    type="button" 
                    active-class="text-gray-700"
                    class="text-white font-semibold text-base block py-2 px-4 rounded bg-blue-600  hover:bg-blue-900 transition duration-200 ease-in-out"
                    @click.prevent="$bus.$emit('changeTheme')"
                >Toggle Theme</button>
            </li>
            <!-- <nav-item 
                v-for="(page, index) in pages" :key="index"
                :page="page"
                :index="index"
                :isActive="activePage == index"
            ></nav-item> -->
        </ul>
    </nav>
</template>
