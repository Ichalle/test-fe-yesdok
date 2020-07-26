<template>
  <div>
    <div class="header-menu">
      <header-top />
      <main-menu />
    </div>
    <mobile-menu />
  </div>
</template>

<script>
  import HeaderTop from './HeaderTop.vue';
  import MainMenu from './MainMenu.vue';
  import MobileMenu from './MobileMenu.vue';

  export default {
    name: "main-header",
    components: {
      HeaderTop,
      MainMenu,
      MobileMenu,
    },
  }
</script>