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
      path: '/example_1',
      name: 'example_1',
      component: () => import('../views/example_1')
    },
    {
      path: '/example_2',
      name: 'example_2',
      component: () => import('../views/example_2')
    },
    {
      path: '/example_3',
      name: 'example_3',
      component: () => import('../views/example_3')
    },
    {
      path: '/example_4',
      name: 'example_4',
      component: () => import('../views/example_4')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
