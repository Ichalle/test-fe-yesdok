<template>
    <div>
        <h3>{{ title_footer_top }}</h3>
        <div class="footer-item">
            <div class="footer-item-left">
                <font-awesome-icon icon="envelope" />
            </div>

            <div class="footer-item-right">
            <p>Corporate Info :<br/>info@yesdok.com</p>
            </div>
        </div>
        <div class="footer-item">
            <div class="footer-item-left">
                <font-awesome-icon icon="envelope" />
            </div>

            <div class="footer-item-right">
            <p>Customer Service :<br/>help@yesdok.com</p>
            </div>
        </div>

        <h3>{{ title_footer_bottom }}</h3>
        <div class="footer-item">
            <a class="footer-sosmed" href="https://www.facebook.com/yesdok24jam/" target="_blank">
                <img :src="sosmed_fb" />
            </a>
            <a class="footer-sosmed" href="https://twitter.com/yesdok_id/" target="_blank">
                <img :src="sosmed_twitter" />
            </a>
            <a class="footer-sosmed" href="https://www.instagram.com/yesdok_id/" target="_blank">
                <img :src="sosmed_ig" />
            </a>
        </div>
    </div>
</template>

<script>
import manifest from '../../data/manifest.json';
import { FOOTER_TITLE_KONTAK, FOOTER_TITLE_FOLLOWUS } from '../../utils/Messages';

export default {
    data(){
        return{
            title_footer_top: FOOTER_TITLE_KONTAK,
            title_footer_bottom: FOOTER_TITLE_FOLLOWUS,
            flag_id: manifest.flag_indonesia,
            flag_sg: manifest.flag_sg,
            sosmed_fb: manifest.follow_fb,
            sosmed_twitter: manifest.follow_twitter,
            sosmed_ig: manifest.follow_ig,
        }
    }
}
</script>