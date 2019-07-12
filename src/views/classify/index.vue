<template>
<div>
    <HeaderCom/>
    <div id="box">
    	<h2>丨男生小说</h2>
        <div id="boy">
        <div class="boy_1" @click="hanle(index)" v-for="(item,index) in boy" :key="index"><a style="color: #ee6460;">{{item.title}}</a></div>
        <!-- <div class="boy_1" @click="hanle(index)"><a style="color: #ee6460;">玄幻</a></div>
        <div class="boy_1"><a>悬疑</a></div>
        <div class="boy_1"><a>灵异</a></div>
        <div class="boy_1"><a>历史</a></div>
        <div class="boy_1"><a>军事</a></div>
        <div class="boy_1"><a>科幻</a></div>
        <div class="boy_1"><a>同人</a></div>
        <div class="boy_1"><a>短篇</a></div>
        <div class="boy_1"><a>终结者2游戏</a></div> -->
        
        </div>
    </div>
    <div id="box2">
            	<h2>丨女生小说</h2>
        <div id="girl">
        <div class="girl_1" @click="handleGirl(index)" v-for="(item,index) in girl" :key="index"><a >{{item.title}}</a></div>
      
        
        </div>

        
    </div>
        <div id="box3">
            	<h2>丨图书书库</h2>
        <div id="book">
        <div class="book_1" @click="handleTu(index)" v-for="(item,index) in Tu" :key="index"><a>{{item.name}}</a></div>

        
        </div>

        
    </div>


    <div id="box4">
	<ul>
		<li><a>男生</a></li>
		<li><a>女生</a></li>
		<li><a>出版</a></li>
		<li><a>客服</a></li>
		<li><a>微信</a></li>
	</ul>
</div>
<div id="box5">
	<ul>
		<li><a>客户端</a></li>
		<li><a>帮助</a></li>
		<li><a>反馈</a></li>
		<li><a style="color: #ee6460;">触屏版</a></li>
		<li><a>电脑版</a></li>
	</ul>
</div>
<div id="box6">
	<p>网易版权公司所有©1997-2019</p>
	</div>



    <Top/>
</div>

    
</template>

<script>
import {classifyData} from "api/classify";
import {mapActions} from "vuex";
export default {
	name:"classify",
	mouted(){
		var str = document.querySelectorAll('.book_1');
		str.onclick = function(){
		}
	},
	methods:{
		hanle(index){
			var num = this.boy[index].id
			var gender = this.boy[index].gender
			this.$router.push({path:'./table',
			query:{
				id:num
			}
			}
			);
			
		},
		handleGirl(index){
			var num = this.girl[index].id
			this.$router.push({path:'./tableGirl',
			query:{
				id:num
			}
			}
			);
		},
		handleTu(index){
			var title = this.Tu[index].name
			var num = this.Tu[index].id
			window.scrollTo(0,0)
			this.$router.push({path:'./tableTu',
			query:{
				id:num,
				title:title
			},
		
			}
			);
		}
	},
	data(){
		return {
			boy:[
				{title:"玄幻",
				id:1,
				gender:'female'
				},
				{title:"科幻",
				id:2
				},
				{title:"军事",
				id:3
				},
				{title:"灵异",
				id:4},
				{title:"历史",
				id:11},
				{title:"都市",
				id:7},
				{title:"同人",
				id:10},
				{title:"短篇",
				id:12},
				{title:"终结者游戏",
				id:20000},
			],
			girl:[
				{title:"现言",
				id:8,
				},
				{title:"穿越",
				id:9
				},
				{title:"宫斗",
				id:18
				},
				{title:"古言",
				id:24},
				{title:"灵异",
				id:14},
				{title:"短篇",
				id:16},
				{title:"校园",
				id:22},
				{title:"仙侠",
				id:13},
				{title:"种田",
				id:17},
				{title:"同人",
				id:15},
				{title:"纯爱",
				id:25},
			],
			Tu:[
				{name:"小说",
				id:2000,
				},
				{name:"人文社科",
				id:2300
				},
				{name:"品质生活",
				id:2800
				},
				{name:"两性情感",
				id:2500},
				{name:"成功励志",
				id:2600},
				{name:"经济管理",
				id:2400},
				{name:"文学作品",
				id:2100},
				{name:"自然科学",
				id:2900},
				{name:"文化艺术",
				id:2200},
				{name:"亲子少儿",
				id:2700},
				{name:"计算机",
				id:3000},
				{name:"培训考试",
				id:3100},
				{name:"杂志期刊",
				id:12000},
				{name:"外文外版",
				id:3200},
			]
		}
	}
}
//category
//female
</script>

<style spoced>
/* 男生小说 */
#box{    width:100%;
		 height:100%;
		   }
#box h2{margin:.58rem 0 .28rem .3rem;
		font-weight:900;
		color:#ee6460;

}
#box .boy_1{width:1.7rem;
		   height:.64rem;
		   background:#f5f5f5;
		   line-height:.64rem;
		   text-align:center;
		   border-radius:5px;
		   margin-right: .62rem;
		   margin-bottom: .4rem;
		   
}
#boy{
	display:flex;
	flex-wrap: wrap;
    padding-left: .5rem;
    
}


/* 女生小说 */
#box2{   width:100%;
		 height:100%;
         
		}
#box2 h2{
		font-weight:900;
		color:#ee6460;
        margin:.2rem 0 .28rem .3rem;

}
#box2 .girl_1{width:1.7rem;
		   height:.64rem;
		   background:#f5f5f5;
		   line-height:.64rem;
		   text-align:center;
		   border-radius:5px;
		   margin-right: .62rem;
		   margin-bottom: .4rem;
		   
}
#girl{
	display:flex;
	flex-wrap: wrap;
    padding-left: .5rem;
    
}

/* 图书书库 */
#box3{   width:100%;
		 height:100%;
         
		}
#box3 h2{
		font-weight:900;
		color:#ee6460;
        margin:.2rem 0 .28rem .3rem;

}
#box3 .book_1{width:1.7rem;
		   height:.64rem;
		   background:#f5f5f5;
		   line-height:.64rem;
		   text-align:center;
		   border-radius:5px;
		   margin-right: .62rem;
		   margin-bottom: .4rem;
		   
}
#book{
	display:flex;
	flex-wrap: wrap;
    padding-left: .5rem;
    
}


#box4{width: 100%; 
      box-sizing: border-box;
	  height: .8rem; 
	  background: #f5f5f5; 
	  line-height: .8rem; 
	  padding-left: 1rem;}
#box4 ul{float: left;}
#box4 ul li{float: left; 
		    text-align: center;
			margin-right: .8rem;}
#box4 ul li a{color: #999999;}
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
