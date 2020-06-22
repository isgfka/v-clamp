import Vue from 'vue';
import App from './App.vue';
import Clamp from '../src/clamp';

Vue.config.productionTip = false;
Vue.use(Clamp);

new Vue({
  render: h => h(App)
}).$mount('#app');
