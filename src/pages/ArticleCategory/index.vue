<template>
  <div>
    <div class="row mt-1 category-title">
        <div class="col-12">
          <h2>{{ getCategory }}</h2>
        </div>
    </div>

    <div class="row mt-1">
        <div class="col-8">
          <article-list 
            :article_title="'Article Terbaru'" 
            :data="articles_data" 
            :category="getCategory"
            />
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
  import ArticleThumbnail from '../../components/ArticleThumbnail.vue';
  import ArticleList from '../Home/ArticleList.vue';
  import Articles from '../../data/articles.json';

  export default {
    components: {
      ArticleThumbnail,
      ArticleList
    },

    data(){
      return{
        articles_data : [],
        setCategory: ''
      }
    },

    created(){
      this.getData()
    },

    computed: {
      getCategory(){
        if(!this.$route.query.cat) return
        let cat = this.$route.query.cat
        return cat
      }
    },

    methods: {
      getData() {
        if(this.$store.state.articles.length === 0) {
            this.$store.commit('addData', Articles)
        }
        return this.articles_data = this.$store.state.articles[0].data 
      },
      
    }

  }
</script>

<style lang="scss" scoped>
  .category-title{
    background: #eef1f5;
    padding: 1rem 0;
    
    h2{
      text-transform: uppercase;
    }
  }
</style>