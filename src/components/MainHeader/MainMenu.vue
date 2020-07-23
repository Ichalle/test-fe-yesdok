<template>
    <div class="dflex">
        <div class="top-menu main-menu">
            <router-link
                v-for="item in main_menu"
                :key="item.key"
                :to="item.link">
                    <div class="menu-item">
                        {{item.title}}
                    </div>
            </router-link>
            <info-point />
            <status-user />
        </div>
    </div>
</template>

<script>
    import menuItems from '../../data/menu-item.json';
    import InfoPoint from './InfoPoint.vue';
    import StatusUser from './StatusUser.vue';

    export default {
        name: "header-top",
        components: {
            InfoPoint,
            StatusUser
        },

        data() {
            return {
                main_menu : menuItems.main_menu
            };
        },
    }
</script>