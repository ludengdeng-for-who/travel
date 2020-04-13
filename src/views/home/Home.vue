<template>
  <div class="home" style="padding-bottom:1.76rem;">
    <Hheader />
    <Hswiper />
    <Icons />
    <Recommend />
    <Cheap />
    <Now />
  </div>
</template>

<script>
import Hheader from './components/Header'
import Hswiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Cheap from './components/Cheap'
import Now from './components/Now'
export default {
    name:"home",
    components:{
        Hheader,
        Hswiper,
        Icons,
        Recommend,
        Cheap,
        Now
    }
}
</script>

<style lang="less" scoped>
</style>