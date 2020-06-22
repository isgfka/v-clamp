import Vue from 'vue';
import App from './App.vue';
import router from './src/router';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Clamp from '../src/clamp';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(Clamp);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
