<template>
  <div class="home">
    <div class="home-swipe-wrapper">
      <van-swipe class="home-swipe-box" :autoplay="3000" indicator-color="#fff">
        <van-swipe-item @click="handlePre" v-for="(img, index) in imageList" :key="index">
          <van-image class="home-swipe-img" width="100%" fit="cover" :src="img" />
        </van-swipe-item>
      </van-swipe>
    </div>

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
        <svg-icon icon-class="coffee" />
      </van-cell>
      <van-cell title="咖啡钱包" label="COFFEE WALLET">
        <svg-icon icon-class="money" />
      </van-cell>
      <van-cell title="送她咖啡" label="SEND COFFEE">
        <svg-icon icon-class="gift" />
      </van-cell>
      <van-cell title="企业账户" label="ENTERPRISE ACCOUNT">
        <!-- <van-icon name="point-gift-o" color="#87684B" /> -->
        <svg-icon icon-class="enterprise" />
      </van-cell>
    </van-cell-group>

    <van-image width="100%" height="2rem" fit="cover" :src="bottomImg" />
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
  name: 'Home',
  data() {
    return {
      bottomImg: 'http://localhost:5000/images/success2.png',
      imageList: ['http://localhost:5000/images/apple1.jpeg', 'http://localhost:5000/images/apple2.jpeg']
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
  padding-bottom: #{$tabbarHeight + 10px};
  /* 解决navbar点击内容抖动 */
  &-swipe-wrapper {
    transform: translateZ(0);
    overflow: hidden;
  }
  &-swipe-box {
    max-height: 228px;
  }
  &-swipe-img {
    height: 228px;
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
}
</style>
