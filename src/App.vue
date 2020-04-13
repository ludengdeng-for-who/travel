<template>
  <div id="app">  
    <router-view></router-view>
    <div class="bar">
      <router-link exact class="bar-item" tag="div" to="/" active-class="active">
        <div class="icon iconfont icon-shouye"></div>
        <div>首页</div>
      </router-link>
      <router-link class="bar-item"  tag="div" to="/orders" active-class="active">
        <div class="icon iconfont icon-icon-"></div>
        <div>订单 </div>
      </router-link>
      <router-link class="bar-item" tag="div" to="/mine" active-class="active">
        <div class="icon iconfont icon-wode"></div>
        <div>我的</div>
      </router-link>
    </div>
  </div>
</template>

<script >
export default {
  components:{
  }
}
</script>

<style lang="less">
@import url("~@/assets/css/colors.less");

.icon{
  font-size: 16px;
}
.bar{
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1.76rem /* 44/25 */;
  display: flex;
  border-top: 1px solid #eee;
  background-color: #fff;
  z-index: 999;
  .bar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconfont{
      margin-bottom: 4px;
    }
  }
}
.active{
  color: @themeColor;
}
</style>
