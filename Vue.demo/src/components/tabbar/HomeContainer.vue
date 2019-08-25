   <!--  -->
<template>
    <div>
        <!--mt组件-轮播图 -->
        <!-- 利用插件完成，需要用bind绑定数据 -->
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

     <!--6宫格  -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
    </div>
</template>

<script>
// 导入一个提示气泡组件
import { Toast } from 'mint-ui';
import swiper from '../subcomponents/swiper.vue'

export default {
    data(){
        return {
            lunbotuList: []  //为了让组件的使用，现在data中定义
        }
    },
    created(){
        this.getLunbotu();
    },
    methods: {
        getLunbotu(){
            this.$http.get('api/getlunbo').then(result => { //根据数据api来写，这里get请求地址不需要加/
                if(result.body.status === 0){  //回调函数
                    this.lunbotuList = result.body.message;
                }else{
                    Toast("加载失败了");
                }
            })
        }
    },
    components:{
        swiper
    }
};
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
