<template>
  <router-view></router-view>
</template>
<script>
import axios from "./util/request.js";

export default {
  methods: {
    tt() {
      console.log(1);
      axios
        .get("https://localhost:3000")
        .then((r) => {
          console.log(r);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(2);
    },
  },
};
</script>


<style>
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* 
#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
