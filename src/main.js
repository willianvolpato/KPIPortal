import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

import DefaultLayout from './layouts/DefaultLayout.vue';
import LoginLayout from './layouts/LoginLayout.vue';

Vue.component('default-layout', DefaultLayout);
Vue.component('login-layout', LoginLayout);

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
