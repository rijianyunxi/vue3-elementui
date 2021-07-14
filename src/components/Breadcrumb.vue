<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="route in routes"
      :key="route.path"
      :to="{ path: route.path }"
      >{{ route.meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb",
  computed: {
    routes() {
      return this.$route.matched;
    },
  },
  mounted() {
    console.log(this.$route.matched);
  },
};
</script>


<style>
</style>