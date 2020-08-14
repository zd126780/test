<template>
  <div>
    <header>
      <span class="iconfont icon-zuo" @click="back"></span>
      <slot></slot>
      <span class="iconfont icon-gengduo"></span>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    back(){
      this.$router.back()
    }
  },
};
</script>

<style scoped lang="stylus">
header
  height 0.88rem
  display flex
  justify-content space-between
  align-items center
  background #f26b11
  color #fff
  font-size .32rem
  padding 0 .28rem
  span
     font-size .32rem 
</style>