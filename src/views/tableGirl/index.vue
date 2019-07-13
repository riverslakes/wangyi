<template>
  <div>
    <!--	头部    -->
    <div class="header">
      <div class="return">
        <a @click="backClassify()"><</a>
      </div>
      <div class="city">
        <span>{{dataTile}}</span>
      </div>
      <div class="iconfont icon-fdj" @click="Search()"></div>
      <div class="index">
        <a @click="backHome()">首页</a>
      </div>
    </div>

	<el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%,background:#fff">
    
  </el-table>

  
    <!--选项-->
    <div id="option">
      <div id="time">
        <span>时间：</span>
        <div class="hot">最热</div>
        <div class="newest">最新</div>
      </div>

      <div id="plan">
        <span>进度：</span>
        <div class="all">全部</div>
        <div class="serialize">连载中</div>
        <div class="over">已完结</div>
      </div>

      <div id="cost">
        <span>价格：</span>
        <div class="every">全部</div>
        <div class="free">免费</div>
        <div class="pay">付费</div>
      </div>
      <div class="main" v-for="(item,index) in tableData" :key="index" @click="handleList(index)">
        <div class="img">
          <img :src="item.iconUrl" />
        </div>
        <div class="introduce">
          <span>{{item.title}}</span>
          <p>作者：{{item.author}}</p>
          <p>{{item.showTotalCount}}字丨已完结</p>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
	<Top/>
  </div>
</template>

<script>
import {classifyGirlData} from 'api/classify';
import { Loading } from 'element-ui';

export default {
	name:"tableGirl",
	async activated(){	
		let id = this.$route.query.id
		let data = await classifyGirlData(id)
		this.tableData = data.data.books;
		this.dataTile = this.tableData[0].category;
	},
	data(){
		return {
			tableData:[],
			dataTile:'',
			index:''
		}
	},
	methods:{
		backClassify(){
			this.$router.go(-1);
		}, backHome(){
		this.$router.push('./')
		},
		 Search(){
            this.$router.push("./search")
		},
		 handleList(index){
			window.scrollTo(0,0)
			this.name = this.tableData[index].title
			this.$router.push({
				path:"/list",
				query:{key:this.name}
				}
			) 
		},
	},
	  updated(){
    let loadingInstance = Loading.service({ fullscreen: true });
    var timer = setTimeout(function(){
     
  
  loadingInstance.close();

    },1000)
     
  }
	
}
</script>

<style>
.header{width:100%; 
		height:.9rem; 
		background:#e64d2e; 
		display:flex;
		line-height:.9rem;
		color:#FFF;}

.header .return{	float: left;
	margin-left:0.2rem;}

.header .return a{font-size:.6rem;}

.header .city{
	width: 100%;
	text-align: center;
}

.header .city span{ font-size:.36rem;}

.header .icon-fdj:{float: right;
margin-right: 0.2rem}
.header .icon-fdj:before{font-size:.32rem;
}

.header .index{
	width: 0.8rem;
	float:right;
	margin-left: 0.2rem;
	margin-right:.2rem;}

.header .index  a{font-size:.28rem;}

#option{width:100%; 
		height:2.24rem; 
		background:#ebe8e6;
		border-bottom:1px solid #d1cfcd;}
#time{width:100%; 
	  height:.72rem;
	  display:flex;}
#time span{margin-top:.35rem; 
		   margin-left:.3rem;}
#time .hot{width:.76rem; 
	  	   height:.42rem;
		   line-height:.42rem; 
		   background:#bab6b3; 
		   color:#FFF; 
		   border-radius:5px; 
		   text-align:center;
		   margin-right:.16rem;
		   margin-top:.3rem;}
#time .newest{width:.76rem; 
	  	   height:.42rem;
		   line-height:.42rem; 
		   background:#bab6b3; 
		   color:#FFF; 
		   border-radius:5px; 
		   text-align:center;
		   margin-top:.3rem;}

#plan{width:100%; 
	  height:.82rem;
	  display:flex;
	  line-height:.82rem;}
#plan span{margin-left:.3rem;}
#plan .all{width:.76rem; 
	  	   height:.42rem;
		   line-height:.42rem; 
		   background:#bab6b3; 
		   color:#FFF; 
		   border-radius:5px; 
		   text-align:center;
		   margin-right:.16rem;
		   margin-top:.2rem;}
#plan .serialize{width:1.04rem; 
	  	   		 height:.42rem;
		   		 line-height:.42rem; 
		   		 background:#bab6b3; 
		   		 color:#FFF; 
		   		 border-radius:5px; 
		   		 text-align:center;
		   		 margin-right:.16rem;
		   		 margin-top:.2rem;}

#plan .over{     width:1.04rem; 
	  	   		 height:.42rem;
		   		 line-height:.42rem; 
		   		 background:#bab6b3; 
		   		 color:#FFF; 
		   		 border-radius:5px; 
		   		 text-align:center;
		   		 margin-right:.16rem;
		   		 margin-top:.2rem;}

#cost{width:100%; 
	  height:.7rem;
	  display:flex;}
#cost span{margin-top:.03rem; 
		   margin-left:.3rem;}
#cost .every{width:.76rem; 
	  	   height:.42rem;
		   line-height:.42rem; 
		   background:#bab6b3; 
		   color:#FFF; 
		   border-radius:5px; 
		   text-align:center;
		   margin-right:.16rem;}
#cost .free{width:.76rem; 
	  	   height:.42rem;
		   line-height:.42rem; 
		   background:#bab6b3; 
		   color:#FFF; 
		   border-radius:5px; 
		   text-align:center;
		   margin-right:.16rem;}
#cost .pay{width:.76rem; 
	  	   height:.42rem;
		   line-height:.42rem; 
		   background:#bab6b3; 
		   color:#FFF; 
		   border-radius:5px; 
		   text-align:center;
		   margin-right:.16rem;}



.main{width:100%; 
	  height:2.36rem; 
	  display:flex;
	  border-bottom:1px solid #d1cfcd;
	  background:#faf7f5;}
	  
.main .img{ width:1.28rem; 
			height:1.76rem; 
			margin:.3rem 0 0 .3rem;}
			
.main .img img{ width:1.28rem; 
				height:1.76rem;}
				
.main .introduce{margin:.26rem 0 0 .2rem;}

.main .introduce span{font-size:.28rem; font-weight:900;}

.main .introduce p{color:#888888; 
				   margin-top:.06rem;
				      display: -webkit-box;
 -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
				   


#box5{width: 100%;
      box-sizing: border-box;
	  height: .62rem; 
	  background: #f5f5f5; 
	  padding-left: 1.4rem;}
#box5 ul{float: left;}
#box5 ul li{float: left; 
		    text-align: center;
			margin-right: .42rem;}
#box5 ul  a{color: #999999;}
#box6{width: 100%; 
	  height: .78rem; 
	  background: #f5f5f5;
	  }
#box6 p{text-align: center;}


</style>
