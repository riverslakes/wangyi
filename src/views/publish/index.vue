<template>
    <div>
        <HeaderCom/>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://easyreadfs.nosdn.127.net/fe_cms/file.9f0fb77c5e5acd7a8840980e2d630b9a.png" alt=""></div>
                <div class="swiper-slide"><img src="https://easyreadfs.nosdn.127.net/fe_cms/file.0c53285725627f6b7741d2c188899cf1.jpg" alt=""></div>
            </div>
        </div>
      
        <PublishNow/>

        <PublishNew/>

        <PublishRank/>
        <Top/>
        <Footer/>
    </div>
    
</template>

<script>
import PublishNow from "components/publishNow"
import PublishNew from "components/publishNew"
import PublishRank from "components/publishRank"

export default {
    name:"publish",
    components:{
        PublishNow,
        PublishNew,
        PublishRank
    },
    mounted(){
          var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        autoplayDisableOnInteraction: false
    })
    }
}
</script>

<style>
/*轮播图 start*/
.swiper-container {
    width: 6.68rem;
    height: 2.2rem;
    margin: 0.2rem auto;
}
.swiper-container img{
    width: 6.68rem;
    height: 2.2rem;
    border-radius: 4px;
} 
/*轮播图 end*/

body{
  overflow: auto;
}
.list_wn{
  width: 6.68rem;
  /* height: 9.5rem; */
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  margin: auto;
  padding-bottom: 0.4rem;
  margin-top: 0.4rem;
}
.list_wn ul{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.gd_list{
  width: 100%;
  height: .6rem;
  margin-bottom: .3rem;
}
.gd_list strong{
  font-size: .4rem;
  height: .6rem;
  float: left;
  line-height: .6rem;
  font-weight: 900;
}
.gd_list span{
  float: right;
  width: 1.2rem;
  height: .6rem;
  border: 1px solid #ccc;
  border-radius: .3rem;
  text-align: center;
  line-height: .6rem;
  display: block;
}
.recommend{
  width: 28%;
  margin-bottom: 0.2rem;
}
.recommend img{
  width: 100%;
}
.recommend h4{
  display: -webkit-box;
 -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin:.12rem 0;
  font-size: .3rem;
  line-height: .4rem;
  height: .76rem;
}
.recommend p{
  display: -webkit-box;
 -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #888;
}
</style>
