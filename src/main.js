import Vue from 'vue'
import App from './App.vue'
//引入ElementUI組件庫
import ElementUI from 'element-ui';
//引入ElementUI全部樣式
import 'element-ui/lib/theme-chalk/index.css';
//引入vue-router
import VueRouter from 'vue-router'
//引入router的js
import router from './router'
import store from './store'
//使用vue-router
Vue.use(VueRouter)
//應用ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')
