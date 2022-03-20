<template>
  <div id="app">
    <main-navbar />
    <router-view />
    <main-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
export default Vue.extend({
  name: "App",
  components: {
    MainNavbar,
    MainFooter,
  },
});
</script>
