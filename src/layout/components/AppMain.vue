<template>
  <transition name="fade" mode="out-in">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
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
