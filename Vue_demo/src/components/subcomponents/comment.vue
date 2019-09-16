<template>
<!-- 把评论做成一个全局的组件，因为每个页面都要使用 -->
    <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入你要发表的内容" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <!-- 为了防止从服务器回来的数据是undefided，进行相关的处理 -->
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，什么都没说': item.content }}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    data(){
        return {
            pageIndex: 1,
            comments: [],
            msg: ""
        };
    },
    created(){
        this.getCommets();
    },
    methods:{
        getCommets(){
            this.$http.get("api/getcomments/"+this.id+"?pageIndex="+this.pageIndex).then(result=>{
                if(result.body.state === 0){
                    this.comments = this.comments.concat(result.body.message)
                }else{
                    Toast("获取失败了....")
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getCommets();
        },
        postComment(){
            if(this.msg.trim().length === 0){
                Toast("发表的评论不能为空");
            }else{
                this.$http.post("api/postcomment/" + this.$route.params.id, {content: this.msg.trim()})
                .then(function(result){
                    if(result.body.state === 0){
                        var cmt = {
                            user_name: "匿名用户",
                            add_time: Date.now(),
                            content: this.msg.trim()
                        }
                        this.comments.unshift(cmt);
                        this.msg = "";
                    }
                })
            }
        }
    },
    props:["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
