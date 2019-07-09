<template>
<div>
    <HeaderCom/>
    <div id="box">
    	<h2>丨男生小说</h2>
        <div id="boy">
        <div class="boy_1"><a style="color: #ee6460;">都市</a></div>
        <div class="boy_1"><a style="color: #ee6460;">玄幻</a></div>
        <div class="boy_1"><a>悬疑</a></div>
        <div class="boy_1"><a>灵异</a></div>
        <div class="boy_1"><a>历史</a></div>
        <div class="boy_1"><a>军事</a></div>
        <div class="boy_1"><a>科幻</a></div>
        <div class="boy_1"><a>同人</a></div>
        <div class="boy_1"><a>短篇</a></div>
        <div class="boy_1"><a>终结者2游戏</a></div>
        
        </div>
    </div>
    <div id="box2">
            	<h2>丨女生小说</h2>
        <div id="girl">
        <div class="girl_1"><a style="color: #ee6460;">现言</a></div>
        <div class="girl_1"><a style="color: #ee6460;">穿越</a></div>
        <div class="girl_1"><a>宫斗</a></div>
        <div class="girl_1"><a>古言</a></div>
        <div class="girl_1"><a>灵异</a></div>
        <div class="girl_1"><a>短篇</a></div>
        <div class="girl_1"><a>校园</a></div>
        <div class="girl_1"><a>仙侠</a></div>
        <div class="girl_1"><a>种田</a></div>
        <div class="girl_1"><a>同人</a></div>
        <div class="girl_1"><a>纯爱</a></div>
        
        </div>

        
    </div>
        <div id="box3">
            	<h2>丨图书书库</h2>
        <div id="book">
        <div class="book_1"><a style="color: #ee6460;">小说作品</a></div>
        <div class="book_1"><a style="color: #ee6460;">人文社科</a></div>
        <div class="book_1"><a>品质生活</a></div>
        <div class="book_1"><a>两性情感</a></div>
        <div class="book_1"><a>成功励志</a></div>
        <div class="book_1"><a>经济管理</a></div>
        <div class="book_1"><a>文学作品</a></div>
        <div class="book_1"><a>文化艺术</a></div>
        <div class="book_1"><a>自然科学</a></div>
        <div class="book_1"><a>亲子少儿</a></div>
        <div class="book_1"><a>计算机</a></div>
        <div class="book_1"><a>培训考试</a></div>
        <div class="book_1"><a>杂志期刊</a></div>
        <div class="book_1"><a>外文外版</a></div>

        
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



    
</div>

    
</template>

<script>
export default {
    name:"classify"
}
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
