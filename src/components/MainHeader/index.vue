<template>
    <div class="header-menu">
      <header-top />
      <main-menu />
    </div>
</template>

<script>
  import HeaderTop from './HeaderTop.vue'
  import MainMenu from './MainMenu.vue'

  export default {
    name: "main-header",
    components: {
      HeaderTop,
      MainMenu
    },
  }
</script>