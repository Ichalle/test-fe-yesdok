import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './src/App.vue';
import routes from './src/routes';
import './src/styles/main.scss';
import store from './src/store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faClock, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueRouter);

library.add(faEnvelope, faClock, faSearch, faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({ 
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }

});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('body');