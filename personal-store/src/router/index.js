import Vue from 'vue'
import Router from 'vue-router'
import wareList from '@/components/wareList'
import helloWorld from '@/components/helloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/wareList',
      name: 'wareList',
      component: wareList
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: helloWorld
    },
  ]
})
