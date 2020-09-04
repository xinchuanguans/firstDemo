// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from "vuex"
import axios  from "axios"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import 'swiper/css/swiper.css'
// import store from "./store"
Vue.use(Vuex,axios)
Vue.use(VueAwesomeSwiper)
Vue.use(Antd)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  //store
})
// axios.interceptors.request.use(
//   config => {
//     // 判断是否存在token，如果存在的话，则每个http header都加上token
//     let token = sessionStorage.getItem('Authorization')
//     if (!config.headers.hasOwnProperty('Authorization') && token) {
//       config.headers.Authorization = token;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   });
