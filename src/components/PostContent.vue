<template>
    <div class="col-span-12 md:col-span-6 xl:col-span-4">
        <article class="bg-white border border-gray-200 rounded-2xl h-full flex flex-col">
            <figure class="-m-2px mb-0 flex-now">
                <img class="rounded-tl-2xl rounded-tr-2xl w-full" src="" alt="">
            </figure>
            <div class="p-8 flex-auto flex flex-col"> 
                <div class="flex flex-wrap sm:gap-5 items-center mb-6 sm:mb-8">
                    <a class="w-full sm:w-auto block text-blue-600 font-semibold text-lg" href="#">Business</a>
                    <span class="block text-gray-400 font-semibold text-lg">29th May</span>
                    <div class="flex gap-1 items-center py-1 px-4 text-blue-600 font-semibold text-lg ml-auto rounded-full bg-blue-100">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 0.5C11.891 0.5 10.008 2.325 9 3.5C7.992 2.325 6.109 0.5 4.5 0.5C1.651 0.5 0 2.722 0 5.55C0 8.68333 3 12 9 15.5C15 12 18 8.75 18 5.75C18 2.922 16.349 0.5 13.5 0.5Z" fill="#377DFF"/></svg>
                        <span>35</span>
                    </div>
                </div>
                <h3 class="text-3xl leading-tight font-bold text-gray-800 mb-6 sm:mb-8">{{ post.title }}</h3>
                <p class="text-gray-500 font-medium text-lg mb-6 sm:mb-8">
                    {{ post.body }}
                </p>
                <router-link
                    class="flex items-center gap-4 text-xl text-blue-600 font-semibold mt-auto" 
                    :to="`posts/${post.id}`"
                >
                    <span>Read story</span>
                    <svg class="-mb-1" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.28064 11.747L16.6256 11.747L10.3526 18.023C10.1073 18.2566 9.96842 18.5807 9.96842 18.9195C9.96842 19.2583 10.1073 19.5823 10.3526 19.816C10.5863 20.0613 10.9103 20.2002 11.2491 20.2002C11.588 20.2002 11.912 20.0613 12.1456 19.816L20.4686 11.491C20.9818 10.9044 20.9818 10.0286 20.4686 9.44197L12.1436 1.11697C11.91 0.871613 11.586 0.732746 11.2471 0.732746C10.9083 0.732746 10.5843 0.871613 10.3506 1.11697H10.3506C10.1053 1.35064 9.96642 1.67465 9.96642 2.01347C9.96642 2.35229 10.1053 2.67631 10.3506 2.90997L16.6256 9.18497L2.28064 9.18497C1.9349 9.16401 1.59675 9.29223 1.35183 9.53715C1.1069 9.78208 0.97868 10.1202 0.999641 10.466C0.97868 10.8117 1.1069 11.1499 1.35182 11.3948C1.59675 11.6397 1.93489 11.7679 2.28064 11.747Z" fill="#377DFF"/></svg>
                </router-link>
            </div>
        </article>
    </div>
</template>

<script>
export default{
    props: {
        post: {
            type: Object,
            default(rawProps){
                return{
                    title: '',
                    body: '',
                }
            } 
        }
    }
}
</script>