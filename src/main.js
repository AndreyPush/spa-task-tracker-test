import Vue from 'vue'
import {router} from './router'
import RootComponent from './RootComponent'
import axios from "axios";

Vue.config.productionTip = false;

Vue.component('root-component', RootComponent);

Vue.prototype.axios = axios;
Vue.prototype.baseURL = 'http://localhost:3000';


router.beforeEach((to, from, next) => {
  if(to.name==='card'&&(isNaN(to.params.id))) router.push('/error')
  document.title = to.meta.title(to)
  next()
});

const app = new Vue({
  el: '#app',
  router,
  created() {
    window.app = this
  }
});
