import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      label: '组件测试',
      component: r => require([], () => r(require('../docs/test.md')))
    }
  ]
})
