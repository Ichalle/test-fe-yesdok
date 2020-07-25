<template>
    <div>
        <h3>{{ title_footer_indonesia }}</h3>
        <div class="footer-item">
            <div class="footer-item-left">
                <img :src="flag_id" />
            </div>

            <div class="footer-item-right">
            <p>PT. Yes Dok Indonesia,<br/>
                Ruko Kirana Boutique<br/>
                Jl. Boulevard Gading Raya Blok F3<br/>
                No.11<br/>
                Jakarta 14240</p>
            </div>
        </div>

        <h3>{{ title_footer_sg }}</h3>
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
import { FOOTER_TITLE_INDONESIA, FOOTER_TITLE_SINGAPORE } from '../../utils/Messages';

export default {
    data(){
        return{
            title_footer_indonesia: FOOTER_TITLE_INDONESIA,
            title_footer_sg: FOOTER_TITLE_SINGAPORE,
            flag_id: manifest.flag_indonesia,
            flag_sg: manifest.flag_sg
        }
    }
}
</script>