<template>
    <div class="header-top">
        <div class="main-logo">
          <router-link
            to='/'
            class="nav-link">
            <img :src="main_logo" />
          </router-link>
        </div>
        <div class="top-menu">
          <router-link
              v-for="item in menu_items"
              :key="item.key"
              :to="item.link">
              <div class="menu-item">
                  {{item.title}}
              </div>
          </router-link>
          <menu-language />
        </div>
    </div>
</template>

<script>
    import mainfest from '../../data/manifest.json'
    import menuItems from '../../data/menu-item.json';
    import MenuLanguage from './MenuLanguage.vue'

    export default {
        name: "header-top",
        components: {
            MenuLanguage,
        },

        data() {
            return {
                main_logo: mainfest.main_logo,
                menu_items : menuItems.menu_top
            };
        },
    }
</script>