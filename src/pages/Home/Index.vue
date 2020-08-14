<template>
  <div :is="comName"></div>
</template>

<script>
import Index from '@/components/home/index'
import List from '@/components/home/list'
export default {
  mounted(){
     let id=this.$route.query.id;
     if(id){
       this.comName='list';
     }else{
       this.comName='index'
     }
  },
  data(){
    return {
      comName:'index'
    }
  },
  components: {
    Index,
    List,
  },
};
</script>

<style scoped lang="stylus">            
</style>