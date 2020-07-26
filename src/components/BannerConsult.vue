<template>
    <div class="banner banner-consult">
      <div class="row">
        <div class="col-12 dflex justifyCenter alignCenter set-direction">
          <h2 class="color-text-title">{{ banner_title }}</h2>
          <button-consult :text="button_consult_text" />
        </div>
      </div>
    </div>
</template>

<script>
  import ButtonConsult from '../components/Button/ButtonConsult.vue';
  import {
    BANNER_TITLE,
    BANNER_CONSULT_TEXT } from '../utils/Messages';


  export default {
    name: 'banner-consult',
    components: {
      ButtonConsult
    },

    data(){
      return{
        banner_title: BANNER_TITLE,
        button_consult_text: BANNER_CONSULT_TEXT

      }
    }
  }
</script>

<style lang="scss" scoped>
  h2{
    font-size: 2.2rem;
    font-weight: bold;
  }
  .set-direction{
    @media screen and (max-width: 768px){
      flex-direction: column;
    }
  }
</style>