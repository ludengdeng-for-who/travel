<template>
  <div class="icons">
    <div class="info">
      <div class="item" v-for="item in iconsList" :key="item.id">
        <img :src="item.src" alt="" />
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HIcons",
  data() {
    return {
      iconsList: [
        {
          id: 1,
          src:
            "//gw.alicdn.com/tfs/TB1Nq50tqL7gK0jSZFBXXXZZpXa-210-171.png_110x10000.jpg_.webp",
          title: "机票"
        },
        {
          id: 2,
          src:
            "//gw.alicdn.com/tfs/TB1n256tAL0gK0jSZFxXXXWHVXa-210-171.png_110x10000.jpg_.webp",
          title: "酒店"
        },
        {
          id: 3,
          src:
            "//gw.alicdn.com/tfs/TB1_Ie3tEz1gK0jSZLeXXb9kVXa-210-171.png_110x10000.jpg_.webp",
          title: "火车票"
        },
        {
          id: 4,
          src:
            "//gw.alicdn.com/tfs/TB1v9m8tAT2gK0jSZFkXXcIQFXa-210-171.png_110x10000.jpg_.webp",
          title: "汽车票"
        },
        {
          id: 5,
          src:
            "//gw.alicdn.com/tfs/TB1OIC3tvb2gK0jSZK9XXaEgFXa-210-171.png_110x10000.jpg_.webp",
          title: "门票"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
  .item {
    text-align: center;
    img {
      width: 2.8rem /* 70/25 */;
      height: 2.8rem /* 70/25 */;
    }
  }
}
</style>
