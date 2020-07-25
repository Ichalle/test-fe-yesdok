<template>
    <div class="footer-copyright">
        <span>COPYRIGHT ©{{ getThisYear() }} ALL RIGHTS RESERVED BY YesDok</span>
    </div>
</template>

<script>
export default {
    methods: {
        getThisYear(){
            let date = new Date
            date = date.getFullYear();
            return date
        }
    } 
}
</script>

<style lang="scss" scoped>
    .footer-copyright{
        background: #333;
        height: 80px;
        display: flex;
        padding: 0 2%;
        align-items: center;
        margin-top: 2rem;

        span {
            color: #fff;
        }
    }
</style>