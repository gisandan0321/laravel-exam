import './imports/style.css';
import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueToastr from "vue-toastr";
import VueMoment from 'vue-moment';
import mixins from './mixins';
import router from './router';
import store from './store';
import http from './http';

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.mixin(mixins);
Vue.use(VueMoment);
Vue.use(VueToastr, {
  defaultTimeout: 3000,
  defaultProgressBar: false,
  defaultProgressBarValue: 0,
  defaultPosition: "toast-top-right"
});
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});

const App = () => import('./components/App');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');