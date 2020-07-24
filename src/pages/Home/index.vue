<template>
  <div>
    <banner-consult />
    <div class="row mt-1">
      <div class="col-7">
        <div v-for="(item, index) in articles_data" :key="index">
            <ArticleThumbnail v-if="item.is_hero === true" :data="item" />
        </div>
      </div>
      <div class="col-5">
        <mini-banner />
        <div v-for="(item, index) in articles_data" :key="index">
            <ArticleThumbnail v-if="item.is_small_hero === true" :data="item" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import BannerConsult from '../../components/BannerConsult.vue';
  import ArticleThumbnail from '../../components/ArticleThumbnail.vue';
  import MiniBanner from './MiniBanner.vue'
  import Articles from '../../data/articles.json';

  export default {
    components: {
      BannerConsult,
      ArticleThumbnail,
      MiniBanner
    },

    data(){
      return{
        articles_data : Articles,

      }
    }
  }
</script>