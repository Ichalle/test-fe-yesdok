<template>
    <div class="wrapper">
      <main-header />
      <div class="main-container">
        <router-view></router-view>
      </div>      
    </div>
</template>

<script>
import MainHeader from "./components/MainHeader/index.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  }
};
</script>
