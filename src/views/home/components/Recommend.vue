<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <div class="info">
      <div class="item" v-for="item in recommendList" :key="item.id">
        <div class="main">
          <img :src="item.src" alt="" />
          <div class="dec">
              <div class="dec-title">{{item.from}}-{{item.to}}</div>
              <div class="dec-dec">{{item.dec}}</div>
          </div>
        </div>
        <div class="item-title">
          {{ item.title }}
        </div>
        <div class="price">￥{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      recommendList: [
        {
          id: 1,
          src:
            "//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
          title: "含往返机票+4晚住宿",
          dec: "5天自由行",
          from: "宿迁",
          to: "丽江",
          price: "4940"
        },
        {
          id: 2,
          src:
            "//imgs.qunarzz.com/p/p73/1504/ab/15bbdcb31d3e61.jpg_256x160_139e3d4e.jpg",
          title: "含往返机票+2晚住宿",
          dec: "5天自由行",
          from: "宿迁",
          to: "黄山",
          price: "1218"
        },
        {
          id: 3,
          src:
            "//imgs.qunarzz.com/p/p15/1809/19/494898a39defb102.jpg_256x160_cc948293.jpg",
          title: "含往返机票+3晚住宿",
          dec: "4天跟团游",
          from: "宿迁",
          to: "北京",
          price: "2686"
        },
        {
          id: 4,
          src:
            "//imgs.qunarzz.com/p/p49/201302/28/f7876853b1e2279d93835fbb.jpg_256x160_a7c2c4f7.jpg",
          title: "含往返飞机票(含税)+5晚住宿",
          dec: "7天跟团游",
          from: "宿迁",
          to: "巴厘岛",
          price: "7990"
        },
        {
          id: 5,
          src:
            "//imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg",
          title: "含往返飞机票(含税)+6晚住宿",
          dec: "7天跟团游",
          from: "宿迁",
          to: "桂林",
          price: "2580"
        },
        {
          id: 6,
          src:
            "//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg",
          title: "含往返飞机票(含税)+5晚住宿",
          dec: "7天跟团游",
          from: "宿迁",
          to: "泰国",
          price: "1999"
        },
        {
          id: 7,
          src:
            "//imgs.qunarzz.com/p/p27/201302/28/d14185ac8a47f6f993835fbb.jpg_256x160_c2ab9336.jpg",
          title: "含往返飞机票+4晚住宿",
          dec: "5天跟团游",
          from: "宿迁",
          to: "张家界",
          price: "2338"
        },
        {
          id: 8,
          src:
            "//imgs.qunarzz.com/p/p32/1504/46/5a0a9ac552e26d.jpg_256x160_a63acde6.jpg",
          title: "含往返飞机票(含税)+5晚住宿",
          dec: "5天跟团游",
          from: "宿迁",
          to: "青岛",
          price: "1460"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.recommend {
  .title {
    margin: 10px 0;
    padding: 10px;
    background-color: #eee;
    font-size: 14px;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    img {
      width: 100%;
      border-radius: 10px;
    }
    .main {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:flex-end;
      .dec {
        padding: 0.24rem /* 6/25 */ 0.56rem /* 14/25 */;
        text-align: center;
        color: #fff;
        position: absolute;
        background-color: rgba(0,0,0,.3);
        .dec-title{
            font-size: 0.64rem /* 16/25 */;
        }
        .dec-dec{
            margin-top: 0.24rem /* 6/25 */;
            color: #ffde00;
        }
      }
    }
    .item {
      padding: 8px 0;
      width: 46%;
      .item-title {
        font-size: 0.64rem /* 16/25 */;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price {
        margin-top: 4px;
        font-size: 0.64rem;
        color: #f00;
        font-weight: 700;
      }
    }
  }
}
</style>
