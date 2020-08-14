<template>
  <div class="shopcar">
    <Header>
      <p>购物车</p>
    </Header>
    <main>
      <ul>
        <li v-for="(item,index) in carlist" :key="index">
          <span :class="['iconfont','icon-selected',{'active':ischeck}]" @click="change"></span>
          <img :src="'http://localhost:3000'+item.img" />
          <div class="carCon">
            <h3>{{item.goodsname}}</h3>
            <span>规格：50g</span>
            <p>￥{{item.price}}</p>
          </div>
          <div class="num">
            <span @click="del(item)">-</span>
            <span>{{item.num}}</span>
            <span @click="add(item)">+</span>
          </div>
           <div class="btn">删除</div>
        </li>
      </ul>
    </main>
    <footer>
     <span class="iconfont icon-selected"></span>
      <p class="all">全选</p>
      <div class="alltlt">
        <p class="allpay">总计：<span>￥163.00</span></p>
        <span>不含运费，已优惠￥0.00</span>
      </div>
      <div class="pay">去结算(2件)</div>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/public/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      carlist: [],
      ischeck:false
    };
  },
  mounted() {
    let { user } = this.$store.state;
    this.http.get("/cartlist", { uid: user.uid }).then((res) => {
      console.log(res);
      this.carlist = res.data.list;
    });
  },
  methods: {
    del(item){
      item.num--;
      if(item.num<=1){
        item.num=1
      }
    },
    add(item){
      item.num++;
    },
    change(){
      console.log(this.ischeck);
      this.ischeck=!this.ischeck
    }
  },
};
</script>

<style scoped lang="stylus">
.shopcar
  width 100%
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    width 100%
    overflow-y auto
    ul
      width 100%
      li
        overflow-y hidden
        position relative
        width 100%
        margin-top 0.26rem
        height 1.7rem
        display flex
        align-items center
        padding-left 0.24rem
        box-shadow 0 0 0.1rem 0.08rem #ccc
        .iconfont
            margin-left .2rem
            font-size 0.34rem
            line-height 0.24rem
        img 
           width 1.24rem
           height 1.24rem
        .carCon
           height 1.2rem
           display flex
           flex-direction column
           justify-content space-around
           margin-left .2rem
           h3
            font-size .24rem
           span 
            font-size .22rem
            color #ccc
            &.active
              color color
           p
            color #e43a3b
            font-size .24rem
        .num
            width 2.12rem
            height .58rem
            margin-left 1.3rem
            display flex
            span 
                width .7rem
                height .56rem
                border 1px solid #000
                line-height .56rem
                text-align center
                font-size .26rem
                &:nth-child(2)
                   border-left none 
                   border-right none
        .btn
            width .98rem
            height 1.7rem
            color #ffffff
            background #e43a3d
            font-size .24rem
            line-height 1.7rem
            text-align center 
            position absolute 
            top 0
            right -.98rem    
   footer 
       position relative
       height 1.12rem
       border 1px solid #ccc 
       display flex
       align-items center 
       .iconfont
          font-size .34rem
          margin 0 .16rem 0 .24rem         
       .all
          color #666666
          font-size .22rem
          margin-right 1rem
        .alltlt
          text-align right
          .allpay
             font-size .3rem
             span 
                font-size .24rem
                color #e33b3b
                margin-left .1rem
          span 
             font-size .18rem
             color #a4a4a4
         .pay
             position absolute 
             right 0
             top 0
             width 2.46rem
             height 1.12rem
             background #f26b11
             line-height 1.12rem
             color #ffffff
             font-size .3rem
             text-align center


</style>