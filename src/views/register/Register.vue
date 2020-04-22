<template>
  <div>
    <div class="header">
      <div class="icon iconfont icon-houtui" @click="back"></div>
      <div>注册页面</div>
      <div></div>
    </div>
    <div class="info">
      <Item>
        <template v-slot:left>
          <div>手机号</div>
        </template>
        <template v-slot:center>
          <input
            class="input"
            v-model="user.name"
            type="text"
            placeholder="请输入用户名"
          />
        </template>
        <template></template>
      </Item>
      <Item>
        <template v-slot:left>
          <div>验证码</div>
        </template>
        <template v-slot:center>
          <input
            class="input"
            type="text"
            v-model="user.password"
            placeholder="请输入密码"
          />
        </template>
      </Item>
      <div @click="register">
        <ResButton></ResButton>
      </div>
    </div>
  </div>
</template>

<script>
import ResButton from "./components/ResButton";
import Item from "./components/ResItem";
export default {
  components: {
    ResButton,
    Item,
  },
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    register() {
      localStorage.setItem("userinfo", JSON.stringify(this.user));
      alert("注册成功!");
      this.user.name = "";
      this.user.password = "";
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  background-color: #18a9b9;
  display: flex;
  align-items: center;
  height: 1.72rem /* 43/25 */;
  color: #fff;
  padding: 0 0.4rem /* 10/25 */;
  font-size: 0.56rem /* 14/25 */;
  div {
    flex: 1;
    &:nth-child(2) {
      text-align: center;
    }
  }
}
input {
  height: 0.8rem /* 20/25 */;
  border: 0; // 去除未选中状态边框
  outline: none; // 去除选中状态边框
  background-color: rgba(0, 0, 0, 0); // 透明背景
}
</style>
