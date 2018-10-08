import Vue from 'vue'
import Router from 'vue-router'

/* eslint-disable */
// import conponets
import Mylink from '@/components/Mylink'
import HomePage from '@/components/HomePage'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Mylink',
      name: 'Mylink',
      component: Mylink
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]

})
