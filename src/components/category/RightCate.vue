<template>
  <div class="rightCate">
    <ul>
      <li v-for="(item,index) in seclist" :key="index" @click="phone(item)">
        <img class="pic" :src="'http://localhost:3000'+item.img" />
        <p>{{item.catename}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["seclist"],
  mounted() {
    console.log(this.seclist);
  },
  methods: {
      phone(item){
        this.$router.push('/home/index?id='+item.id)
      }
  },
};
</script>

<style scoped lang="stylus">
.rightCate
  width 100%
  padding-top .3rem
  ul
    width 100%
    display flex
    li
      width 1.88rem
      text-align center
      .pic
        display inline-block
        width 1.6rem
        height 1.46rem
      p
        color #9a9a9a
        font-size .24rem
</style>