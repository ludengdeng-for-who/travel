<template>
  <div class="login">
    <div class="top">
      <div class="top-bar">
        <div class="icon iconfont icon-houtui1" @click="back"></div>
        <div>登录</div>
        <div>注册</div>
      </div>

      <div class="type">
        <div @click="change" :class="{ active: isShow }">短信验证码登录</div>
        <div @click="change" :class="{ active: !isShow }">账号登录</div>
      </div>
    </div>
    <div class="info" v-show="isShow">
      <Item>
        <template v-slot:left>
          <div>手机号</div>
        </template>
        <template v-slot:center>
          <input class="input" type="text" placeholder="输入手机号码" />
        </template>
        <template></template>
      </Item>
      <Item>
        <template v-slot:left>
          <div>验证码</div>
        </template>
        <template v-slot:center>
          <input class="input" type="text" placeholder="输入验证码" />
        </template>
        <template v-slot:right>
          <div class="yanzheng">验证码</div>
        </template>
      </Item>
      <Login />
    </div>
    <div class="info-2" v-show="!isShow">
      <div class="info">
      <Item>
        <template v-slot:left>
          <div>账号</div>
        </template>
        <template v-slot:center>
          <input class="input" type="text" placeholder="输入账号" />
        </template>
        <template></template>
      </Item>
      <Item>
        <template v-slot:left>
          <div>密码</div>
        </template>
        <template v-slot:center>
          <input class="input" type="text" placeholder="输入密码" />
        </template>
      </Item>
      <Login />
    </div>
    </div>
  </div>
</template>

<script>
import Item from "./components/LoginItem";
import Login from "./components/LoginButton";
export default {
  components: {
    Item,
    Login,
  },
  name: "login",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    change() {
      this.isShow = !this.isShow;
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  .top {
    background-color: #18a9b9;
    padding-bottom: 0.4rem /* 10/25 */;
    margin-bottom: 0.4rem /* 10/25 */;
    .top-bar {
      display: flex;
      justify-content: space-between;
      color: #fff;
      font-size: 0.64rem /* 16/25 */;
      padding: 0.4rem /* 10/25 */;
    }
    .type {
      border-radius: 0.24rem /* 6/25 */;
      overflow: hidden;
      border: 1px solid #fff;
      margin: 0.4rem 0.4rem 0 0.4rem;
      display: flex;
      color: #fff;
      font-size: 0.64rem /* 16/25 */;
      div {
        flex: 1;
        text-align: center;
        padding: 0.4rem /* 10/25 */ 1.2rem /* 30/25 */;
      }
    }
    .active {
      background-color: #fff;
      color: #25a4bb;
    }
  }
  .info {
    border-bottom: 1px solid #eee;
    .input {
      height: 0.8rem /* 20/25 */;
      border: 0; // 去除未选中状态边框
      outline: none; // 去除选中状态边框
      background-color: rgba(0, 0, 0, 0); // 透明背景
    }
    .yanzheng {
      padding: 0.4rem /* 10/25 */;
      text-align: center;
      border-radius: 0.16rem /* 4/25 */;
      color: #ccc;
      font-size: 0.56rem /* 14/25 */;
      border: 1px solid #ccc;
    }
  }
}
</style>
