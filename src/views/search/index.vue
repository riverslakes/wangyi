<template>
  <div class="search">
    <div class="search_top">
        <div class="search_fh" @click="back"><</div>
        <div class="search_ipt">
          <input type="text" class="txt" v-model="inputVal">
          <button class="iconfont icon-fdj"></button>
        </div>
        <div class="search_sy" @click="backHome()">首页</div>
    </div>
    <div class="search_tj">
      <div class="search_djdzs">大家都在搜</div>
        <ul class="list_ss">
          <span>神级至尊</span>
          <span>斗破苍穹</span>
          <span>斗罗大陆</span>
          <span>无限恐怖</span>
          <span>赌神</span>
          <span>校花的贴身高手</span>
          <span>龟蒙大道</span>
          <span>大萨达多单价</span>
          <span>你你就是撒啊</span>
        </ul>
    </div>
    <div class="ls_list">
      <div class="ls_ss">
        历史搜索记录
      </div>
      <div class="ls_jl">
      </div>
    </div>
    <div class="list_val">
        <li v-for="(item,index) in arrVal" :key="index" @click="goList(index)">
          <div class="img"><img :src="item.iconUrl" alt=""></div>
          <div class="play">
            <p class="play_title">{{item.title}}</p>
            <p class="play_zz">{{item.author}}</p>
            <p class="play_jj">{{item.description}}</p>
          </div>
        </li>
    </div>
  </div>
</template>

<script>
import {search} from "api/rank"
export default {
  name:'search',
  data(){
    return{
      inputVal:"",
      arrVal:[],
      newVal:''
    }
  },
  watch:{
    async inputVal(newVal){
        let data = await search(newVal);
        if(data){
        this.arrVal=data.data.books;
        this.arrVal.length=5;
        }
        if(!newVal){
          this.arrVal=[];
        }
      }
  },
  methods:{
        back(){
            this.$router.go(-1);
        },
        backHome(){
            this.$router.push('./')
        },
        goList(index){
       window.scrollTo(0,0)
 
        this.name = this.arrVal[index].title
         this.$router.push({
         path:"/list",
         query:{key:this.name}
         }
        ) 
        }
    },
  
}
</script>

<style scoped>
.search_top{
  width: 100%;
  height: .88rem;
  background: #c33;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.search_fh{
  font-size: .6rem;
  color: #fff;
}
.search_ipt{
  height: .54rem;
}
.search_ipt .txt{
  width: 4.2rem;
  height: .54rem;
  border-radius: .3rem 0 0 .3rem;
  border: none;
  float: left;
  padding-left:.3rem ;
  font-size: .3rem;
}
.search_sy{
  font-size: .3rem;
  color: #fff;
}
.iconfont{
  width: 1rem;
  height: .54rem;
   border: none;
   border-radius: 0 .3rem .3rem 0;
   float: left;
   font-size: .3rem;
}
/* .search_tj{

} */
.search_djdzs{
  width: 100%;
  height: .8rem;
  background: #ccc;
  font-size: .3rem;
  color: #fff;
  text-align: center;
  line-height: .8rem;
}
.list_ss{
  width: 100%;
  height: 5rem;
  box-sizing: border-box;
  padding: .3rem;
}
.list_ss span{
  height: .3rem;
  padding: .2rem;
  line-height: .3rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  margin: 0 .4rem .3rem 0;
  float: left;
}

.ls_ss{
  width: 100%;
  height: .8rem;
  background: #ccc;
  font-size: .3rem;
  text-align: center;
  color: #fff;
  line-height: .8rem;
}
.ls_list span{
  padding:.2rem;
  border: 1px solid #ccc;
  border-radius: .2rem;
  font-size: .3rem;
}
.ls_jl{
  width: 100%;
  height: 5rem;
  box-sizing: border-box;
  padding: .3rem;
}
.list_val{
  width: 100%;
  position: fixed;
  top: 1rem;
  left: 0;
  background: #ffff;
}
.list_val li{
  width: 100%;
  height: 1.8rem;
  box-sizing: border-box;
  padding: .2rem;
  border: 1px solid #ccc;
  margin-bottom: .1rem;
}
.img {
  width: 1.1rem;
  height: 1.4rem;
  float: left;
}
.img img{
  width: 100%;
  height: 100%;
}
.play{
float: left;
width: 4rem;
height: 1.2rem;
margin-left: .3rem;
}
.play_title{
 
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

}
.play_zz{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

}
.play_jj{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

}

</style>
