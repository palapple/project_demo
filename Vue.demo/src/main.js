
//整个main.js的作用就是把各种资源加载进来，创造Vue实例，引用包，并调用Vue使用
// 还有定义一些全局的设置 

// vue，vue-router，vue-resource的资源包引入
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入自己写的路由模块
import router from './router.js'
// 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
// 设置post请求的表单的默认数据格式
Vue.http.options.emulateJSON = true;

// 因为全局的时间都需要一个格式化的时间插件，定义一个，直接引用插件格式化时间数据格式
import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern= 'YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern)
})


// M-ui样式,Min-ui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import MinUI from 'mint-ui'
Vue.use(MinUI)
import 'mint-ui/lib/style.css'

//使用vuex，共享参数
import Vuex from 'vuex'
Vue.use(Vuex)

// 读取本地购物车数据，并存入prop管道之中
var car = JSON.parse(localStorage.getItem('car') || '[]')

// state类似data，而mutations类似methods,其中flag的作用用于判断购物车中有无这件商品
//通过vuex进行共享数据，并对这个数据库进行添加增删改查的方法，最后都得存到浏览器之中
//其中的some方法，类似find方法，查找并返回


var store = new Vuex.Store({
    state:{
        car: car
    },
    mutations: {
        addToCar(state, goodsinfo){
            var flag = false
            state.car.some(item => {
                if(item.id == gooodsinfo.id){
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if(!flag){
                state.car.push(gooodsinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo){
            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state, id){
            state.car.some((item, i) => {
              if (item.id == id) {
                state.car.splice(i, 1)
                return true;
              }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
          },
          updateGoodsSelected(state, info) {
            state.car.some(item => {
              if (item.id == info.id) {
                item.selected = info.selected
              }
            })
            localStorage.setItem('car', JSON.stringify(state.car))   
        }
        },
        // 类似VUE中的计算属性，也有点像过滤器filters
        // 看看在哪里调用了这个
        getters: {
            getAllCount(state){
                var c = 0;
                state.car.forEach(item => {
                    c += item.count
                })
                return c
            },
            getGoodsCount(state){
                var o = {}
                state.car.forEach(item =>{
                    o[item.id] = item.id
                })
                return o
            },
            getGoodsSelect(state){
                var o ={}
                state.car.forEach(item =>{
                    o[item.id] = item.selected
                })
                return o
            },
            getGoodsCountAndAmount(state){
                var o = {
                    count: 0,
                    amount: 0
                }
                state.car.forEach(item => {
                    if(item.selected){
                        o.count += item.count  //把实际勾选的放在数组之中
                        o.amount += item.price * item.count
                    }
                })
                return o
            }
       }
})

// 图片预览
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入主程序
import app from './APP.vue'

// 创造vue实例
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router, //挂载路由和vuex对象到这个实例中
    store
})
