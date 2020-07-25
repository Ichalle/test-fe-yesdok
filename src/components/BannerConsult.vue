<template>
    <div class="banner banner-consult">
      <div class="row">
        <div class="col-12 dflex justifyCenter set-direction">
          <h2 class="color-text-title">{{ banner_title }}</h2>
          <router-link
            class="big-button"
            to="#">
            {{ button_consult_text }}
            <div class="pulse"> </div>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'banner-consult',

    data(){
      return{
        banner_title: 'BINGUNG? TANYA DOKTER!',
        button_consult_text: 'MULAI KONSULTASI'

      }
    }
  }
</script>

<style lang="scss" scoped>
  h2{
    font-size: 2rem
  }
  .set-direction{
    @media screen and (max-width: 768px){
      flex-direction: column;
    }
  }
</style>