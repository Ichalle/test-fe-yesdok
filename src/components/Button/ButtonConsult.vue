<template>
    <router-link
        class="big-button" to="#">
        {{ text }}
        <div class="pulse"> </div>
    </router-link>
</template>

<script>
export default {
    props: {
        text: {
            type: String
        },
    },
}
</script>