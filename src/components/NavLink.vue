<template>
    <a 
        class="text-white block py-3 px-3 hover:bg-gray-900"
        :class="activeClasses"
        :href="page.link.url"
    >{{ page.link.text }}</a>
</template>

<script>
import { isReactive } from 'vue';

export default{
    props: ['page', 'isActive'],
    computed: {
        activeClasses(){
            return{
                'active': this.isActive,
                'bg-gray-900': this.isActive,
            }
        }
    }
}
</script>