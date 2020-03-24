<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="1000"  indicator-color="white" >
      <van-swipe-item>
        <div class="page1_div">
          <van-image
            class="page1_image"
            src="http://q6o0snpv9.bkt.clouddn.com//20200322001806.png"
            width="140px"
          ></van-image>
          <div class="a4">
            <div class="a2">Palapple</div>
            <div class="a1">A beginning Front End Developer.</div>
            <div class="a3">HTML, CSS, JS,</div>
            <div class="a3">Vue, React, Ant Design Pro,</div>
            <div class="a3">MATLAB, Golang</div>
            <div class="b1">
              <van-button
                color="linear-gradient(to right, #4bb0ff, #6149f6)"
                round
                class="b2"
                @click="go"
              >个人博客</van-button>
              <van-button color="green" round @click="go2" plain>GitHub</van-button>
            </div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="page1_div">
          <div class="animated bounceInDown">
            <div class="c4">教育背景</div>
            <div style="margin-bottom:20px">
              <div class="c1">2017.09 - 2020.07</div>
              <div class="c2">广东工业大学 硕士</div>
              <div class="c3">计算机学院 计算机科学与技术</div>
            </div>
          </div>
          <div style="margin-bottom:20px"  class="animated bounceInRight">
            <div class="c1">主修课程</div>
            <div class="c5">数据挖掘、高级数据库、</div>
            <div class="c5">云计算与大数据技术、高级计算机网络、</div>
            <div class="c5">算法设计与分析、应用概率统计</div>
          </div>
          <div style="margin-bottom:20px"  class="animated bounceInRight">
            <div class="c1">获奖情况</div>
            <div class="c3">发表 SCI 论文一篇</div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="page1_div" >
          <van-steps direction="vertical" :active="0">
          <van-step>
            <div class="animated bounceInRight">
            <h3 >实习公司</h3>
            <p>2016.07 - 2018.09</p>
            <p>负责前端平台的框架升级，从零构建支付平台PC端和Web端开发</p>
            <p>实现前后端分离，使用Antd Pro架构改造</p>
            </div>
          </van-step>
          <van-step>
            <div class="animated bounceInRight">
            <h3 >实习公司</h3>
            <p>2016.07 - 2018.09</p>
            <p>负责前端平台的框架升级，从零构建支付平台PC端和Web端开发</p>
            <p>实现前后端分离，使用Antd Pro架构改造</p>
            </div>
          </van-step>
          <van-step>
            <div class="animated bounceInRight">
            <h3 >实习公司</h3>
            <p>2016.07 - 2018.09</p>
            <p>负责前端平台的框架升级，从零构建支付平台PC端和Web端开发</p>
            <p>实现前后端分离，使用Antd Pro架构改造</p>
            </div>
          </van-step>
        </van-steps>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="page4">
          <div class="d2">专业技能</div>
          <div class="d3">
          <van-progress pivot-text="JavaScript" color="blue" :percentage="90" class="d1" stroke-width='20px' />
          <van-progress pivot-text="HTML5" color="#blue" :percentage="90" class="d1" stroke-width='20px' />
          <van-progress pivot-text="CSS3" color="#blue" :percentage="90" class="d1" stroke-width='20px' />
          <van-progress pivot-text="Vue" color="green" :percentage="80" class="d1" stroke-width='20px' />
          <van-progress pivot-text="JQuery" color="green" :percentage="70" class="d1" stroke-width='20px' />
          <van-progress pivot-text="React" color="yellow" :percentage="50" class="d1" stroke-width='20px'/>
          </div>

        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {
  Swipe,
  SwipeItem,
  Button,
  Image,
  Tag,
  Step,
  Steps,
  Progress
} from "vant";

export default {
  name: "resume",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    [Image.name]: Image,
    [Tag.name]: Tag,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Progress.name]: Progress
  },
  data() {
    return {};
  },
  methods: {
    go() {
      window.location.href = "http://palapple.gitee.io/giteeblog/#/";
    },
    go2() {
      window.location.href = "https://github.com/palapple";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page4{
  height: 550px;
}
.d1 {
  margin-bottom: 10px;
}
.d2{
  height: 120px;
  font-size: 28px;
}
.d3{
  height: 100%;
  margin:4% 4% 4% 4%;
}
.c4 {
  height: 30px;
  font-size: 28px;
  margin-bottom: 20px;
}
.c3 {
  height: 25px;
  font-size: 20px;
}
.c2 {
  height: 25px;
  font-size: 20px;
}
.c5 {
  height: 25px;
  font-size: 17px;
}
.c1 {
  height: 25px;
  font-size: 18px;
}
.b1 {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.b2 {
  margin-right: 20px;
}
.a1 {
  height: 30px;
  font-size: 20px;
  line-height: 20px;
}
.a2 {
  height: 40px;
  font-size: 25px;
  line-height: 30px;
}
.a3 {
  height: 30px;
  font-size: 18px;
  line-height: 25px;
}
.a4 {
  margin-top: -30px;
}
.page1_name {
  color: #fff;
  font-size: 20px;
  line-height: 20px;
}
.page1_image {
  margin-top: 20px;
}
.page1_div {
  /* display: flex;
  justify-content:  center; */
  height: 550px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-image: linear-gradient(
    to right,
    rgb(63, 232, 238),
    rgb(2, 108, 170)
  );
}
.page2_div {
  height: 550px;
}
.my-swipe .van-swipe-item {
  /* color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-image: linear-gradient(
    to right,
    rgb(63, 232, 238),
    rgb(2, 108, 170)
  ); */
}
.page1 {
}
</style>
