<template>
  <div class="now">
      <div class="title">当季景点</div>
      <div class="info">
          <div class="item" v-for="item in list" :key="item.id">
          <div> 
              <img :src="item.src" alt="">
          </div>
          <div class="item-title">{{item.title}}</div>
          <div class="item-dec">{{item.dec}}</div>
          <div class="price">￥{{item.price}}</div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "now",
  data() {
    return {
      list: [
        {
            id:1,
          src:
            "//img1.qunarzz.com/sight/p0/2003/6c/6cd013b870474899a3.img.jpg_256x160_a87371da.jpg",
          title: "鼋头渚",
          dec: "太湖佳绝处，毕竟在鼋头",
          price: "83"
        },
        {
            id:2,
          src:
            "//img1.qunarzz.com/sight/p0/201305/24/d66cdca4dd461611c8d65eac.jpg_256x160_7991a9d6.jpg",
          title: "瘦西湖",
          dec: "湖上园林的典型代表",
          price: "90"
        },
        {
            id:3,
          src:
            "//img1.qunarzz.com/sight/p0/201405/14/2324f88e83f7b8675dd9e74a3c2f2fa5.jpg_256x160_54e97094.jpg",
          title: "同里古镇",
          dec: "世界同里，东方小威尼斯",
          price: "100"
        },
        {
            id:4,
          src:
            "//img1.qunarzz.com/sight/p0/1503/2f/2fe6e24b5455d6cc.water.jpg_256x160_68383679.jpg",
          title: "淹城野生动物园",
          dec: "可以自驾游览的野生动物园",
          price: "99"
        },
        {
            id:5,
          src:
            "//img1.qunarzz.com/sight/p0/1803/ae/ae876a8017aeadefa3.img.jpg_256x160_729dacea.jpg",
          title: "灵山小镇拈花湾",
          dec: "东方禅意度假胜地，世界佛教论坛永久会址",
          price: "110"
        },
        {
            id:6,
          src:
            "//img1.qunarzz.com/sight/p0/1904/ec/ecd148ee1c508b4ba3.img.jpg_256x160_1fea4183.jpg",
          title: "华谊兄弟电影世界",
          dec: "一部巨幕、时尚和趣味演绎的电影魔法书",
          price: "100.5"
        },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.title {
    margin: 10px 0;
    padding: 10px;
    background-color: #eee;
    font-size: 14px;
  }
.info{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    img{
        width: 100%;
        border-radius: 10px;
    }
    .item{
        width: 45%;
        padding: 8px;
        font-size: 0.56rem;
        .item-dec{
            font-size: 12px;
            font-weight: 300;
            margin: 0.16rem /* 4/25 */ 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .price{
            color: #f00;
            font-weight: 700;
        }
    }
}
</style>
