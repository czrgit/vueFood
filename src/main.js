// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
// import loader from 'vue-loader'
import VueLazyload from 'vue-lazyload'
import store from './store'
import './mock/mockServer' //加载mockServer
import './filters'//过滤时间
import loading from './common/imgs/loading.gif'

//注册全局标签
Vue.component(Button.name,Button)//<mt-button>
Vue.config.productionTip = false
Vue.use(VueLazyload,{
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
