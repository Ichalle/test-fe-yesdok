<template>
    <div class="related-article">
        <article-list 
            :article_title="'Artikel Terkait'" 
            :data="getThreeArticles(related_articles_data)" 
            :hide_description="true" />
    </div>
</template>

<script>
import Articles from '../../data/articles.json';
import ArticleList from '../Home/ArticleList.vue';

export default {
    name: 'related-article',

    components:{
        ArticleList
    },

    data(){
      return{
        related_articles_data : Articles,
      }
    },

    methods:{
        getThreeArticles(related_articles_data){
            let selected = []
            let get_data = related_articles_data

            for (let i = 0; i < 3; i++) {
                let idx = Math.floor(Math.random() * 8);
                selected.push(get_data[idx]);
            }

            return selected
        }
    }
}
</script>

<style lang="scss" scoped>
    .article-list-container h2{
        font-size: 1rem !important;
        color: gray !important;
    }
</style>