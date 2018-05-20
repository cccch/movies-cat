<template>
    <div>
        <nav aria-label="Page navigation" id="page">
            <ul class="pagination">
                <li>
                    <a href="#" aria-label="Previous" @click.prevent="minus">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li @click="change"><a href="#" v-for="v in range" @click.prevent="nowIndex=v" class="disabled">{{v}}</a></li>

                <li>
                    <a href="#" aria-label="Next" @click.prevent="add">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script type = "text/ecmascript-6">
    export default {
        data: function () {
            return {
                nowIndex:1,
                range:[1,2,3,4,5]
            }
        },

        methods:{
            //子组件向父组件传递数据
            change:function(){
                this.$emit('change',this.nowIndex)

            },
            //页码增加
            add:function(){
                let first;
                for(var i=0;i<this.range.length;i++){
                    first = this.range[0];
                    this.range.push(first+5);
                    this.range.shift();
                }
            },
            //页码减少
            minus:function(){
                let first
                for(var i=0;i<this.range.length;i++){
                    first = this.range[0];
                    if(first == 1){
                        return false
                    }
                    this.range.push(first-5);
                    this.range.shift();
                }
            }
        }
    }

</script>

<style>
    #page{
        padding-left: 20%;
        text-align: center;
    }
    .pagination  li a{
        display: inline-block;
    }
    .pagination  li a:hover{
        display: inline-block;
        background-color: #eee;
        appearance: none;
    }
</style>