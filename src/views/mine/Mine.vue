<template>
  <div class="mine">
    <div class="top">
      <img
        src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg"
        alt=""
      />
      <div class="user">
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
            <div></div>
            <div>我的钱包</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/colors.less");
.mine{
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
    .login{
        color: #fff;
        margin-top: 6px;
        font-size: 0.56rem /* 14/25 */;
    }
  }
}
</style>
