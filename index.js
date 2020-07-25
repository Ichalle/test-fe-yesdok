import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './src/App.vue';
import routes from './src/routes';
import './src/styles/main.scss';
import store from './src/store';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('body');