// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'

import ewUI from '../packages/index'

require('./assets/application.css')

Vue.use(ewUI)

Vue.config.productionTip = false

Vue.component('demo-block', demoBlock)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
