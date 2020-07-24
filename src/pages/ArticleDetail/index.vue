<template>
    <div>
        <main-article :data="$route.params.data" />
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