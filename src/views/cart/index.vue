<template>
  <div class="cart">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-image class="cart-topimg" width="100%" fit="cover" :src="topImg" />

      <van-checkbox-group class="cart-group" v-model="checkedResult">
        <van-checkbox class="cart-item" v-for="item in checkList" :key="item.name" :name="item">
          <div class="cart-item-content-title">
            <p style="font-size:12px;">呵呵</p>
            <p style="font-size:12px;">大/</p>
          </div>
          <div class="cart-item-content-check">
            <svg-icon icon-class="减" />
            <svg-icon icon-class="加" />
          </div>
        </van-checkbox>
      </van-checkbox-group>
    </van-pull-refresh>
    <van-submit-bar :price="3050" label="应付合计" :button-text="submitBarText" @submit="onSubmit" />
  </div>
</template>

<script>
import Vue from 'vue'
import { Image, PullRefresh, Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant'

Vue.use(PullRefresh)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Card)
  .use(SubmitBar)
  .use(Toast)
  .use(Image)

export default {
  data() {
    return {
      checkList: [{ name: 'a', count: 4 }, { name: 'b', count: 5 }, { name: 'c', count: 7 }],
      checkedResult: [], // 选中的东西
      topImg: 'http://localhost:5000/images/menu2.png',
      isLoading: false
    }
  },
  computed: {
    submitBarText() {
      const count = this.checkedResult.length
      return '结算' + (count ? `(${count})` : '')
    },

    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0)
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2)
    },
    onSubmit() {
      Toast('点击结算')
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.cart {
  height: calc(100% - #{$tabbarHeight});
  .van-pull-refresh {
    height: calc(100% - #{$tabbarHeight});
    .van-pull-refresh__track {
      height: 100%;
    }
  }
  &-topimg {
    height: 68px;
  }

  &-group {
    // display: flex;
    // flex-flow: column;
  }

  &-item {
    background: #ccc;
    height: 66px;
    line-height: 66px;
    display: flex;
    .van-checkbox__icon {
      margin-left: 15px;
    }
    .van-checkbox__label {
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cart-item-content-title {
        overflow: hidden;
        display: flex;
        flex-flow: column;
        align-content: center;
        vertical-align: middle;
        align-items: center;
        p {
          display: inline-block;
          height: 12px;
        }
      }
    }
  }
}

// 下方按钮
.van-submit-bar {
  bottom: $tabbarHeight;
}
</style>
