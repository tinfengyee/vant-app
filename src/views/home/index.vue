<template>
  <div class="home">
    <van-swipe class="home-swipe" :autoplay="3000" indicator-color="#fff" @click.native="handlePre">
      <van-swipe-item v-for="(img, index) in imageList" :key="index">
        <img :src="img" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group class="home-shop">
      <van-cell title="奥腾汇店" label="距离您1.4km">
        <div>
          <span style="border:1px solid #ccc;">自提</span>
          <span style="border:1px solid #ccc;">外送</span>
        </div>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="home-cell-group">
      <van-cell title="现在下单" label="ORDER NOW">
        <!-- <van-icon name="point-gift-o" color="#87684B" /> -->
        <svg-icon icon-class="coffee" />
      </van-cell>
      <van-cell title="咖啡钱包" label="COFFEE WALLET">
        <!-- <van-icon name="point-gift-o" color="#87684B" /> -->
        <svg-icon icon-class="money" />
      </van-cell>
      <van-cell title="送她咖啡" label="SEND COFFEE">
        <!-- <van-icon name="point-gift-o" color="#87684B" /> -->
        <svg-icon icon-class="gift" />
      </van-cell>
      <van-cell title="企业账户" label="ENTERPRISE ACCOUNT">
        <!-- <van-icon name="point-gift-o" color="#87684B" /> -->
        <svg-icon icon-class="enterprise" />
      </van-cell>
    </van-cell-group>

    <van-image width="100%" fit="contain" src="http://120.77.217.7:8888/download?filename=/www/vant-app/img/coffee2.png" />
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon, Panel, Row, Col, Swipe, SwipeItem, Button, ImagePreview, Image, RadioGroup, Radio, CellGroup, Cell } from 'vant'
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Button)
  .use(Image)
  .use(ImagePreview)
  .use(RadioGroup)
  .use(Radio)
  .use(CellGroup)
  .use(Cell)
  .use(Row)
  .use(Col)
  .use(Panel)
  .use(Icon)
export default {
  name: 'home',
  data() {
    return {
      radio: '1',
      imageList: [
        'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
        'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
      ]
    }
  },
  methods: {
    handlePre() {
      ImagePreview(this.imageList)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #fff;
  padding-bottom: 50px;
  &-swipe {
    max-height: 228px;
    img {
      width: 100%;
      display: block;
    }
  }

  &-shop {
    .van-cell {
      height: 56px;
      padding: 8px 16px;
      &__label {
        margin: 0;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
  &-cell-group {
    .van-cell {
      height: 50px;
      // 添加上细线
      &:first-child::before {
        position: absolute;
        box-sizing: border-box;
        content: ' ';
        pointer-events: none;
        right: 0;
        top: 0;
        left: 0.42667rem;
        border-top: 1px solid #ebedf0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
      &__label {
        margin: 0;
        font-size: 10px;
        line-height: 10px;
      }
      .svg-icon {
        width: 28px;
        height: 28px;
        fill: #e16531;
      }
    }
  }
  .van-hairline--top-bottom::after {
    border-width: 0px 0;
  }
  // &-bottom-img {
  // }
}
</style>
