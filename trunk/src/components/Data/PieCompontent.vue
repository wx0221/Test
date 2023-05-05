<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    pieTitle: {
      type: String,
      default: () => ""
    },
    pieData: {
      type: Array,
      default: () => []
    },
    pieLegendData: {
      type: Array,
      default: () => []
    },
    pieColors: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      count: 1
    };
  },
  methods: {
    drawChart() {
      const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echarts);
      $(window).resize(function() {
        myChart.resize(); //窗口变化
      });
      // 绘制图表
      myChart.setOption({
        color:this.pieColors,
        title: {
          text: this.pieTitle,
          x: "left",
          textStyle:{
            color:'#fff',
            fontSize:'16'
          },
          padding:[20,10]
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.pieLegendData1,
          bottom:'2%',
          textStyle:{
            color:'#fff'
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.pieData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  },
  computed: {},
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  created: () => {}
};
</script>

<style>
.chartHeight {
  height: 100%;
}
</style>