<template>
    <router-link
        class="button-outline"
        :to="{ name: to }">
            {{ text }}
    </router-link>
</template>

<script>
export default {
    props: {
        text: {
            type: String
        },
        to:{
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .button-outline{
        border: 1px solid #fff;
        border-radius: 10px;
        text-transform: uppercase;
        color: #fff;
        padding: 10px;
        text-decoration: none;

    }


    .button-outline:focus, .button-outline:hover {
        color: white;
        border: 1px solid #009CD7;
        outline: none;
        background-color: #009CD7;
        cursor:pointer;
    }

</style>