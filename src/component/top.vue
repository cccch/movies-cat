<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">电影列表</a>
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
                target:0
            }
        },
    }


</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {

    }
    .select {
        background-color: #428bca;
    }
    .select a {
        color: #fff;
        text-decoration: none;


    }
    .list-group-item a {
        text-decoration: none;
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    a:hover{
        text-decoration: none;
    }
    #list-group {
        width: 20%;
        float: left;
        margin-top: -20px;
    }
</style>