
<template>
<!-- 把首页的轮播图封装成一个组件 -->
<!-- 在组件中，使用v-for循环的话，一定要使用 key ,典型的父组件传值给子组件-->
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="" :class="{'full': isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<!-- 传入两个值，一个是轮播图数据，一个是宽度，因为一个在首页，一个在详情中都使用到这两个组件 -->
<!-- 设定宽度是100%，还是自适应 -->
<script>
export default {
  props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;

    img {
      // width: 100%;
      height: 100%;
    }
  }
}
.full {
  width: 100%;
}  
</style>