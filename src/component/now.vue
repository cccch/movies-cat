<template>
    <div class="contain-fluid" id="now">
        <div class="con">
            <div class="media" v-for="(value) in moviesObj">
                <div class="media-left">
                    <a :href="value.alt" target="_blank">
                        <img class="media-object" :src="value.images.small"width="120px" height="166px" alt="...">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{value.title}}</h4>
                    <p>主演:<span v-for="v in value.casts">{{v.name}}&nbsp&nbsp</span></p>
                    <p>导演:<span v-for="v in value.directors">{{v.name}}</span></p>
                    <p>年份:<span>{{value.year}}</span></p>
                    <p>评分:<span>{{value.rating.average}}</span></p>
                    <p>电影类型:<span v-for="v in value.genres">{{v}}&nbsp&nbsp</span></p>
                    <span class="media-body-right"><a :href="value.alt" target="_blank">点击这里了解详情</a></span>
                </div>
            </div>
        </div>
        <!--在页面上挂载computed，以便于检测变化-->
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
                }).then(function(res) {
                    this.moviesObj = res.data.subjects;
                    let searchFull = document.getElementById('search-full');
                    searchFull.style.display = 'none';
                })
            }
        },
        mounted:function(){
            this.getdata('https://api.douban.com/v2/movie/in_theaters',0,5);

        },
        computed:{
            //监听page更新电影列表
            changePage:function(){
                let searchFull = document.getElementById('search-full');
//                console.log(searchFull.style['display']);
                this.getdata('https://api.douban.com/v2/movie/in_theaters',this.page*5-5,5);
                if(searchFull){
                    searchFull.style.display = 'block';
                }
//                console.log(searchFull.style['display']);

                return this.page;
            }
        },
        //接受父组件传入的page
        props:['page']
    }

</script>

<style>
    #now {
        padding-left:20%;
    }
    .con {
        width: 100%;
        height: 100%;
    }
    .media {
        position: relative;
    }
    .media-body-right {
        position: absolute;
        bottom: 10px;
        left: 400px;
    }
</style>