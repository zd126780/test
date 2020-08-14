<template>
  <div class="detail">
    <Header>
      <p>商品详情</p>
    </Header>
    <main>
      <div class="proCon">
        <img :src="'http://localhost:3000'+proList.img" alt />
        <p>{{proList.goodsname}}</p>
        <span>￥{{proList.price}}</span>
      </div>
    </main>
    <footer>
      <div class="car" @click="carnum">
        <span class="iconfont icon-icozhuanhuan"></span>
        <p>购物车</p>
        <i>0</i>
      </div>
      <div class="add" @click="showOn">加入购物车</div>
      <p class="buy">立即购买</p>
    </footer>
    <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
      <div class="proDeail">
        <img :src="'http://localhost:3000'+proList.img" alt />
        <div class="protitle">
          <p>{{proList.goodsname}}</p>
          <span>￥{{proList.price}}</span>
        </div>
      </div>
      <h6>{{proList.specsname}}</h6>
      <ul>
        <li :class="{'active':con==item}" v-for="(item,index) in gg" :key="index" @click="changeColor(item)">{{item}}</li>
      </ul>
      <div class="goCount">
        <h6>购买数量</h6>
        <div class="count">
          <span @click="del">-</span>
          <span>{{num}}</span>
          <span @click="add">+</span>
        </div>
      </div>
      <div class="check" @click="ifgo">确 定</div>
    </van-popup>
  </div>
</template>

<script>
import Header from "@/components/public/Header";
import { Toast } from 'vant';
export default {
  components: {
    Header,
  },
  data() {
    return {
      proList: [],
      show: false,
      gg: [],
      con:'',
      num:1
    };
  },
  mounted() {
    let { id } = this.$route.query;
    this.http.get("/getgoodsinfo", { id: id }).then((res) => {
      this.proList = res.data.list[0];
      this.gg = res.data.list[0].specsattr.split(",");
    });
  },
  methods: {
    showOn() {
      this.show = true;
    },
    changeColor(item){
       this.con=item
    },
    ifgo(){
        let {user}=this.$store.state
        if(user.uid){
          if(this.con){
             this.show=false;
             this.http.post('/cartadd',{uid:user.uid,goodsid:this.proList.id,num:this.num}).then(res=>{
               Toast.success('加入购物车成功');
             })
          }else{
            Toast.fail('请选择商品规格');
          }
        }else{
          Toast.fail('请先登录');
          setTimeout(()=>{
            this.$router.push('/login')
          },2000)
        }
    },
    carnum(){
      this.$router.push('/home/shopcar')
    },
    del(){
      this.num--;
      if(this.num<=1){
        this.num=1
      }
    },
    add(){
      this.num++;
    }  
    },
};
</script>

<style scoped lang="stylus">
.detail
  width 100%
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    width 100%
    overflow-y auto
    .proCon
      padding-bottom 0.36rem
      img
        width 100%
        height 7.5rem
      p
        font-size 0.4rem
        line-height 0.5rem
        margin 0.2rem 0 0 0.36rem
      span
        color #e3393c
        font-size 0.3rem
        margin-left 0.36rem
footer
  width 100%
  height 1.14rem
  display flex
  align-items center
  text-align center
  border-top 1px solid #f1f1f1
  .car
    width 1.72rem
    height 0.84rem
    position relative
    padding-top 0.3rem
    color #888888
    span
      font-size 0.4rem
    p
      font-size 0.18rem
      line-height 0.44rem
    i
      position absolute
      left 0.86rem
      top 0.2rem
      width 0.26rem
      height 0.26rem
      border-radius 50%
      background #e3393c
      line-height 0.26rem
      font-size 0.22rem
      color #fff
  .add
    width 2.9rem
    height 1.04rem
    background #f26b11
    color #fff
    line-height 1.04rem
    font-size 0.28rem
  .buy
    flex 1
    background #e43a3d
    color #fff
    line-height 1.04rem
    font-size 0.28rem
.proDeail
  display flex
  justify-content space-around
  width 100%
  height 2rem
  margin 0.2rem 0
  position relative
  img
    width 2rem
    height 2rem
  .protitle
    width 4rem
    p
      font-size 0.4rem
      line-height 1rem
      height 1rem
    span
      font-size 0.36rem
h6
  font-size 0.32rem
  margin 0.3rem 0.2rem
ul
  width 100%
  display flex
  margin 0.3rem 0.2rem
  li
    width 1rem
    height 0.6rem
    background #eeeeee
    text-align center
    line-height 0.6rem
    margin-right 0.2rem
    &.active 
       border 1px solid color
       color color
.goCount
  width 100%
  height 1rem
  display flex
  justify-content space-between
  .count
    display flex
    height 1rem
    align-items center
    margin-right .2rem
    span 
       width .6rem
       height .4rem
       border 1px solid #ccc
       text-align center
       line-height .4rem
       font-size .3rem
.check
     width 100%
     height 1rem
     background color 
     color #fff
     position absolute 
     bottom 0
     left 0
     line-height 1rem
     text-align center
     border-radius .5rem
     font-size .36rem
</style>