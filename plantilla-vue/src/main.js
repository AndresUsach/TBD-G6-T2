import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import Actors from './Actors.vue';
import NuevoActor from './NuevoActor.vue';
import VueResource from 'vue-resource';
//import VueValidator from 'vue-form-validator';
require("./style.scss");

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
//Vue.use(VueValidator);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path: '/actors', component: Actors},
  { path: '/nuevoActor', component: NuevoActor}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
