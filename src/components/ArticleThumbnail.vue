<template>
    <figure class="article-thumbnail-container dflex"
        :class="data.is_hero ? 'img-hero' : 'img-mini-banner'">
        <router-link
        to="article-detail">
            <img :src="data.image" :class="data.is_hero ? 'img-hero' : 'img-mini-banner'"/>

            <div class="info-free-bonus dflex alignCenter justifyCenter">
                <img :src="img_bonus" />
                <span>1+</span>
            </div>

            <div class="article-thumbnail-description">
                <div class="dflex">
                    <span class="category">{{data.category}}</span>
                </div>
                <div class="dblock mt-1">
                    <span class="title">{{data.title}}</span>
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