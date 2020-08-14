<template>
  <div class="regist">
    <h3 class="title">用户注册</h3>
    <div class="regCon">
      手机：
      <input type="text" v-model="phone" />
      <br />昵称：
      <input type="text" v-model="name" />
      <br />密码：
      <input type="text" v-model="pwd" />
      <br />
      <div class="commit" @click="on">注册</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      name: "",
      pwd: "",
    };
  },
  methods: {
    on() {
      this.http
        .post("/register", {
          phone: this.phone,
          nickname: this.name,
          password: this.pwd,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style scoped lang="stylus">
.regist
  width 100%
  height 100%
  .title
    width 100%
    height .6rem
    line-height .6rem
    text-align center
    font-size .5rem
    margin-top .6rem
    color color
  .regCon
    width 5rem
    margin 1rem auto
    padding 0.2rem
    font-size 0.36rem
    input
      width 3.5rem
      height 0.6rem
      border 1px solid #ccc
      margin 0.2rem 0
      font-size 0.36rem
    .commit
      width 2.6rem
      height 0.8rem
      line-height 0.8rem
      text-align center
      background color
      color #fff
      margin 0.3rem auto
      font-size 0.36rem
</style>