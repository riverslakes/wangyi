<template>
    <div>
        <HeaderCom/>
        <BoyFree/>
        <GirlFree/>
        <Footer/>
    </div>
    
</template>

<script>
import BoyFree from "components/boyFree" 
import GirlFree from "components/girlFree" 


export default {
    name:"free",
    components:{
        BoyFree,
        GirlFree
    }
}
</script>

<style>
.list_fl{
  width:100%;
  background-color: #fff;
  padding: .4rem;
   box-sizing: border-box;
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
  color: #e64d2e;
  padding: 0 .2rem;
  border-radius: .2rem;
}
.play_txt .txt_pri{
  font-size: .24rem;
  margin-right:.2rem ;
  padding: 0 .2rem;
  border-radius: .2rem;
}


</style>
