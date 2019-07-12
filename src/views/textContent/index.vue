<template>
    <div class="container">
        <div class="header">
            <div class="h_back" @click="back()"><</div>
            <ul class="h_nav">
                <li>客户端</li>
                <li>充值</li>
                <li>加入书架</li>
                <li @click="backHome()">首页</li>
            </ul>
        </div>
        <div class="main">
            <!-- <h2>第一卷 &nbsp;这是小说{{data.title}}的内容</h2>
            <p>{{data.textMsg}}</p> -->
        </div>
        <ul class="footer">
            <li>目录</li>
            <li>最近阅读</li>
            <li>设置</li>
            <li>夜间模式</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"textContent",
    methods:{
        back(){
            this.$router.go(-1);
        },
        backHome(){
            this.$router.push('./')
        }
    },
    async created(){
        let data = this.$route.query.msg;
        this.textMsg = data.description;
        this.title = data.title;
        console.log(data)
    },
    data(){
        return {
            textMsg:'',
            title:''
        }
    }
}
</script>

<style scoped>
.container{
    height: 10rem;
    width: 100%;
}
.header{
    position: fixed;
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    z-index: 2;
}
.main{
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: #eee;
    font-size: 0.24rem;
}
.main p{
    font-size: 0.2rem;
} 
.h_back{
    /* float: left; */
    margin-left: .2rem;
    color: #ccc;
    font-size: 0.26rem;
}
.h_nav{
    width: 6rem;
    /* float: right; */
    display: flex;
    justify-content: space-around;
    align-content: center;
}
.footer{
     height: 1rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
     display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
    background: #fff;
}
</style>
