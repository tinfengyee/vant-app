<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#13227a" route>
      <van-tabbar-item replace to="/home">
        <span>首页</span>
        <svg-icon icon-class="家" replace slot="icon" />
      </van-tabbar-item>
      <van-tabbar-item to="/goods">
        <span>菜单</span>
        <svg-icon icon-class="杯子" slot="icon" />
      </van-tabbar-item>
      <van-tabbar-item replace>
        <span>订单</span>
        <svg-icon icon-class="订单" slot="icon" />
      </van-tabbar-item>
      <van-tabbar-item info="3" replace to="/cart">
        <span>购物车</span>
        <svg-icon icon-class="购物车" slot="icon" />
      </van-tabbar-item>
      <van-tabbar-item replace>
        <span>我的</span>
        <svg-icon icon-class="我的" slot="icon" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scpoed>
.tabbar {
  .van-tabbar {
    height: $tabbarHeight;
  }
  .van-tabbar-item {
    &__text {
      span {
        font-size: 12px;
        transform: scale(0.8);
        display: block;
      }
    }
  }
}
</style>
