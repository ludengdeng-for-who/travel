<template>
    <div class="home-header">
        <div class="header-left icon iconfont icon-houtui"></div>
        <div class="header-input"><i class="icon  iconfont icon-icon117"></i> 请输入城市/景点/主题</div>
        <div class="header-right">城市</div><i class="icon  iconfont icon-down-fill1-xs"></i>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import url("~@/assets/css/colors.less");
.home-header{
    position: sticky;
    top: 0;
    z-index: 999;
    height: 1.72rem /* 43/25 */;
    display: flex;
    background-color: @themeColor;
    color: #fff;
    align-items: center;
    font-size: 12px /* 14/25 */;
    .header-left{
        padding: 0 6px;
    }
    .header-right{
        padding:0 0 0 6px;
    }
    .icon-down-fill1-xs{
        padding:0 6px 0 0;
    }
    .header-input{
        flex:1;
        height: 1.2rem /* 30/25 */;
        background-color: #fff;
        border-radius: 12px;
        color: #ccc;
        line-height: 1.2rem;
        padding-left: 6px;
        .icon-icon117{
            font-size: 12px;
        }
    }
}
</style>