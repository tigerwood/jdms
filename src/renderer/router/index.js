import Vue from 'vue'
import Router from 'vue-router'

const MainLayout = () => import('@/layout/MainLayout')
const Account = () => import('@/pages/Account')
const Task = () => import('@/pages/Task')
const Setting = () => import('@/pages/Setting')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      redirect: {
        name: 'account'
      },
      children: [
        {
          path: 'account',
          name: 'account',
          component: Account
        },
        {
          path: 'task',
          name: 'task',
          component: Task
        },
        {
          path: 'setting',
          name: 'setting',
          component: Setting
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
