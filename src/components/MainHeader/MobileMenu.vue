<template>
<div>
    <div class="mobile-menu dflex justifyCenter alignCenter">
        <div class="search">
            <font-awesome-icon size="2x" icon="search" />
        </div>
        <div class="logo">
            <div class="main-logo">
                <router-link
                    to='/'
                    class="nav-link">
                    <img :src="main_logo" />
                </router-link>
            </div>
        </div>
        <div class="hamburger" @click="toggle_child()">
            <font-awesome-icon size="2x" icon="bars" />
        </div>
    </div>
    <div class="mobile-menu-child" v-show="show_child ? true : false">
            <div class="menu-child-top">
                <router-link
                    to='/'>
                    MASUK
                </router-link>
                <router-link
                    to='/'>
                    DAFTAR
                </router-link>
            </div>
            <div class="mobile-menu-language">
                <menu-language />
            </div>
            <div class="mobile-menu-list">
                <ul>
                    <li>
                        BERANDA
                        <ul class="list">
                            <li v-for="item in main_menu"
                                :key="item.key"
                                @click="toggle_child()">
                                <router-link
                                    :to="{
                                        name: item.link,
                                        query: { cat: item.key }
                                    }">
                                    {{item.title}}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>PERUSAHAAN</li>
                    <li>UNDUH</li>
                    <li>STORE</li>
                    <li>KARIR</li>
                    <li>TENTANG KAMI</li>
                </ul>
            </div>
    </div>
</div>
</template>

<script>
    import mainfest from '../../data/manifest.json';
    import menuLanguage from './MenuLanguage.vue';
    import menuItems from '../../data/menu-item.json';

    export default {
        components:{
            menuLanguage
        },

        data() {
            return {
                main_logo: mainfest.main_logo,
                show_child: false,
                main_menu : menuItems.main_menu,
            };
        },

        methods: {
            toggle_child(){
                console.log('here')
                this.show_child = !this.show_child
            }
        }
    }
</script>