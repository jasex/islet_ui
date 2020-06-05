import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index'
import store from '../store/index'
import Home from '../views/Home.vue'
import Relax from '../views/Relax'
import Answer from "../views/Answer";
import Tree from "../views/Tree";
import MainPage from "../views/MainPage";
import fa from "element-ui/src/locale/lang/fa";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/time',
    //   name: 'Time',
    //   component: Time
    // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        requireAuth: false// 添加该字段，表示进入这个路由是需要登录的
      },
      children: [{
        path: '/relax',
        name: 'Relax',
        component: Relax,
        meta: {
          requireAuth: false
        }
      },{
        path: '/answer',
        name: 'Answer',
        component: Answer,
        meta: {
          requireAuth: false// 添加该字段，表示进入这个路由是需要登录的
        },
      },{
        path: '/tree',
        name: Tree,
        component: Tree,
        meta: {
          requireAuth: false
        }
      },{
        path: '/main',
        name: MainPage,
        component: MainPage,
        meta: {
          requireAuth: false
        }
      }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/login'
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
