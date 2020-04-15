<template>
  <div class="order">
      <div class="top">
        <div class="icon iconfont icon-houtui1"></div>
        <div class="search">本地查询<i class="icon iconfont icon-down-fill1-xs"></i></div>
        <div class="order-search">订单查询</div>
      </div>
      <div class="none">
        <img src="//s.qunarzz.com/ordercenter_mobile/images/order_login.png" alt="">
        <div class="none-info">你好没有本地订单</div>
        <div class="none-info">快登录查看本地订单吧</div>
        <div class="login">登录</div>
      </div>
      <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/Navbar'
export default {
 name:"order",
 components:{
     NavBar
 }
}
</script>

<style lang="less" scoped>
@import url("~@/assets/css/colors.less");

.order{
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f4;
  .top{
    background-color: #fff;
    display: flex;
    padding: 0.4rem /* 10/25 */ 0.8rem /* 20/25 */;
    justify-content:space-between;
    .search{
      font-size: 0.64rem /* 16/25 */
    }
    .order-search{
      font-size: 0.56rem /* 14/25 */;
      color: @themeColor;
    }
  }
  .none{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem /* 100/25 */;
    img{
      width: 7.64rem /* 191/25 */;
    }
    .none-info{
      font-size: 0.56rem /* 14/25 */;
      color: #666;
      line-height: 1.5;
    }
    .login{
      margin-top: 0.4rem /* 10/25 */;
      background: #ff9800;
      color: #fff;
      padding: 0.4rem /* 10/25 */ 0.96rem /* 24/25 */
    }
  }

}
</style>