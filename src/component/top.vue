<template>
    <div id="top">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">电影列表</a>
                </div>
                <div class="navbar-search">
                    <div class="navbar-search-inp"><input type = "text" name = "search" v-model="key" @keydown.enter="postKey"/></div>
                    <router-link to="/search" ><button  @click="postKey" class="navbar-search-ico"><span class="glyphicon glyphicon-search" ></span></button></router-link>
                </div>
            </div>
        </nav>
            <div class="list-group" id="list-group">
                <ul>
                    <router-link :to="'/'+index" v-for="(value,index) in list"><li :class="{select:target==index?true:false}" class="list-group-item"  @click="target = index">{{value}}</li></router-link>
                </ul>
            </div>
    </div>
</template>

<script type = "text/ecmascript-6">
    export default {
        data: function () {
            return {
                list:{
                    now:'正在热映',
                    top250:'Top250',
                    inComing:'即将上映',
                },
                target:0,
                //搜索关键词
                key:''
            }
        },
        methods:{
            postKey:function(){
                this.$emit('getKey',this.key);



            }
        }
    }


</script>

<style>

    #top .navbar {
        margin-bottom: 15px;
    }
    .select {
        background-color: #428bca;
        color: #fff;
    }
    .list-group-item {
        text-decoration: none;
        display: inline-block;
        width: 100%;
        height: 100%;
        font: 400 17px/28px 'microsoft yahei';
    }
    .list-group-item a:hover{
        /*text-decoration: none;*/
    }
    .navbar-search {
        height: 30px;
        width: 300px;
        /*background-color: pink;*/
        position: absolute;
        right: 80px;
    }
    .navbar-search-inp {

    }
    .navbar-search-ico {
        float: left;
        position: absolute;
        left: 210px;
        top: 8px;
        border-radius: 30%;
        outline: none;
    }
    .navbar-search-ico span {
        font-size: 24px;
    }
    .navbar-search-inp input {
        width: 200px;
        height: 30px;
        outline: none;
        appearance: none;
        background-color: #eee;
        margin-top: 10px;
    }
    #list-group {
        width: 20%;
        float: left;
        /*margin-top: 10px;*/
    }
    .list-group ul li {
        height: 50px;
    }
</style>