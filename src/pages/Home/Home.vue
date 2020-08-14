<template>
  <div class="box">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/home/index" tag="div">
        <span class="iconfont icon-shouye"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/home/shopcar" tag="div">
        <span class="iconfont icon-icozhuanhuan"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/home/my" tag="div">
        <span class="iconfont icon-wode"></span>
        <p>我的</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.box
  width 100%
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    overflow-y auto
  footer
    width 100%
    border-top 1px solid #ebebeb
    display flex
    align-items center
    height 1rem
    div 
      flex 1
      text-align center
      font-size 0.2rem
      color #727272
      span 
         font-size .4rem
      &.router-link-active
        color color
</style>