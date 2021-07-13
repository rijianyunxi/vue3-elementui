<template>
  <div class="container">
    <!-- left nav -->
    <div class="l-nav">
      <TreeMenu :menuList="menuList" />
    </div>
    <!-- right container && right nav -->
    <div class="r-container">
      <div class="r-container-nav">
        <div class="mianbao">
          <i class="el-icon-s-fold"></i>
          面包屑
        </div>
        <div class="user">
          <!-- <el-avatar
            :size="30"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar> -->
          <i class="el-icon-message-solid"></i>
          <span>jack</span>
        </div>
      </div>
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
  mounted() {
    this.test();
  },
  data() {
    return {
      menuList: [],
    };
  },
  methods: {
    test() {
      this.$axios
        .get(
          "https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api/menu/list"
        )
        .then((r) => {
          console.log(r.data);
          this.menuList = r.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
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
  user-select: none;
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
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  justify-content: space-between;
}
.r-container-nav .user {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.r-container-nav .user span {
  color: #3f9eff;
  padding: 0 8px;
  font-weight: bold;
}
.r-container-content {
  height: calc(100vh - 50px);
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>