<template>
    <div class="container max-w-screen-lg mx-auto px-4 py-8">
        <form>
            <div class="mb-4">
                <label class="block mb-1">Title</label>
                <input 
                    type="text" 
                    v-model="postTitle"
                >
            </div>
            <div class="mb-4">
                <label class="block mb-1">Link Text</label>
                <input 
                    type="text" 
                    v-model="linkText"
                >
            </div>
            <div class="mb-4">
                <label class="block mb-1">Link URL</label>
                <input 
                    type="text" 
                    v-model="linkUrl"
                >
            </div>
            <div class="mb-4">
                <label>
                    Published
                    <input 
                        type="checkbox" 
                        class="form-checkbox rounded text-pink-500"
                        v-model="published"
                    />
                </label>
            </div>
            <button 
                type="submit" 
                class="block px-4 py-2 bg-blue-900 text-white rounded-sm"
                :disabled="isFormInvalid"
                @click.prevent="submitForm"
            >Submit</button>
        </form>
    </div>
</template>
<script>
export default{
    emits: ['postCreate'],
    emits: {
        // postCreate(postObj){
        //     if(!postObj.postTitle){
        //         return false;
        //     }
        // }
        postCreate({title, link, published}){
            if(!title){
                return false;
            }
            if(!link || !link.text || !link.url){
                return false;
            }
            return true;
        }
    },
    computed: {
        isFormInvalid(){
            return !this.postTitle || !this.linkText || !this.linkUrl;
        }
    },
    data(){
        return{
            'postTitle': '',
            'linkText': '',
            'linkUrl': '',
            'published': true
        }
    },
    methods: {
        submitForm(){
            if(!this.postTitle || !this.linkText || !this.linkUrl){
                alert('Please fill in the form');
                return;
            }

            this.$emit('postCreate', {
                title: this.postTitle,
                link:{
                    text: this.linkText,
                    url: this.linkUrl
                },
                published: this.published
            });

            this.postTitle = '';
            this.linkText = '';
            this.linkUrl = '';
            this.published = true
        }
        // postCreate(postObj){
        //     this.posts.push(postObj);
        // },
    },
    watch:{
        postTitle(newTitle, oldTitle){
            if(this.linkText == oldTitle){
                this.linkText = newTitle
            } 
        }
    } 
}
</script>