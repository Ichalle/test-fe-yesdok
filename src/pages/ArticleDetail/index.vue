<template>
    <div>
        <main-article :data="$route.params.data" />
        <h1>Page A </h1>
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

<style scoped>

</style>