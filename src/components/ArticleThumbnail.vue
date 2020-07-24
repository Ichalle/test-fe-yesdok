<template>
    <figure class="article-thumbnail-container dflex"
        :class="data.is_hero ? 'img-hero' : 'img-mini-banner'">
        <router-link
            :to="{
                name: 'article-detail',
                params: { data: data }
            }"
            component: data >
            <img :src="data.image" :class="data.is_hero ? 'img-hero' : 'img-mini-banner'"/>

            <div class="info-free-bonus dflex alignCenter justifyCenter">
                <img :src="img_bonus" />
                <span>1+</span>
            </div>

            <div class="article-thumbnail-description"
                v-if="data.is_small_hero || data.is_hero">
                <div class="dflex">
                    <span class="category">{{data.category}}</span>
                </div>
                <div class="dblock mt-1">
                    <span class="title" :class="data.is_small_hero ? 'small-hero' : null">{{data.title}}</span>
                </div>
            </div>

        </router-link>
    </figure>
</template>

<script>
    import manifest from '../data/manifest.json';

    export default {
        name: 'article-thumbnail',
        props: {
            data: {
                type: Object
            }
        },

        data(){
            return{
                img_bonus: manifest.img_point,
            }
        }
  }
</script>