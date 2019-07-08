<template>
    <div>
        <div id="header">
            <div class="g_login" >
                <img src="https://easyreadfs.nosdn.127.net/web/trunk/1516764621520/logo.png" alt="">
                <span>网易云阅读</span>
            </div>
            <div class="h_login">
                <a href="#" class="iconfont icon-fdj"></a>
                <a href="#" class="iconfont icon-wd"></a>
            </div>
        </div>
        <div class="header_q">
             <ul>
                 <router-link tag="li" v-for="(item,index) in tabBar" :key="index" :to="item.path" >
                     <span>{{item.title}}</span>
                 </router-link>
            </ul>
        </div>
        <div id="banner" >
            <img src="https://easyreadfs.nosdn.127.net/web/trunk/1539075717247/banner_down.png">
        </div>
    </div>
</template>

<script>
export default {
    name:"headerCom",
    data(){
        return{
            tabBar:[
                {
                    title:"男频",
                    path:"/boy",
                   
                },
                {
                    title:"女频",
                    path:"/girl",
                  
                },
                {
                    title:"出版",
                    path:"/publish",
                  
                },
                {
                    title:"分类",
                    path:"/classify",
                   
                },
                {
                    title:"免费",
                    path:"/free",
                    activeIndex:4,
                },
                {
                    title:"排行",
                    path:"/ranking",
                  
                }
            ],
            activeIndex:0,
        }
    }
}
</script>

<style>
li{
    list-style: none;
}
#header{
	height: .88rem;
	display: flex;
	align-items: center;
    justify-content:center;
    justify-content:space-between;
	box-sizing: border-box;
	flex-shrink: 0;
	position: absolute;
    width: 90%;
    margin-left: .4rem;
}
.g_login span{
    font-size:.32rem;
    font-weight: 900; 
    margin-left:0.1rem;
}
.g_login img{
    width: .28ewm;
    height: .28rem;
}
.g_login span{
    color: #000000;
}
.h_login a{
    font-size: .36rem;
    color: #2b2b2b;
}

.header_q{
    height: .96rem;
    width: 100%;
    position: relative;
    top: .8rem;
}
.header_q ul li{
    float: left;
    margin-left: .44rem;
    line-height: .96rem;
}
.header_q .router-link-exact-active{
    font-weight: 900;
    font-size: .32rem;
}
#banner img{
    width: 80%;
    height: 1.2rem;
    position: relative;
    top: .8rem;
    margin-left: .6rem
}
</style>
