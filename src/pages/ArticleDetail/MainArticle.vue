<template>
    <div class="main-article-detail-container dflex alignCenter">
        <div class="main-article-img">
            <img :src="data.image" />
        </div>

        <div class="main-article-detail mt-1">
            <span class="category">{{ data.category }}</span>
            <h2>{{ data.title }}</h2>

            <h3>Ditulis oleh <strong>{{ data.author }} </strong></h3>
            <h3>Direview oleh <strong>{{ data.reviewer }} </strong></h3>
            <h3><font-awesome-icon icon="clock" /> {{ setDate(data.date) }}</h3>
            <div class="mt-1" v-html="data.description_long"></div>

            <tag-article :tag="data.tag" />
            <share-socialmedia />
            <related-article />
        </div>

    </div>
</template>

<script>
import TagArticle from './TagArticle.vue';
import ShareSocialmedia from './ShareSocialmedia.vue';
import RelatedArticle from './RelatedArticle.vue';
import Articles from '../../data/articles.json';

export default {
    components: {
        TagArticle,
        ShareSocialmedia,
        RelatedArticle
    },
    props: {
        data: {
            type: Object
        },
    },

    methods: {
        setDate(date){
            if(!date) return

            date = new Date(date * 1000)
            let monthNames = ["January", "February", "March", "April", "May", "June",
            "Jul", "August", "September", "October", "November", "December"];

            let dateSet = `${date.getDate()}` + ' ' + `${monthNames[date.getMonth()]}` + ' ' + `${date.getFullYear()}`
            
            return dateSet
        }
    }


}
</script>