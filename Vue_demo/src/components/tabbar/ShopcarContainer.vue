<template>
  <div class="shopcar-container">
    <!-- 商品列表 -->
    <div class="goods-list">
      <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
              <!-- 这里用了用了双向数据绑定 已经选择好的商品 -->
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"    
              @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path" />
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <!-- 通过创建一个对象来存储对应的货品的数据 -->
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算界面 -->
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner jiesuan">
                <div class="left">
                    <p>总计（不含运费）</p>
                    <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件， 总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
                </div>
                    <mt-button type="danger">去结算</mt-button>
            </div>
        </div>
    </div>
    <p>{{ $store.getters.getGoodsSelected }}</p>

  </div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbx.vue'
import { join } from 'path';
export default {
data(){
  return{
    goodslist: []
  }
},
created(){
  this.getGoodList();
},
methods:{
  getGoodList(){
    var idArr = [];
    this.$store.state.car.forEach(item => idArr.push(item.id));
    if(idArr.length <= 0){
      return
    }
    this.$http.get("api/goods/getshopcarlist/"+ idArr.join(","))
    .then(result => {
      if(result.message.state === 0){
        this.goodslist = result.body.message;
      }
    });
  },
  // 以下的方法连同了vuex数据共享区域
  remove(id, index){
    this.goodslist.splice(index, 1);
    this.$store.commit("removeFormCar", id);//绑定到vuex方法之中,$store是data数据
  },
  selectedChanged(id, index){
    this.$store.commit("updateGoodsSelected",{id, selected: val});
  }
},
components:{
  numbox
}

}
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>