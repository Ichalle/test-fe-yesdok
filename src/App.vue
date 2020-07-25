<template>
    <div class="wrapper">
      <main-header />
      <div class="main-container">
        <!-- <router-view></router-view> -->
      </div>
      <main-footer />
    </div>
</template>

<script>
import MainHeader from "./components/MainHeader/index.vue";
import MainFooter from "./components/MainFooter/index.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter
  }
};
</script>
