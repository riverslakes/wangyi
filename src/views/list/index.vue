<template>
  <div>
    <!--	头部    -->
    <div class="header">
      <div class="return">
        <a v-on:click="back()">&lt;</a>
      </div>
      <div class="book">
        <span>书籍详情</span>
      </div>
      <div class="iconfont icon-fdj" @click="Search()"></div>
      <div class="index">
        <a @click="backHome()">首页</a>
      </div>
    </div>

<el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    
  </el-table>

  
    <!--主体内容-->
    <div class="main">
      <div class="img">
        <img :src="listArr[0].coverImage" />
      </div>
      <div class="introduce">
        <span>{{listArr[0].title}}</span>
        <p>作者：{{listArr[0].author}}</p>
        <p>分类：{{listArr[0].category}}丨已完结</p>
        <p>字数：{{listArr[0].showTotalCount}}</p>
        <p>点击：{{listArr[0].showClickCount}}</p>
        <p>授权方：北京易天新动网络科技有限公司</p>
      </div>
     </div>


    <div class="border">
        <div class="read">
          <a @click="goRead()">立即阅读</a>
        </div>
        <div class="txt">
          <a>下载整本</a>
        </div>
    </div>

    <div class="bookrack">
      <div class="put">
          <a>放入书架</a>
      </div>
    </div>

      <!--内容简介-->
    <div class="testimonials">
      <div class="new">最新</div>
      <div class="end">
        <a>第一千六百七十一章&nbsp;完本感言</a>
        <br />
        <p>2016-09-24更新</p>
        <div></div>
      </div>
    </div>


    <div class="cont">
      <div class="nr">
          <span>内容简介</span>
      </div>
      <div class="wz" v-html="listArr[0].description">

      </div>
    </div>

      <!--目录-->
    <div class="catalog">
      <div class="ml">
        <span>目录</span>
        <p>（共1674章）</p>
        <a>倒序↑</a>
      </div>

      <div class="catalog2">
        <a style="margin-left:.32rem;">第一卷&nbsp;千万富翁</a>
        <br />
        <a style="margin-left:.8rem;">第一章&nbsp;落魄大少被人欺</a>
        <br />
        <a style="margin-left:.8rem;">第一卷&nbsp;黄金指</a>
        <br />
        <a style="margin-left:.8rem;">第一卷&nbsp;苏联红星勋章</a>
        <br />
        <a style="margin-left:.8rem;">第一卷&nbsp;赌局</a>
         <br />
      </div>

      <div class="catalog3">
        <div class="put2">
          <a>更多目录></a>
        </div>
      </div>
    </div>

      <!--评论-->
    <div class="comment">
      <div class="pl">
        <span>精彩评论</span>
        <p>（135）</p>
        <a>写评论</a>
      </div>
      <div class="tx">
        <div class="img2"></div>
        <a>司徒文书</a>
        <p>3月29日&nbsp;</p>
      </div>

      <div class="cp">
        <p>
            看到300多章根本看不下去了，反复介绍古玩，感觉
          <br />就是骗章，骗钱。
        </p>
      </div>

      <div class="more">
        <div class="put3">
          <a>更多评论></a>
        </div>
      </div>
    </div>

      <!--您可能喜欢-->
    <div class="love">
      <span>您可能还喜欢</span>
    </div>

    <div class="stack">
      <div class="book01">
        <img src="https://easyreadfs.nosdn.127.net/GzP1lAOtpygTepMcKB9vYA==/8796093022589657615" />
        <span>下班别走</span>
        <p>菜大鸟</p>
      </div>

      <div class="book01">
        <img src="https://easyreadfs.nosdn.127.net/8M1Hsbcc5n0X-y45wYFRcA==/46179488845643" />
        <span>海底两万里</span>
        <p>儒勒·凡...</p>
      </div>

      <div class="book01">
        <img src="https://easyreadfs.nosdn.127.net/oIkCMDAMxIQobbdIUr4Iuw==/8796093023295725854" />
        <span>雪中悍刀行</span>
        <p>烽火戏诸侯</p>
      </div>
    </div>
    <!--尾部-->
    <div class="box5">
      <ul>
        <li>
          <a>客户端</a>
        </li>
        <li>
          <a>帮助</a>
        </li>
        <li>
          <a>反馈</a>
        </li>
        <li>
          <a style="color: #ee6460;">触屏版</a>
        </li>
        <li>
          <a>电脑版</a>
        </li>
      </ul>
    </div>
    <div class="box6">
      <p>网易版权公司所有©1997-2019</p>
    </div>
    <Top/>
  </div>
