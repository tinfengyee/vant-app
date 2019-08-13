<template>
  <div class="good">
    <div class="good-Menu" ref="goodMenu">
      <ul class="menu-content">
        <li v-for="(item, index) in goodMenu" :key="index" :class="{ active: currentIndex === index }">
          {{ item }}
        </li>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
    <div class="good-List" ref="goodList">
      <ul class="list-content">
        <li v-for="(item, index) in goodList" :key="index" :class="{ active: currentIndex === index }">
          <p>{{ item.name }}</p>
          <ul class="list-content-detail">
            <li v-for="(item, key) in item.data" :key="key">
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Menu',
  data() {
    return {
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
      return 1
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.goodMenu, {
        click: true
      })
      this.goodsScroll = new BScroll(this.$refs.goodList, {
        click: true,
        probeType: 3 // 检测实时滚动的效果
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.good {
  display: flex;
  &-Menu {
    width: 74px;
    max-height: 100vh;
    .menu-content {
      li {
        height: 36px;
        border: 1px solid #ccc;
      }
    }
  }
  &-List {
    flex: 1;
    max-height: 100vh;
    .list-content {
      li {
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
}
</style>
