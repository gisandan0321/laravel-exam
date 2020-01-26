import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  saveScrollPosition: true,
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  // TODO implementation
});

export default router;