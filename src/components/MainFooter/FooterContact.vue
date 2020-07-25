<template>
    <div>
        <h3>{{ title_footer_top }}</h3>
        <div class="footer-item">
            <div class="footer-item-left">
                
            </div>

            <div class="footer-item-right">
            <p>Corporate Info :<br/>info@yesdok.com</p>
            </div>
        </div>
        <div class="footer-item">
            <div class="footer-item-left">
                
            </div>

            <div class="footer-item-right">
            <p>Customer Service :<br/>help@yesdok.com</p>
            </div>
        </div>

        <h3>{{ title_footer_bottom }}</h3>
        <div class="footer-item">
            <div class="footer-item-left">
                <img :src="flag_sg" />
            </div>

            <div class="footer-item-right">
            <p>YesDok Pte. Ltd.</p>
            </div>
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
            flag_sg: manifest.flag_sg
        }
    }
}
</script>