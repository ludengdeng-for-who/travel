<template>
  <div>
      <div class="title">今日特惠</div>
    <div class="info">
        <div class="item" v-for="item in cheapList" :key="item.id">
            <div>
                <img :src="item.src" alt="">
            </div>
            <div class="item-title">{{item.title}}</div>
            <div class="item-dec">{{item.dec}}</div>
            <div class="item-price">￥{{item.price}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"cheap",
    data(){
        return {
            cheapList:[
                {   
                    id:1,
                    src:"//imgs.qunarzz.com/p/tts1/1612/d3/4fd230ade6f5be02.jpg_r_480x320x95_379cb517.jpg",
                    title:"常州到苏州一天跟团游",
                    dec:"【常州出发 苏州精选纯玩一日游 】拙政园+狮子林+虎丘+枫桥景区+山塘街",
                    price:298
                },
                 {   
                    id:2,
                    src:"//imgs.qunarzz.com/vs_ceph_vs_tts/2e84acf1-28d0-4d58-b166-3fb9013289fb.jpg_r_480x320x95_fa98cc53.jpg",
                    title:"泰安-泰山 2天跟团游",
                    dec:"泰山+曲阜2日游🌸纯玩无购物🌸赠送泰山上山环山车+曲阜市内电瓶车",
                    price:687
                },
                {   
                    id:3,
                    src:"//imgs.qunarzz.com/vs_ceph_vs_tts/680bf255-6a48-4078-a1b0-33d54cf89948.jpg_r_480x320x95_f2c0a917.jpg",
                    title:"合肥-黄山 3天跟团游",
                    dec:"〈合肥出发〉黄山全景3日游=宿山顶观日出、无购物，高铁动车往返、专车接送站",
                    price:1280
                },
                {   
                    id:4,
                    src:"//imgs.qunarzz.com/p/tts5/1612/64/d3d132a47b7d0102.jpg_r_480x320x95_900b776d.jpg",
                    title:"合肥-九华山 1天跟团游",
                    dec:"【祈福之旅】九华山一日游/游览化城寺、上禅堂、肉身宝殿、地藏禅寺/含门票",
                    price:328
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.title{
    margin: 10px 0;
    padding: 10px;
    background-color: #eee;
    font-size: 14px;
}
.info{
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    img{
        width: 100%;
        height: 4.32rem /* 108/25 */;
        border-radius: 10px;
    }
    .item{
         padding: 8px 0;
      width: 46%;
      .item-title{
          font-size: 0.64rem /* 16/25 */;
      }
      .item-dec{
          font-size: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 300;
          margin: 0.16rem /* 4/25 */ 0;

      }
      .item-price{
          font-size: 0.64rem /* 16/25 */;
          color: #f00;
          font-weight: 700;
      }
    }
}
</style>