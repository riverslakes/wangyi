<template>
<div>
     <HeaderCom/>
     <BoyTuiJian/>
   <BoyBody/>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://easyreadfs.nosdn.127.net/fe_cms/file.cbacb57d248c28170d7f10139fac4b26.jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://easyreadfs.nosdn.127.net/fe_cms/file.cbacb57d248c28170d7f10139fac4b26.jpg" alt=""></div>
        </div>
    </div>
         <BoyCity/>
        <BoyLoveLook/>
       <BoyPerfect/>
        <BoyBoom/>
      <Top/>
    <Footer/>
</div>
    
</template>

<script>
import BoyBody from "components/boyBody"
import BoyLoveLook from "components/boyLoveLook"
import BoyBoom from "components/boyBoom"
import BoyTuiJian from "components/boytuijian"
import BoyCity from "components/boyCity"
import BoyPerfect from "components/boyPerfect" 
export default {
    name:"boy",
    components:{
      BoyBody,
      BoyLoveLook,
      BoyBoom,
      BoyTuiJian,
      BoyCity,
      BoyPerfect,
   
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
.list_wn{
  width: 6.68rem;
  background-color: #fff;
  margin: 0.2rem auto;
   padding-bottom: 0.2rem;
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
  margin-bottom: .2rem;
}
.gd_list strong{
  font-size: .4rem;
  height: .6rem;
  float: left;
  line-height: .6rem;
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
}
.recommend_img{
  height: 2.62rem;
}
.recommend_img img{
  width: 100%;
  height: 100%;
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



.list_boy{
  width: 100%;
  background-color: #fff;
  padding: 0.4rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  box-sizing: border-box;
}
.list_fl{
  width:6.68rem;
  background-color: #fff;
  margin:.2rem auto;
  padding-bottom: 0.14rem;
  border-bottom: 1px solid #ccc;
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
.list_play{
  width: 100%;
  height: 2.3rem;
  margin-bottom: .4rem;
}
.play_img{
  float: left;
  width: 1.64rem;
  height: 2.3rem;
  position: relative;
   box-shadow: 0 2px 9px rgba(0,0,0,.08)
}
.play_xm{
  width: .5rem;
  height:.3rem;
  background: #e64d2e;
  color: #fff;
  font-size: .2rem;
  transform: scale(0.9);
  position: absolute;
  top: 0;
  left: 0;
}
.play_img img{
  width: 100%;
  height: 100%;
}
.play_txt{
  float: left;
  width: 4.76rem;
  height: 2.3rem;
  margin-left: .2rem;
  color: #999;
}
.play_txt h3{
  font-size: .3rem;
  margin-bottom:.14rem;
  color: #222;
}
.play_txt .txt_jj{
  height: .72rem;
   display: -webkit-box;
 -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: .37rem;
  margin: .2rem 0;
  color: #999;
  font-size: .24rem;
}
.play_txt .txt_mf{
  font-size: .24rem;
  margin-right:.2rem ;
  background: #ccc;
  padding: 0 .2rem;
  border-radius: .2rem;
}

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

</style>
