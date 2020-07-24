<template>
    <div class="article-list-container">
        <h2>{{ article_title }}</h2> 
        <div class="row" v-for="(item, index) in data" :key="index">
            <template v-if="item.is_small_hero === false && item.is_hero === false">
                <div class="col-4 nm" >
                    <article-thumbnail :data="item" />
                </div>
                <div class="col-8">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description_short }}</p>
                    
                    <div class="article-list-footer dflex alignCenter JustifyCenter"> 
                        <div class="article-list-footer-category">
                            {{ item.category }}
                        </div>
                        <div class="article-list-footer-date">
                            {{ setDate(item.date) }}
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import ArticleThumbnail from '../../components/ArticleThumbnail.vue';

    export default {
        name: 'article-list',
        props: {
            article_title: {
                type: String
            },
            data: {
                type: Array
            }
        },
        components: {
            ArticleThumbnail
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