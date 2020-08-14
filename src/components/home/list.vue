<template>
  <div>
    <header>
      <span class="iconfont icon-zuo"></span>
      <img src="@/assets/img/logo.jpg" alt="小U商城" />
      <span class="iconfont icon-gengduo"></span>
    </header>
    <main>
        <input type="text" class="iconfont" :placeholder="icon" @keydown.enter="search" v-model="value">
        <ul>
            <li v-for="(item,index) in phoneList" :key="index" @click="change(item.id)">
                <img :src="'http://localhost:3000'+item.img">
                <div class="contitle">
                    <h3>{{item.goodsname}}</h3>
                    <p>￥{{item.price}}</p>
                    <span>3625条评论</span>
                </div>
            </li>
        </ul>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    let id=this.$route.query.id;
    this.http.get("/getgoods",{fid:id}).then((res) => {
      this.phoneList=res.data.list
    });
  },
  data(){
      return {
          icon:'\ue60d 搜索商品',
          phoneList:[],
          value:''
      }
  },
  methods: {
    search(){
       this.http.get('/getgoods',{keyword:this.value}).then(res=>{
         this.phoneList=res.data.list
       })
    },
    change(id){
        this.$router.push('/detail?id='+id)
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
  font-size .32rem
  padding 0 .28rem
  span
     font-size .32rem 
main 
   width 100%
   text-align center
   margin-top .2rem
   input 
       width 6.24rem
       height .76rem
       background color
       border-radius .38rem
       text-align center
       color #fff
       font-size .26rem 
       &::placeholder
          color #fff
          font-size .26rem 
    ul
      padding 0 .22rem
      margin-top .33rem
      li
        height 2.02rem
        display flex
        align-items center
        border-bottom 1px solid #d1d1d1
        img 
           width 1.78rem
           height 1.88rem
           margin-right .4rem
        .contitle
           flex 1
           text-align left
           h3
             font-size .26rem
             line-height .36rem
             margin-bottom .15rem
           p
             color #e7383d
             font-size .24rem
             margin-bottom .24rem
           span 
              font-size .22rem
              color #999999

</style>