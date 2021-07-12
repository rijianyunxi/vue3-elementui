<template>
  <div class="welcome">
    <div ref="ec" id="test"></div>
  </div>
</template>

<script>
// import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";

export default {
  name: "Welcome",
  mounted() {
    let myChart = this.$echarts.init(this.$refs.ec);
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
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
  },
};
</script>

<style scoped>
.welcome {
  height: 100%;
  width: 100%;
  background: #ffffff;
}
#test {
  height: 250px;
  width: 400px;
}
</style>