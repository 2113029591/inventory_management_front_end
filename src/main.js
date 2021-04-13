import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import axios from "axios";
import "../src/plugins/elementUI"
import PaginationFooter from '@/components/PaginationFooter'

Vue.config.productionTip = false
Vue.config.productionTip = false
Vue.prototype.$axios=axios  //全局注册，使用方法为this.$axios
Vue.component("pagination-footer", PaginationFooter);

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
