import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index'
import Column from '@/views/column/column.vue'
import View from '@/components/views/view'
import Login from '@/components/login/login'
import Other from '@/views/other/other'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/column',
      name: 'column',
      component: Column
    },
    {
      path: '/views',
      name: 'view',
      component: View
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
      name: 'other',
      component: Other
    }
  ]
})
