<template>
  <div>
    <Hheader />
    <Hswiper />
    <Icons />
    <Recommend />
    <Cheap />
  </div>
</template>

<script>
import Hheader from './components/Header'
import Hswiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Cheap from './components/Cheap'
export default {
    name:"home",
    components:{
        Hheader,
        Hswiper,
        Icons,
        Recommend,
        Cheap
    }
}
</script>

<style>

</style>