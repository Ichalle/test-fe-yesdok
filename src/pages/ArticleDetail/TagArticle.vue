<template>
    <div class="main-article-tag">
        <h3>TAG TERKAIT</h3>

        <div class="mt-1">
            <span class="tag-item" v-for="(item, index) in tag" :key="index">{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tag: {
            type: Array
        },
    },

}
</script>