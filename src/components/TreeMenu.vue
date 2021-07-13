
<template>
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#222832"
    text-color="#fff"
    active-text-color="#409eff"
  >
    <template v-for="menu in menuList">
      <el-submenu
        v-if="
          menu.children &&
          menu.children.length > 0 &&
          menu.children[0].menuType == 1
        "
        :key="menu._id"
        :index="menu.path"
      >
        <template #title>
          <i :class="menu.icon"></i>
          <span>{{ menu.menuName }}</span>
        </template>
        <TreeMenu :menuList="menu.children" />
      </el-submenu>
      <el-menu-item
        v-else-if="menu.menuType == 1"
        :index="menu.path"
        :key="menu._id"
        >{{ menu.menuName }}</el-menu-item
      >
    </template>
  </el-menu>
</template>

<script>
export default {
  name: "treeMenu",
  props: {
    menuList: Array,
  },
};
</script>

<style>
</style>
