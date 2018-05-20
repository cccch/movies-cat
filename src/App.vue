<template>
  <div id="app clearfix">
    <Top @getKey="getKey"></Top>
    <transition leave-active-class="bounceOutDown">
      <router-view :page="page" :skey='key' class="animated"></router-view>
    </transition>
    <Footer @change="change"></Footer>

    <div class="search-full" id="search-full">
    <span class="glyphicon glyphicon-repeat"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Top from './component/top.vue'
  import Footer from './component/footer.vue'


  export default {
  data:function(){
    return {
      //接收页码
      page:'',
      //接收搜索关键词
      key:''
    }
  },
  methods:{
    //footer页码传入app.vue
    change:function(data){
      this.page = data;
    },
    getKey:function(key){
      this.key = key;
    }
  },
  components:{
    Top:Top,
    Footer:Footer,
  }

}

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html,body {
    height: 100%;
  }
  @keyframes infinite {
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform:rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .search-full {
    width: 100%;
    height: 1024px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    display: none;
  }
  .search-full span {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    font-size: 100px;
    margin: auto;
    transform-origin: center center;
    animation: infinite 1s linear infinite;
  }
/*清除浮动*/
  .clearfix::after {
    content: '';
    display: block;
    clear:both;
  }
</style>
