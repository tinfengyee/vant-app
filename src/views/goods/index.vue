<template>
  <div class="goods">
    <div class="goods-swipe-wrapper">
      <van-swipe class="goods-swipe-box" :autoplay="3000" indicator-color="#fff">
        <van-swipe-item @click="swipeItemClick()" v-for="(img, index) in swipeImgList" :key="index">
          <van-image class="home-swipe-img" width="100%" fit="cover" :src="img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="goods-order-wrapper">
      <div class="goods-menu-wrapper" ref="menuWrapper">
        <ul class="goods-menu-content">
          <li v-for="(item, index) in goodMenu" @click="selectLeft(index)" :key="index" :class="{ active: currentIndex === index }">
            {{ item }}
          </li>
        </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>
      <div class="goods-list-wrapper" ref="listWrapper">
        <ul class="goods-list-content">
          <li v-for="(item, index) in goodList" :key="index" ref="rItem" :class="{ active: currentIndex === index }">
            <p>{{ item.name }}</p>
            <!-- goods-list-wrapper -->
            <ul class="goods-list-content-detail">
              <li v-for="(item, key) in item.data" :key="key">
                {{ item }}
              </li>
            </ul>
          </li>
        </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Vue from 'vue'
import { Image, Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Image)
export default {
  name: 'Goods',
  data() {
    return {
      container: null,
      swipeImgList: ['http://localhost:5000/images/menu1.png', 'http://localhost:5000/images/menu2.png'],
      goodMenu: ['菜单1', '菜单2', '菜单3', '菜单4', '菜单5', '菜单6', '菜单7', '菜单8'],
      goodList: [
        { name: '菜单1', data: ['1.1', '1.2', '1.3', '1.4', '1.5'] },
        { name: '菜单2', data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6'] },
        { name: '菜单3', data: ['1.1', '1.2', '1.3', '1.4', '1.5'] },
        { name: '菜单4', data: ['1.1', '1.2', '1.3', '1.4', '1.5'] },
        { name: '菜单5', data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8'] },
        { name: '菜单6', data: ['1.1', '1.2', '1.3', '1.4', '1.5'] },
        { name: '菜单7', data: ['1.1', '1.2', '1.3', '1.4'] },
        { name: '菜单8', data: ['1.1', '1.2'] }
      ],
      scrollY: 0, //获取实时滚动位置
      heightList: [] //获取每一个li的高度,
    }
  },
  computed: {
    currentIndex() {
      const index = this.heightList.findIndex((item, index) => {
        return this.scrollY >= this.heightList[index] && this.scrollY < this.heightList[index + 1]
      })
      return index > 0 ? index : 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
      this.getHeight()
      // this.getOffsetToSwipe()
    })
  },
  methods: {
    swipeItemClick() {
      console.log(this)
    },
    // 初始化 BScroll
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.goodsScroll = new BScroll(this.$refs.listWrapper, {
        click: true,
        probeType: 3 // 检测实时滚动的效果
      })
      this.goodsScroll.on('scroll', pos => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    // 获取右菜单每个li的高度
    getHeight() {
      const lis = this.$refs.rItem
      // heightList的第一个元素为0
      let height = 0
      this.heightList.push(height)
      // 之后的高度即为当前li的高度加上之前面li的高度和
      lis.forEach(item => {
        height += item.clientHeight
        this.heightList.push(height)
      })
    },
    // 左菜单点击，右菜单同步
    selectLeft(index) {
      let rItem = this.$refs.rItem
      let el = rItem[index]
      this.goodsScroll.scrollToElement(el, 1000)
    }
    // 最后一个菜单到轮播图地图的距离 暂时废弃
    // getOffsetToSwipe() {
    //   const ulBox = document.querySelector('.goods-list-content > li:last-child')
    //   console.dir(ulBox)
    //   // const bottom = ulBox.clientY
    //   // console.log(bottom)
    // }
  }
}
</script>
<style lang="scss" scoped>
.goods {
  height: calc(100% - #{$tabbarHeight});
  overflow: hidden; // 防止出现滚动条
  &-swipe-wrapper {
    transform: translateZ(0);
    overflow: hidden;
  }
  &-swipe-box {
    max-height: 108px;
  }
  &-swipe-img {
    height: 108px;
  }

  &-order-wrapper {
    display: flex;
    overflow: hidden;
    height: calc(100% - #{$tabbarHeight + 2px});
    padding-bottom: 50px;
  }

  &-menu-wrapper {
    width: 74px;
    height: 100%;
    background-color: #eee;
  }

  &-menu-content {
    li {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      text-align: center;
      position: relative;

      &:after {
        position: absolute;
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #ccc;
        left: 0;
        bottom: 0;
      }
      &:last-child:after {
        height: 0;
      }
      &.active {
        background-color: #fff;
        &:before {
          position: absolute;
          content: '';
          display: block;
          width: 2px;
          height: 100%;
          background-color: #0076f5c2;
          left: 0;
          top: 0;
        }
      }
    }
  }

  &-list-wrapper {
    flex: 1;
    height: 100%;
  }

  &-list-content {
    padding-bottom: $tabbarHeight;
    > li {
      &:last-child {
        margin-bottom: 460px;
      }
      p {
        height: 42px;
        line-height: 42px;
      }
    }
    &-detail {
      li {
        height: 56px;
        line-height: 56px;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
