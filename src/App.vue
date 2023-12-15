<template>
    <div :class="theme">
        <page-header></page-header>
        <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';

export default{
    components: {
        PageHeader,
        PageFooter
    },
    created() {
        this.getThemeSetting()

        this.$bus.$on('changeTheme', this.changeTheme);
    },
    data() {
        return{
            theme: 'dark',
        }
    },
    methods: { 
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

