<template>
    <div class="dflex">
        <div class="top-menu main-menu">
            <router-link
                v-for="item in main_menu"
                :key="item.key"
                :to="{
                    name: item.link,
                    query: { cat: item.key }
                }">
                    <div class="menu-item">
                        {{item.title}}
                    </div>
            </router-link>

            <info-point />

            <div class="point-count-container">
                <count-point />
            </div>
            
            <status-user />
        </div>
    </div>
</template>

<script>
    import menuItems from '../../data/menu-item.json';
    import InfoPoint from './InfoPoint.vue';
    import StatusUser from './StatusUser.vue';
    import CountPoint from './CountPoint.vue';

    export default {
        name: "header-top",
        components: {
            InfoPoint,
            StatusUser,
            CountPoint
        },

        data() {
            return {
                main_menu : menuItems.main_menu
            };
        },
    }
</script>