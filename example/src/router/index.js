import Vue from 'vue';
import Router from 'vue-router';

const originalPush = Router.prototype.push;
Router.prototype.push = function push (location, onResolve, onReject) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sample_1',
      name: 'sample_1',
      component: () => import('../views/sample_1')
    },
    {
      path: '/sample_2',
      name: 'sample_2',
      component: () => import('../views/sample_2')
    },
    {
      path: '/sample_3',
      name: 'sample_3',
      component: () => import('../views/sample_3')
    },
    {
      path: '/sample_4',
      name: 'sample_4',
      component: () => import('../views/sample_4')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
