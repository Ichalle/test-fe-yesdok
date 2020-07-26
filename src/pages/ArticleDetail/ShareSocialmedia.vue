<template>
    <div class="main-article-share">
        <h3>BAGIKAN KE SOCIAL MEDIA</h3>
        <div class="dflex justfyCenter alignCenter mt-1">
            <a class="item" href="#">
                <img src="https://www.yesdok.com/img/share/email.png" alt="Email">
            </a>
            <a class="item" href="#">
                <img src="https://www.yesdok.com/img/share/whatsapp.png" alt="WhatsApp">  
            </a>
            <a class="item" href="#">
                <img src="https://www.yesdok.com/img/share/facebook.png" alt="Facebook">
            </a>
            <a class="item" href="#">
                <img src="https://www.yesdok.com/img/share/linkedin.png" alt="LinkedIn"> 
            </a>
            <a class="item" href="#">
                <img src="https://www.yesdok.com/img/share/twitter.png" alt="Twitter"> 
            </a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .main-article-share{
        margin-top: 2rem;

        h3{
            color: gray;
            font-weight: 600 !important;
            letter-spacing: 2px;
        }

        .item{
            width: 100%;
            max-width: 160px;
            display: flex;
            justify-content: center;
            background: gainsboro;
            padding: 0 8px;

            svg path{
                color: #fff;
            }

            img{
                max-height: 45px;
            }

            &:nth-child(1){
                background: #669C41;
            }
            &:nth-child(2){
                background: #25d366;
            }
            &:nth-child(3){
                background: #3c5b9b;
            }
            &:nth-child(4){
                background: #0073B2;
            }
            &:nth-child(5){
                background: #2DAAE1;
            }
        }
    }
</style>