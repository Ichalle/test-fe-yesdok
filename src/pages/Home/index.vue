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

    <div class="row mt-1">
        <div class="col-8">
          <article-list 
            :article_title="'Article Terbaru'" 
            :data="articles_data" />
        </div>
        <div class="col-4">
          <article-list 
            :article_title="'Article Terbaru'" 
            :data="articles_data" 
            :hide_description="true"
            />
        </div>
    </div>

  </div>
</template>

<script>
  import BannerConsult from '../../components/BannerConsult.vue';
  import ArticleThumbnail from '../../components/ArticleThumbnail.vue';
  import MiniBanner from './MiniBanner.vue';
  import ArticleList from './ArticleList.vue';
  import Articles from '../../data/articles.json';

  export default {
    components: {
      BannerConsult,
      ArticleThumbnail,
      MiniBanner,
      ArticleList

    },

    data(){
      return{
        articles_data : [],
      }
    },

    created(){
      this.getData()
    },

    methods: {
      getData() {
        if(this.$store.state.articles.length === 0) {
            this.$store.commit('addData', Articles)
        }
        return this.articles_data = this.$store.state.articles[0].data 
      }
    }

  }
</script>