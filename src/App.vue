<template>
  <div id="nav">
   <el-button>默认按钮</el-button>
  <el-button @click="tt" type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  </div>
</template>
<script>
import axios from './util/request.js'


export default {
  methods:{
    tt(){
      console.log(1);
      axios.get("https://localhost:3000").then(r=>{
    console.log(r);
}).catch(e=>{
    console.log(e);
})
    }
    }
  }

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
