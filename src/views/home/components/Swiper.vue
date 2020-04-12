<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOptions" >
      <swiper-slide v-for="item in swiperList" :key="item.id">
          <img :src="item.src" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop:true,
        autoplay:true
      },
      swiperList:[
          {
              id:1,
              src:"https://n1-q.mafengwo.net/s16/M00/9B/B2/CoUBUl6R0TSAXWDzABtVxiFRNHo578.png?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90"
          },
          {
              id:2,
              src:"https://p1-q.mafengwo.net/s16/M00/7B/AE/CoUBUl6QiHaAEcQrAB-BPhc60e8633.png?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90"
          },
          {
              id:3,
              src:"https://n1-q.mafengwo.net/s16/M00/35/29/CoUBUl6PFy6AJpd8AB_uy8CfYXE454.png?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90"
          }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.swiper{
    img{
        width: 100%;
    }
}
</style>
