<template>
  <div class="login">
    <div class="login-item">
      <el-form>
        <el-form-item>
          <el-input
            type="text"
            v-model="username"
            prefix-icon="el-icon-user"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="password"
            autocomplete="off"
            prefix-icon="el-icon-view"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button
        style="width: 80%; margin-left: 10%"
        type="primary"
        @click="test"
        >登陆</el-button
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    let username = ref("song");
    let password = ref("123456");
    const test = () => {
      router.push({
        name: "welcome",
        params: {
          a: 1,
          b: 2,
        },
      });
    };
    return {
      username,
      password,
      test,
    };
  },
};
</script>

<style soped>
.login {
  height: 100%;
  width: 100%;
  background-image: url("http://ve3.onlyylt.top/img/background.5e98eea6.png");
}
.login-item {
  width: 25%;
  height: 30%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0%;
  margin: auto;
}
</style>