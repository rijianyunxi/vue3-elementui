<template>
  <div class="welcome" v-test>
    <el-row>
      <el-col :span="8">
        <div ref="one" id="ec"></div>
      </el-col>
      <el-col :span="8">
        <div ref="two" id="ec"></div>
      </el-col>
      <el-col :span="8">
        <div ref="three" id="ec"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";

export default {
  name: "Welcome",
  directives: {
    test: {
      mounted(el) {
        console.log(el);
      },
      bind(el) {
        console.log(el);
      },
      inserted(el, binding) {
        console.log("inserted-el", el, binding);
      },
    },
  },
  mounted() {
    window.onresize = this.throttle(() => {
      myChart.resize();
      myChart2.resize();
      myChart3.resize();
    }, 300);
    // 11111
    let myChart = this.$echarts.init(this.$refs.one);
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
    //22222
    let myChart2 = this.$echarts.init(this.$refs.two);
    myChart2.setOption({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    });
    //33333
    let myChart3 = this.$echarts.init(this.$refs.three);
    myChart3.setOption({
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "搜索引擎" },
            { value: 735, name: "直接访问" },
            { value: 580, name: "邮件营销" },
            { value: 484, name: "联盟广告" },
            { value: 300, name: "视频广告" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
  },
  methods: {
    throttle(todo, wait) {
      let flag = true;
      return function () {
        if (flag) {
          flag = false;
          setTimeout(() => {
            todo();
            flag = true;
          }, wait);
        }
      };
    },
  },
};
</script>

<style scoped>
.welcome {
  height: 100%;
  width: 100%;
  background: #ffffff;
}
#ec {
  height: 250px;
}
</style>