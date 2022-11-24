import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/homePage'
import allPackages from '@/components/viewAllPackages'
// import indivPackage from '@/components/individualPackages'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/packages',
      name: 'allPackages',
      component: allPackages
    }
  ]
})
