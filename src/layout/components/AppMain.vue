<template>
  <transition>
    <router-view :key="key" class="page" />
  </transition>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
.page {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
