<template>
    <div>
        <main-article 
          :data="this.$route.params.data" 
          v-if="this.$route.params.data" />
    </div>
</template>

<script>
import MainArticle from './MainArticle.vue';

export default {
  components: {
    MainArticle
  }
}
</script>