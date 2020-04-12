import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.less'
import '@/assets/js/fixable'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
