<template>
  <div class="item">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div>
        <slot name="center"></slot>

      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.item{
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  padding: 0.4rem /* 10/25 */;
  .left,.right{
    color: #19a9ba;
    font-size: 0.64rem /* 16/25 */;
  }
  .left{
    margin-right: 0.8rem /* 20/25 */;
  }
  .right{
    margin-left: 0.8rem /* 20/25 */;
  }
  div{
    flex: 1;
  }
}
</style>