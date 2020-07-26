<template>
    <div class="info-point-container dflex alignCenter color-text-title">
        <img :src="point_logo" />
        {{ user_point }}
        {{ point_text }}
    </div>
</template>

<script>
    import mainfest from '../../data/manifest.json'

    export default {
        name: "info-point",

        data() {
            return {
                point_logo: mainfest.img_point,
                user_point: 0,
                point_text: 'poin'

            };
        },
    }
</script>

<style lang="scss" scoped>
    .info-point-container{
        background: #fff;
        padding: 5px 10px 5px 5px;
        border-radius: 30px;
        text-transform: capitalize;
        font-weight: 800;
        font-size: 14px;
        

        img{
            width: 100%;
            max-width: 30px;
            margin-right: 5px;
        }
    }
</style>