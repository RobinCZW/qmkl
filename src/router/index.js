import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Test1 from '@/pages/Test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test1',
      component: Test1
    }
  ]
})
