import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routerConfig.js'
import VueSource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueSource)

let router = new VueRouter({
  routes:routes
});
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
