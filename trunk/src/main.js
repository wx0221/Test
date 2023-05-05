// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)
//引入公共的css
import './assets/styles/common/common.css'
// 安装iview  项目根目录 cnpm install iview --save
import './iview'

//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false

/* 第三步：axios：用于发送请求 */
import axios from 'axios' //引入axios
Vue.prototype.$axios = axios;//配置axios
/* 配置跨域：在vue.config.js或/config/index.js中会重写跨域路径，
   若前缀带有“api”的请求，则会进行跨域访问 */
Vue.prototype.Host = 'api';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
