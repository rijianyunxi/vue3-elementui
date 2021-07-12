<template>
  <div class="container">
    <!-- left nav -->
    <div class="l-nav">
      <TreeMenu />
    </div>
    <!-- right container && right nav -->
    <div class="r-container">
      <div class="r-container-nav">右边上部导航</div>
      <div class="r-container-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TreeMenu from "../components/TreeMenu.vue";
export default {
  name: "Home",
  components: {
    TreeMenu,
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  background: #f2f2f2;
}
.container .l-nav {
  height: 100%;
  width: 200px;
  background: rgb(0 21 41);
  float: left;
  color: #ffffff;
  font-size: 22px;
  overflow: auto;
}
.r-container {
  /* width: 100%; */
  height: 100%;
  margin-left: 200px;
}
.r-container-nav {
  height: 50px;
  width: 100%;
  background: #ffffff;
}
.r-container-content {
  height: calc(100vh - 50px);
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>