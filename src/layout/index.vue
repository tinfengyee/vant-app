<template>
  <div class="app-wrapper">
    <app-main />
    <tabbar />
  </div>
</template>

<script>
import { AppMain, Tabbar } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Tabbar
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 46.66px;
  overflow-x: hidden;
}

</style>
