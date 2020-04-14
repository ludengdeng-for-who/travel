<template>
  <div class="item">
          <div class="left" :style="{backgroundColor:bgc}">
              <slot name="left"></slot>
          </div>
          <div class="center">
              <slot name="center" ></slot>
          </div>
          <div class="right">
            <slot name="right"></slot>
          </div>
  </div>
</template>

<script>
export default {
    name:"item",
    props:{
        bgc:{
            type:String,
            default :''
        },
        icon:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="less" scoped>
.item{
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0.32rem /* 8/25 */ ;
    .center{
        font-size: 0.56rem /* 14/25 */;
        flex: 1;
    }
    .left{
        width: 30px;
        height: 30px;
        border-radius: 10px;
        margin-right: 0.4rem /* 10/25 */;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
}
</style>