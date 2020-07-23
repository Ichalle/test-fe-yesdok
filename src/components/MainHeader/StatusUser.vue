<template>
    <div class="dflex">
        <div class="top-menu main-menu">
            <router-link
                to="#">
                {{ not_authenticate }}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "status-user",

        data() {
            return {
                not_authenticate: 'DAFTAR / MASUK'
            };
        },
    }
</script>