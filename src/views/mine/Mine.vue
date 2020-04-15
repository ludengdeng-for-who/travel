<template>
  <div class="mine">
    <div class="top">
      <img
        src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg"
        alt=""
      />
      <div class="user" @click="login">
        <div class="img-out">
          <img
            src="https://source.qunarzz.com/usercenter/touch/avatar.png"
            alt=""
          />
        </div>
        <div class="login">登录/注册</div>
      </div>
    </div>
    <div class="wallet">
      <div class="wallet-top">
        <Item :bgc="'#ff7043'">
          <template v-slot:left>
            <i class="icon iconfont icon-qianbao"></i>
          </template>
          <template v-slot:center>
            <div>我的钱包</div>
          </template>
        </Item>
      </div>
      <div class="wallet-bottom">
        <div v-for="item in list" :key="item.id" class="item">
          <div class="item-money">{{ item.money }}</div>
          <div class="item-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="other">
      <div class="other-item">
        <Item :bgc="'#ff7043'">
          <template v-slot:left>
            <i class="icon iconfont icon-icon-"></i>
          </template>
          <template v-slot:center>
            <div>我的钱包</div>
          </template>
          <template v-slot:right>
            <i class="icon iconfont icon-qianjin"></i>
          </template>
        </Item>
      </div>
      <div class="other-item">
        <Item :bgc="'#ffa21f'">
          <template v-slot:left>
            <i class="icon iconfont icon-qianbao"></i>
          </template>
          <template v-slot:center>
            <div>我的退款</div>
          </template>
          <template v-slot:right>
            <i class="icon iconfont icon-qianjin"></i>
          </template>
        </Item>
      </div>
      <div class="other-item">
        <Item :bgc="'#ffad3b'">
          <template v-slot:left>
            <i class="icon iconfont icon-qianbao"></i>
          </template>
          <template v-slot:center>
            <div>我的发票</div>
          </template>
          <template v-slot:right>
            <i class="icon iconfont icon-qianjin"></i>
          </template>
        </Item>
      </div>
      <div class="other-item">
        <Item :bgc="'#ffa21f'">
          <template v-slot:left>
            <i class="icon iconfont icon-gonglve"></i>
          </template>
          <template v-slot:center>
            <div>我的攻略</div>
          </template>
          <template v-slot:right>
            <i class="icon iconfont icon-qianjin"></i>
          </template>
        </Item>
      </div>
    </div>
    <div class="about">
      <div class="other-item">
        <Item :bgc="'#90a4ae'">
          <template v-slot:left>
            <i class="icon iconfont icon-xinxi"></i>
          </template>
          <template v-slot:center>
            <div>意见反馈</div>
          </template>
          <template v-slot:right>
            <i class="icon iconfont icon-qianjin"></i>
          </template>
        </Item>
      </div>
      <div class="other-item">
        <Item :bgc="'#90a4ae'">
          <template v-slot:left>
            <i class="icon iconfont icon-guanyu"></i>
          </template>
          <template v-slot:center>
            <div>关于我们</div>
          </template>
          <template v-slot:right>
            <i class="icon iconfont icon-qianjin"></i>
          </template>
        </Item>
      </div>
    </div>
    <NavBar />
  </div>
</template>

<script>
import Item from "./components/Item";
import NavBar from '@/components/Navbar'
export default {
  components: {
    Item,
    NavBar
  },
  data() {
    return {
      list: [
        {
          money: 888,
          id: 1,
          title: "账户余额"
        },
        {
          money: 123,
          id: 2,
          title: "星券"
        },
        {
          money: 12,
          id: 3,
          title: "银行卡"
        }
      ]
    };
  },
  methods:{
    login(){
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/colors.less");
.mine {
  width: 100vw;
  height: 100vh;
  background-color: #ebeced;
}
.top {
  height: 6.4rem /* 160/25 */;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 100%;
  }
  .user {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-out {
      border-radius: 50%;
      padding: 2px;
      background-color: @themeColor;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 2.6rem /* 65/25 */;
      height: 2.6rem;
    }
    .login {
      color: #fff;
      margin-top: 6px;
      font-size: 0.56rem /* 14/25 */;
    }
  }
}
.wallet {
  margin: 0.4rem /* 10/25 */ 0;
  background-color: #fff;
  .wallet-bottom {
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-around;
    padding: 0.8rem /* 20/25 */ 0.4rem /* 10/25 */;
    .item {
      font-size: 0.56rem /* 14/25 */;
      text-align: center;
      .item-title {
        color: #888;
        font-size: 12px;
        margin-top: 0.4rem; /* 10/25 */
      }
    }
  }
}
[class$=item] {
    border-bottom: 1px solid #eee;
  }
.other{
  margin-bottom: 0.4rem /* 10/25 */;
  
}
</style>
