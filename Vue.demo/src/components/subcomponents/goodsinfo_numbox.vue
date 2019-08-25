
<template>
    <div>
    <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
    mounted(){
        mui(".mui-numbox").numbox();
        console.log(this.max);
    },
    methods:{
        countChanged(){
            this.$emit("getCount", parseInt(this.$refs.numbox.values));
        }
    },
    props:["max"],
    // 把新的值传给最大值
    watch:{
        max:function(newVal, oldVal){
            mui(".mui-numbox").numbox().setOption("max", newVal);
        }
    }
};

</script>

<style lang="scss">
    
</style>