

// 分发路由
import VueRouter from 'Vue-router'

// 导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


// 创建路由对象
var router = new VueRouter({
    routes:[
        { path: '/', redirect: '/home'}, //这是路由的重定向，设置默认主页的意思
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList }, 
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo'}, //这里需要绑定ID ：
        { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc'},
        { path: '/home/goodscomment/:id', component: GoodsComment, name:'goodscomment'}

    ],
    linkActiveClass: 'mui-active' //这是覆盖默认的路由高亮的类，默认的类叫做 router-link-active
                                 // 这里是指底部tabbar栏的样式的高亮显示
})

// 把路由对象暴露出去
export default router