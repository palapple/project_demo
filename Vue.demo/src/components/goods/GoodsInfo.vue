<template>
<div class="goodsinfo-container">
        <!-- 写过程动画购物 -->
        <transition      
        @before-enter= "beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
            <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    
    <!-- 商品购买区域 -->
    <!-- 购物涉及，子组件传值到父组件，使用方法进行传递，父组件传递一个方法给子组件
    子组件调用，把数据当成参数进行传递 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
        
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>

</div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return{
            id: this.$route.params.id,
            lunbotu: [],
            goodsinfo: {},
            ballFlag: false,
            selectedCount: 1
        };
    },
    created(){
        getLunbotu();
        getGoodsInfo();
    },
    methods:{
        getLunbotu(){
            this.$http.get("api/getthumimages/"+this.id).then(result =>{
                if(result.body.state === 0){
                    result.body.message.forEach(item => {
                        item.img = item.src;
                    });
                    this.lunbotu = result.body.message;
                }
            });
        },
        getGoodsInfo(){
            this.$http.get("api/goods/getinfo/" + this.id).then(result => {
                if (result.body.status === 0) {
                    this.goodsinfo = result.body.message[0];
        }
      });
        },
        //下面使用了编程式导航跳转到图文介绍界面,Window Location Href
        goDesc(id){
            this.$router.push({ name: "goodsdesc", params: { id } });
        },
        goComment(id) {
            this.$router.push({ name: "goodscomment", params: { id } });
        },
        addToShopCar(){
            this.ballFlag != this.ballFlag;
            var goodsinfo = {
            id: this.id,
            count: this.selectedCount,
            price: this.goodsinfo.sell_price,
            selected: true
            };
            //将上面的对象储存回到vuex的store中
            this.$emit.commit("addTocar", goodsinfo)
        },
        // 构造transition动画
        beforeEnter(el){
            el.style.transform = "translate(0, 0)";
        },
        enter(el, done){
            el.offsetWidth;
            //getBoundingClientRect()可以得到小球的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document
            .getElementById('badge').getBoundingClientRect();

            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px, ${yDist}px)`
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"
            done();
        },
        afterenter(el){
            this.ballFlag !=this.ballFlag;
        },
        getSelectedCount(count){
            this.selectedCount = count;
        }
    },
    components:{
        swiper,
        numbox
    }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
  }
}
</style>