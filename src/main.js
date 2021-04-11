import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import "../src/plugins/elementUI"
import PaginationFooter from '@/components/PaginationFooter'

Vue.config.productionTip = false
Vue.component("pagination-footer", PaginationFooter);

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
