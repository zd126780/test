<template>
  <div class="cate">
    <Header>
      <p>商品分类</p>
    </Header>
    <main v-if="cateList.length>0">
      <ul class="left">
        <li v-for="(item,index) in cateList" :key="index" :class="{'active':index==ind}" @click="changeTab(index)">{{item.catename}}</li>
      </ul>
      <div class="right">
        <RightCate :seclist="cateList[ind].children"></RightCate>
      </div>  
    </main>
  </div>
</template>

<script>
import Header from "@/components/public/Header";
import RightCate from "@/components/category/RightCate"
export default {
  mounted() {
    this.http.get("/getcatetree").then((res) => {
      console.log(res);
      this.cateList=res.data.list
    });
  },
  data() {
    return {
      cateList:[],
      ind:0,
    }
  },
  methods: {
    changeTab(i){
      this.ind=i
    }
  },
  components: {
    Header,
    RightCate
  },
};
</script>

<style scoped lang="stylus">
.cate
     width 100%
     display flex
     flex-direction column
     height 100%
 main 
    width 100%
    flex 1
    overflow-y auto
    display flex
    border-top 1px solid #d9d9d9
    height 100%
 .left
     width 1.62rem
     height 100%
     border-right 1px solid #d9d9d9
     padding-top .3rem
     li
        width 1.62rem
        height .52rem
        margin-bottom .6rem
        text-align center
        font-size .26rem
        line-height .52rem
        color #656565
        border-left .08rem solid transparent
        &.active
           border-left-color color
           color color
  .right
       width 5.86rem

</style>