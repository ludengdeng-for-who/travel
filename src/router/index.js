import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    component:()=> import ("@/views/home/Home")
  },
  {
    path:'/orders',
    component:()=> import ("@/views/order/Order")
  },
  {
    path:'/mine',
    component:()=> import ("@/views/mine/Mine")
  }
]

const router = new VueRouter({
  routes
})

export default router
