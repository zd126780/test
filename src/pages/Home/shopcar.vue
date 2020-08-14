<template>
  <div :is="comName"></div>
</template>

<script>
import Shopcar from "@/components/shopcar/Shopcar";
import Order from "@/components/shopcar/Order";
export default {
  components: {
    Shopcar,
    Order,
  },
  data() {
    return {
      comName: "Shopcar",
    };
  },
};
</script>

<style scoped>
</style>