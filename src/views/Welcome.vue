<template>
  <div class="welcome">Welcome</div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Welcome",
  setup() {
    let route = useRoute();
    onMounted(() => {
      console.log(route.params);
    });
  },
};
</script>

<style scoped>
.welcome {
  height: 100%;
  width: 100%;
  background: #ffffff;
}
</style>