</template>

<script>
import {listData} from "api/list";
import { Loading } from 'element-ui';
export default {
  name:"classify",
  async activated(){
  this.listArr = this.$route.query.key;
  let data = await listData(this.listArr);
  this.dataArr = data.data.books
  this.dataArr.length = 1
  this.listArr = this.dataArr


  },
  methods:{

    back(){
      this.$router.go(-1);
    },
    backHome(){
      this.$router.push('./')
    },
    goRead(){
      this.$router.push({
        path:'./textContent',
        query:{key:this.listArr}
        })

    },
  Search(){
              this.$router.push("./search")
          }
  },
  data(){
    return {
      num:2,
      listArr:[],
      dataArr:[]
 
    }
  },
  updated(){
    let loadingInstance = Loading.service({ fullscreen: true });
    var timer = setTimeout(function(){
     
  
  loadingInstance.close();

    },1000)
     
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.9rem;
  background: #e64d2e;
  display: flex;
  line-height: 0.9rem;
  color: #fff;
}

.header .return {
  float: left;
	margin-left:0.2rem;
}

.header .return a {
  font-size: 0.6rem;
}

.header .book {
 	width: 100%;
	text-align: center;
}

.header .book span {
  font-size: 0.36rem;
}

.header .icon-fdj:before {
  font-size: 0.32rem;
}

.header .index {
 width: 0.8rem;
	float:right;
	margin-left: 0.2rem;
	margin-right:.2rem;
}

.header .index a {
  font-size: 0.28rem;
}

.main {
  width: 100%;
  height: 2.92rem;
  display: flex;
}

.main .img {
  width: 1.86rem;
  height: 2.6rem;
  margin: 0.3rem 0 0 0.3rem;
}

.main .img img {
  width: 1.86rem;
  height: 2.6rem;
}

.main .introduce {
  margin: 0.3rem 0 0 0.2rem;
}

.main .introduce span {
  font-size: 0.32rem;
  font-weight: 900;
}

.main .introduce p {
  color: #888888;
  margin-top: 0.12rem;
}

.border {
  width: 100%;
  height: 1.28rem;
  display: flex;
}

.border .read {
  width: 3.24rem;
  height: 0.68rem;
  background: #3c98c9;
  border-radius: 5px;
  margin: 0.28rem 0.42rem 0 0.3rem;
  line-height: 0.62rem;
  text-align: center;
}

.border .read a {
  color: #fff;
  font-size: 0.28rem;
}

.border .txt {
  width: 3.24rem;
  height: 0.68rem;
  border: 2px solid #78b8da;
  border-radius: 5px;
  margin-top: 0.28rem;
  box-sizing: border-box;
  line-height: 0.62rem;
  text-align: center;
}

.border .txt a {
  color: #3b98c9;
  font-size: 0.28rem;
}

.bookrack {
  width: 100%;
  height: 1.02rem;
}

.bookrack .put {
  width: 6.86rem;
  height: 0.64rem;
  background: #faf7f5;
  border: 1px solid #e8e7e6;
  margin: 0 auto;
  line-height: 0.64rem;
  text-align: center;
  border-radius: 5px;
}

.bookrack .put a {
  font-size: 0.28rem;
  color: #998c7f;
}

.testimonials {
  width: 100%;
  height: 1.5rem;
  background: #ebe8e6;
  display: flex;
}

.testimonials .new {
  width: 0.5rem;
  height: 0.3rem;
  background: #88c2bd;
  color: #fff;
  font-size: 0.2rem;
  text-align: center;
  margin: 0.42rem 0.1rem 0 0.32rem;
}

.testimonials .end {
  width: 3.72rem;
  height: 0.62rem;
  margin-top: 0.38rem;
}

.testimonials .end a {
  color: #3a98c9;
  font-size: 0.24rem;
}

.testimonials .end p {
  color: #abaab9;
}

.cont {
  width: 100%;
  height: 2.9rem;
  border-bottom: 1px solid #e8e7e6;
  overflow: hidden;
  background:#faf7f5;
}

.cont .nr {
  width: 1.28rem;
  height: 0.34rem;
  margin: 0.28rem 0 0.2rem 0.32rem;
  font-size: 0.32rem;
  font-weight: 900;
}

.cont .wz {
  width: 6.7rem;
  height: 1.6rem;
  margin: 0.1rem 0 0 0.32rem;
  font-size: 0.3rem;
  color: #979999;
  line-height: 0.4rem;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-top: 0.1rem;
  text-indent: 2em;
}
.catalog {
  width: 100%;
  height: 4.5rem;
  border-bottom: 1px solid #e8e7e6;
  background:#faf7f5;
}
.catalog .ml {
  width: 100%;
  height: 0.96rem;
  display: flex;
}
.catalog .ml span {
  margin: 0.32rem 0 0.1rem 0.32rem;
  font-size: 0.32rem;
  font-weight: 900;
}
.catalog .ml p {
  margin: 0.38rem 0 0.1rem 0rem;
  font-size: 0.24rem;
  color: #aba49a;
}
.catalog .ml a {
  margin: 0.36rem 0.1rem 0rem 3.76rem;
  font-size: 0.24rem;
  color: #3aa4d6;
}

.catalog .catalog2 {
  width: 100%;
  height: 2.68rem;
}
.catalog .catalog2 a {
  font-size: 0.24rem;
  color: #979999;
  height: 0.4rem;
  line-height: 0.4rem;
}

.catalog .catalog3 {
  width: 100%;
  height: 1.04rem;
}

.catalog .catalog3 .put2 {
  width: 6.86rem;
  height: 0.64rem;
  background: #faf7f5;
  border: 1px solid #e8e7e6;
  margin: 0 auto;
  line-height: 0.64rem;
  text-align: center;
  border-radius: 5px;
}

.catalog .catalog3 .put2 a {
  font-size: 0.28rem;
  color: #998c7f;
}
.comment {
  width: 100%;
  height: 4.26rem;
  border-bottom: 1px solid #e8e7e6;
}
.comment .pl {
  width: 100%;
  height: 0.8rem;
  display: flex;
}
.comment .pl span {
  margin: 0.3rem 0 0.1rem 0.32rem;
  font-size: 0.32rem;
  font-weight: 900;
}
.comment .pl p {
  margin: 0.4rem 0 0.1rem 0rem;
  font-size: 0.24rem;
  color: #aba49a;
}

.comment .pl a {
  margin: 0.36rem 0.1rem 0rem 3.76rem;
  font-size: 0.24rem;
  color: #3aa4d6;
}
.tx {
  width: 100%;
  height: 0.76rem;
  display: flex;
}
.tx .img2 {
  width: 0.72rem;
  height: 0.72rem;
  background: #09f;
  border-radius: 50%;
  margin: 0rem 0.28rem 0 0.28rem;
}
.tx a {
  margin: 0.2rem 3.12rem 0rem 0rem;
  font-size: 0.24rem;
  color: #3aa4d6;
}
.tx p {
  margin: 0.2rem 0 0.1rem 0rem;
  font-size: 0.24rem;
  color: #aba49a;
}

.comment .cp {
  width: 100%;
  height: 1.54rem;
}
.comment .cp p {
  margin: 0.1rem 0 0 1rem;
  color: #545454;
}

.comment .more {
  width: 100%;
  height: 1.04rem;
}
.comment .more .put3 {
  width: 6.86rem;
  height: 0.64rem;
  background: #faf7f5;
  border: 1px solid #e8e7e6;
  margin: 0 auto;
  line-height: 0.64rem;
  text-align: center;
  border-radius: 5px;
}
.comment .more .put3 a {
  font-size: 0.28rem;
  color: #998c7f;
}

.love {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
}
.love span {
  margin: 0.32rem 0 1rem 0.32rem;
  font-size: 0.32rem;
  font-weight: 900;
}
.stack {
  width: 100%;
  height: 4.46rem;
  display: flex;
}
.stack .book01 {
  width: 2.12rem;
  height: 4.46rem;
  margin: 0.1rem 0 0 0.3rem;
}

.stack .book01 img {
  width: 2.12rem;
  height: 2.9rem;
}
.stack .book01 span {
  font-size: 0.28rem;
}
.stack .book01 p {
  color: #998c7f;
}

.box5 {
  width: 100%;
  box-sizing: border-box;
  height: 0.62rem;
  background: #f5f5f5;
  padding-left: 1.4rem;
}
.box5 ul {
  float: left;
}
.box5 ul li {
  float: left;
  text-align: center;
  margin-right: 0.42rem;
}
.box5 ul a {
  color: #999999;
}
.box6 {
  width: 100%;
  height: 0.78rem;
  background: #f5f5f5;
}
.box6 p {
  text-align: center;
}
</style>
