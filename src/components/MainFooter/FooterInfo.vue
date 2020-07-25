<template>
    <div class="footer-info">
        <img :src="footer_logo" />
        <p class="mt-1">{{ footer_info_text }}</p>

        <button-outline class="mt-1 mb-1" :text="hubungi_text"/>

        <div class="dflex info-apps" >
            <a href="http://ydok.co/android" target="_blank">
                <img :src="img_android" />
            </a>
            <a href="http://ydok.co/android" target="_blank">
                <img :src="img_ios" />
            </a>
        </div>
    </div>
</template>

<script>
import manifest from '../../data/manifest.json';
import ButtonOutline from '../Button/ButtonOutline.vue';
import { FOOTER_INFO, BUTTON_HUBUNGI_KAMI } from '../../utils/Messages';

export default {
    components: {
        ButtonOutline
    },

    data(){
        return {
            footer_logo : manifest.main_logo,
            footer_info_text: FOOTER_INFO,
            hubungi_text: BUTTON_HUBUNGI_KAMI,
            img_android: manifest.android_apps,
            img_ios: manifest.ios_apps
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer-info{
        text-align: center;
        p{
            color: #fff;
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 2rem;
        }

        .info-apps{
            margin-top: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;

            a{
                margin: 5px;
            }
            img{
                width: 100%;
                max-width: 150px;
                max-height: 50px;
            }
        }
    }
</style>