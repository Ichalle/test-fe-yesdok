<template>
    <div class="main-footer-container">
            <div class="row">
                <div class="col-4">
                    <footer-info />
                </div>
                <div class="col-4">
                    <footer-address />
                </div>
                <div class="col-4">
                    <footer-contact />
                </div>
            </div>
        <copyright />
    </div>
</template>

<script>
import Copyright from './Copyright.vue';
import FooterInfo from './FooterInfo.vue';
import FooterAddress from './FooterAddress.vue';
import FooterContact from './FooterContact.vue';

export default {
    name: 'main-footer',
    components: {
        FooterInfo,
        FooterAddress,
        FooterContact,
        Copyright
    }
}
</script>