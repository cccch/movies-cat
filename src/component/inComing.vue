<template>
    <div class="contain-fluid" id="main">
        <div class="con">
            <div class="media" v-for="(value) in moviesObj">
                <div class="media-left">
                    <a href="javascript:">
                        <img class="media-object" :src="value.images.small"width="100px" alt="...">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{value.title}}</h4>
                    <p>主演:<span v-for="v in value.casts">{{v.name}}&nbsp&nbsp</span></p>
                    <p>导演:<span>{{value.directors[0].name}}</span></p>
                    <p>年份:<span>{{value.year}}</span></p>
                    <p>评分:<span>{{value.rating.average}}</span></p>
                    <p>电影类型:<span>{{value.genres[0]}}</span>&nbsp&nbsp<span>{{value.genres[1]}}</span>&nbsp&nbsp<span>{{value.genres[2]}}</span></p>
                </div>
            </div>
        </div>
        <p v-show="false">{{changePage}}</p>
    </div>
</template>

<script type = "text/ecmascript-6">
    let moviesObj = [];
    export default {
        data: function () {
            return {
                moviesObj:moviesObj
            }
        },
        methods:{
            getdata:function(url,start,count){
                this.$http.jsonp(url,{
                    params:{
                        start:start,
                        count:count
                    }
                }).then(function(res){
                    res.data.subjects.forEach(function(v,i){
                        if(moviesObj.length == 5){
                            moviesObj.shift();
                        }
                        moviesObj.push(v);
                    })
                })
            }
        },
        mounted:function(){
            this.getdata('https://api.douban.com/v2/movie/coming_soon',0,5)
        },
        computed:{
            //监听page更新电影列表
            changePage:function(){
                this.getdata('https://api.douban.com/v2/movie/coming_soon',this.page*5-5,5);
                return this.page;
            }
        },
        //接受父组件传入的page
        props:['page']
    }

</script>

<style>
    #main {
        /*height: 700px;*/
        margin-top: -20px;
        padding-left:20%;
    }
    .con {
        /*background-color: pink;*/
        width: 100%;
        height: 100%;
    }
</style>