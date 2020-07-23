<template>
    <div class="language-container">
        <router-link
            v-for="(item, index) in language"
            :key="index"
            to="#">
                <div :id="item.id" class="language-box">
                    {{item.id}}
                    <img :src="item.img" />
                </div>
        </router-link>
    </div>
</template>

<script>
    import languages from '../../data/languages.json';

    export default {
        name: "language",

        data() {
            return {
                language : languages
            };
        }
    }
</script>