import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    component:()=> import ("@/views/home/Home")
  },
  {
    path:'/detail',
    component:()=> import ("@/views/detail/Detail")
  },
  {
    path:'/orders',
    component:()=> import ("@/views/order/Order")
  },
  {
    path:'/mine',
    component:()=> import ("@/views/mine/Mine")
  },
  {
    path:'/login',
    component:()=> import ("@/views/login/Login")
  }
]

const router = new VueRouter({
  routes
})

export default router
