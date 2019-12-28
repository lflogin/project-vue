import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    redirect: '/yingyuan',
    children: [
      {
        path: 'moive',
        name: 'moive',
        component: () => import(/* webpackChunkName: "about" */ '../views/Moive.vue'),
        redirect: '/moive/tab1',
        children: [
          {
            path: 'tab1',
            name: 'tab1',
            component: () => import(/* webpackChunkName: "about" */ '../views/page/Tab1.vue')
          },
          {
            path: 'tab2',
            name: 'tab2',
            component: () => import(/* webpackChunkName: "about" */ '../views/page/Tab2.vue')
          }
        ]
      },
      {
        path: 'yingyuan',
        name: 'yingyuan',
        component: () => import(/* webpackChunkName: "about" */ '../views/Yingyuan.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue'),
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
      }
    ]
  }
 
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth) {
    if(localStorage.getItem('key')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          path: to.fullPath
        }
      })
    }
  } else {
      next()
  }
})

export default router
