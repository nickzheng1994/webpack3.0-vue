<template>
  <div class="viewport">
    <div class="item" v-for="item in list" :key="item" @click="toPage">
      <img src="http://wootten.com.au/content/uploads/2017/03/gordon-boot-ws-tan-thumbnail-526x580.jpg">
      <div class="ware-name">兰色雪肌精化妆水乳液{{item}}</div>
      <div class="ware-price">￥310元/只</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[1,2,3]
    }
  },
  methods: {
    toPage() {
      this.$router.push({ path: "/helloWorld" });
    }
  },
  mounted() {
    this.$ajax({
      url:'/getWareList'
    }).then((res) => {
      debugger
    })
  }
};
</script>

<style lang="less" scoped>
.viewport {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  .item {
    background: #fff;
    width: 272px;
    margin: 15px auto;
    overflow: hidden;
    padding: 10px;
    img {
      width: 100%;
      margin-bottom: 10px;
    }
    .ware-name {
      color: #000;
      font: 20px;
      width: 100%;
      margin-bottom: 10px;
    }
    .ware-price {
      color: rgb(247, 46, 46);
      font-size: 14px;
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
