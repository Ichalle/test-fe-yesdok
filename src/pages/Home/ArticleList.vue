<template>
    <div class="article-list-container">
        <h2>{{ article_title }}</h2> 
        <div v-for="(item, index) in data" :key="index">
            <div class="row" v-if="showArticle(item)">
                <div class="col-4 ml-0" >
                    <article-thumbnail :data="item" />
                </div>
                <div class="col-8">
                    <h3 :class="hide_description ? 'small' : null">
                        <router-link
                            :to="{
                                name: 'article-detail',
                                params: { data: item }
                            }">
                        {{ item.title }}
                        </router-link>
                    </h3>

                    <p class="mb-3">{{ hide_description ? null : item.description_short }}</p>
                    
                    <div class="article-list-footer dflex alignCenter JustifyCenter"> 
                        <router-link
                            class="article-list-footer-category"
                            :to="{
                                name: 'article-category',
                                query: { cat: item.category }
                            }">
                                {{ item.category }}
                        </router-link>

                        <div class="article-list-footer-date">
                            <font-awesome-icon icon="clock" />
                            {{ setDate(item.date) }}
                        </div>
                    </div>
                </div>
            </div>
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
            },
            hide_description:{
                type: Boolean
            },
            category: {
                type: String
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
            },

            showArticle(item){
                if(!this.category) return this.showDescription(item)
                if(this.category && this.category === item.category){
                    return this.showDescription(item)
                } 
                return false
            },

            showDescription(item){
                if(item.is_small_hero === false && item.is_hero === false) return true
                return false
            }
        }
    }
</script>