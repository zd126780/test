// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './http'
import store from './store'
import './utils/fontsize'
import './style/base.styl'
import './assets/font/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.prototype.http=http

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
