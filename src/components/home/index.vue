<template>
  <div>
    <header>
      <img src="@/assets/img/logo.jpg" alt="小U商城" />
      <input type="text" placeholder="寻找商品" />
      <span class="iconfont icon-gengduo"></span>
    </header>
    <main>
      <nav>
        <ul>
          <li class="active">
            <a href="#">推荐</a>
          </li>
          <li>
            <a href="#">女装</a>
          </li>
          <li>
            <a href="#">鞋包</a>
          </li>
          <li>
            <a href="#">居家</a>
          </li>
          <li>
            <a href="#">母婴儿童</a>
          </li>
          <li>
            <a href="#">美食</a>
          </li>
          <li>
            <a href="#">果汁</a>
          </li>
        </ul>
        <div class="btn">
          <span class="iconfont icon-xia"></span>
        </div>
      </nav>
      <div class="banner">
        <Swiper ref="mySwiper" :options="swiperOptions">
          <Swiper-slide v-for="(item) in bannerList" :key="item.id">
            <img :src="'http://localhost:3000'+item.img" alt />
          </Swiper-slide>
        </Swiper>
      </div>
      <ul class="mainbot">
        <li>
          <span class="iconfont icon-xianshiqianggou"></span>
          <p>限时抢购</p>
        </li>
        <li>
          <span class="iconfont icon-shangcheng"></span>
          <p>积分商城</p>
        </li>
        <li>
          <span class="iconfont icon-lianxi"></span>
          <p>联系我们</p>
        </li>
        <li @click="pageChan">
          <span class="iconfont icon-shangpinfenlei"></span>
          <p>商品分类</p>
        </li>
      </ul>
      <div class="line"></div>
      <div class="botcon">
        <div class="seckill">
          <h1>
            <img src="@/assets/img/timer.jpg" />
            限时秒杀
          </h1>
          <p class="every">每天零点场，好货秒不停</p>
          <div class="time">
            <p>
              <span>02</span>:
              <span>02</span>:
              <span>02</span>
            </p>
            <i>秒杀</i>
          </div>
          <div class="pro">
            <img src="@/assets/img/shop_5.jpg" />
            <span>￥14.8</span>
          </div>
        </div>
        <div class="botRight">
          <div class="rightUp">
            <div class="newleft">
              <h1>
                品牌上新
                <span>折</span>
              </h1>
              <p class="title">每日9点 抢大牌</p>
            </div>
            <img src="@/assets/img/indexshop.jpg" alt class="newRight" />
          </div>
          <div class="rightDown">
            <a href="#">
              <div class="good">
                <h1>每日十件</h1>
                <p class="title">只为你选好货</p>
                <img src="@/assets/img/shop_2.jpg" alt />
              </div>
            </a>
            <a href="#">
              <div>
                <h1>拼啊</h1>
                <p class="title">超级好价拼团</p>
                <img src="@/assets/img/shop_3.jpg" alt />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="product">
        <ul class="title"> 
          <li v-for="(item,index) in title" :key="index" :class="{'active':index==ind}" @click="changeTab(index)">{{item}}</li>
        </ul>
        <ul class="proDetail" v-if="proList.length>0">
          <li v-for="(item,index) in proList[ind].content" :key="index"> 
            <div class="pic">
              <img :src="'http://localhost:3000'+item.img" alt="">
            </div>
            <div class="con">
              <h3>{{item.goodsname}}</h3>
              <p>￥{{item.price}}</p>
              <span>已售800件</span>
              <div class="go">立即抢购</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  mounted() {
    this.http.get("/getbanner").then((res) => {
      this.bannerList = res.data.list;
    });
    this.http.get("/getindexgoods").then((res) => {
      this.proList = res.data.list;
    });
  },
  methods: {
    pageChan() {
      this.$router.push('/categary')
    },
    changeTab(index){
      this.ind=index
    }
  },
  data() {
    return {
      ind:0,
      title:['最新商品','最热商品','全部商品'],
      bannerList: [],
      proList:[],
      swiperOptions: {
        autoplay: true,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped lang="stylus">
header
  height 0.88rem
  border-bottom 1px solid #e4e4e4
  display flex
  justify-content space-between
  align-items center
  padding 0 0.24rem
  img
    width 1.46rem
    height 0.28rem
  input
    background #eeeeee
    width 3.02rem
    height 0.38rem
    font-size 0.16rem
    text-align center
    &::placeholder
      color #b0b0b0
  span
    font-size 0.3rem
nav
  width 100%
  height 0.76rem
  border-bottom 1px solid #e4e4e4
  position relative
  .btn
    position absolute
    top 0
    right 0
    width 0.76rem
    height 100%
    background #fff
    text-align center
    line-height 0.76rem
  ul
    width 7.5rem
    padding-left 0.12rem
    display flex
    li
      text-align center
      padding 0 0.2rem
      >a
        display block
        height 0.76rem
        color #303030
        line-height 0.76rem
        font-size 0.28rem
        position relative
      &.active>a
        color #ec0c52
      &.active>a::after
        content ''
        width 100%
        height 0.04rem
        background #ff0140
        position absolute
        bottom 0
        left 0
.banner img
  width 7.5rem
  height 2.9rem
  >img
    width 7.5rem
    height 2.9rem
.mainbot
  width 100%
  height 1.78rem
  display flex
  align-items center
  >li
    flex 1
    font-size 0.28rem
    color #737373
    text-align center
    &:first-child .iconfont
      color #fba364
    &:nth-child(2) .iconfont
      color #32b323
    &:nth-child(3) .iconfont
      color #4ab6f6
    &:nth-child(4) .iconfont
      color #f26b11
    .iconfont
      font-size 0.6rem
.line
  width 100%
  height 0.29rem
  border-top 1px solid #ebebeb
  background #f1f1f1
.botcon
  width 100%
  height 3.77rem
  background #fff
  display flex
  .seckill
    width 3.77rem
    height 100%
    border-right 1px solid #f0f0f0
    h1
      margin 0.32rem 0 0 0.2rem
      height 0.32rem
      line-height 0.32rem
      font-size 0.26rem
      color #fc165f
      display flex
      img
        width 0.32rem
        height 0.32rem
        margin-right 0.14rem
    .every
      height 0.36rem
      line-height 0.36rem
      padding-left 0.18rem
      color #aaaaaa
    .time
      display flex
      padding-left 0.13rem
      height 0.42rem
      >p
        display flex
        height 0.42rem
        line-height 0.42rem
        color #27272f
        font-size 0.18rem
        span
          display block
          width 0.42rem
          height 0.42rem
          text-align center
          line-height 0.42rem
          color #ffffff
          background #27272f
          border-radius 0.06rem
          margin 0 0.08rem
      i
        display block
        width 0.62rem
        height 0.42rem
        margin-left 0.18rem
        background #f6dd00
        line-height 0.42rem
        font-size 0.24rem
        padding-left 0.2rem
        position relative
        &::after
          content ''
          position absolute
          right -0.28rem
          top 0
          width 0
          height 0
          border-width 0.21rem 0.14rem 0.21rem 0.14rem
          border-style solid
          border-color transparent transparent transparent #f6dd00
  .pro
    width 100%
    position relative
    >img
      width 2.37rem
      height 2rem
      margin 0.28rem 0 0 0.6rem
    >span
      position absolute
      right 0.3rem
      bottom 0.28rem
      width 0.82rem
      height 0.82rem
      border-radius 50%
      background #ff3179
      line-height 0.82rem
      text-align center
      font-size 0.24rem
      color #fff
  .botRight
    flex 1
    .rightUp
      width 100%
      height 1.88rem
      border-bottom 1px solid #f0f0f0
      display flex
      .newleft
        margin-left 0.18rem
        h1
          margin-top 0.19rem
          font-size 0.26rem
          color #fe1e67
          >span
            display inline-block
            width 0.32rem
            height 0.22rem
            background #ff2d5d
            color #fff
            font-size 0.18rem
            text-align center
            line-height 0.22rem
            margin-left 0.08rem
      .title
        line-height 0.4rem
        height 0.4rem
        color #949494
      .newRight
        width 1.04rem
        height 1.78rem
        margin 0.05rem 0 0 0.32rem
    .rightDown
      display flex
      height 1.88rem
      >a>div
        padding-left 0.18rem
        h1
          margin-top 0.18rem
          font-size 0.26rem
          color #fc3c77
          line-height 0.26rem
        .title
          line-height 0.4rem
          height 0.4rem
          color #949494
        img
          width 1.04rem
          height 0.88rem
          margin-left 0.24rem
      .good
        width 1.7rem
        border-right 1px solid #f0f0f0
        >img
          width 0.68rem
          height 1.03rem
          margin-left 0.5rem
.product
        padding .2rem .2rem 0
        .title
              height .78rem
              display flex
              li
                flex 1
                font-size .28rem
                text-align center
                line-height .78rem
                border 1px solid #d0d0d0
                &.active 
                   background color
                   color #fff
                   border-color color
.proDetail
          width 100%
          li
            width 100%
            height 3rem
            margin-top .16rem
            box-shadow 0 0 .1rem 1px #ccc
            display flex
            align-items center
            .pic  
               width 3.4rem
               height 100%
               text-align center
               margin-top .44rem
               img 
                 display inline-block
                 width 2.3rem
                 height 2.4rem
            .con
               flex 1
               height 2rem
               display flex
               flex-direction column
               justify-content space-between
               h3
                 font-size .28rem
              p
                 font-size .24rem
                 color #e8323f
               span 
                  font-size .22rem
                  color #9a9a9a
               .go
                  width 1.64rem
                  height .52rem
                  background color
                  color #ffffff
                  text-align center
                  line-height .52rem
                  font-size .22rem
                  border-radius .2rem

        
            
</style>