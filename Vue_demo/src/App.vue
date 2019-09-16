

<!-- 主窗口结构-->
<template>
    <div class="app-container">

<!--顶部Header部分 -->
<!-- 这里引用mt-ui组件 -->
 <mt-header fixed title="palapple项目">
    <span slot="left" @click="goBack" v-show="flag">
    <mt-button icon="back">返回</mt-button>
    </span>
 </mt-header>

<!-- 中间路由动态切换 Router-view区域-->
<!-- 通过一个transition包裹起来，有过场动画效果，添加router路由，动态变化 -->
<transition>
    <router-view></router-view>
</transition>

<!--底部Tabbar区域-->
<!-- 底部通过mui-bar组件进行引用 ， 修改a标签，转换成router-link,把href属性 转to="/home"-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
// 通过flag让goback图标是否显示
export default {
    data(){
        return {
            flag: false
        };
    },
    // vue钩子函数，当被创造的时候就执行这个判断
    created(){
        this.flag = this.$route.path === '/home' ? false: true;
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
    // 这里监听路由的变化
    watch: {
        "$route.path": function(newVal){
            if(newVal === '/home'){
                this.flag = false;
            }else{
                this.flag = true;
            }
        }
    }
};

</script>
<!-- 添加scope方式样式全局污染-->
<style lang="scss" scoped>
    .mint-header{
        z-index:999;
    }
    // 这里只能使用overflow-x，垂直方向还得要显示出来
    .app-container{
        padding-top:40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }

// transition动画
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

// 因为包名冲突，需要对类名重写样式，解决tabbar切换路由问题
.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>