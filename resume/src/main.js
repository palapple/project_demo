import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import animated from 'animate.css' // npm install animate.css --save安装，再引入


Vue.config.productionTip = false


Vue.use(Vant);
Vue.use(animated)

new Vue({
  render: h => h(App),
}).$mount('#app')
