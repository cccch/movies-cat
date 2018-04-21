<template>
  <div id="app">
    <Top></Top>
    <transition leave-active-class="bounceOutRight">
      <router-view :page="page" class="animated"></router-view>
    </transition>
    <Footer @change="change"></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Top from './component/top.vue'
  import Footer from './component/footer.vue'


  export default {
  data:function(){
    return {
      page:'',
    }
  },
  methods:{
    //footer页码传入app.vue
    change:function(data){
      this.page = data
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
</style>
