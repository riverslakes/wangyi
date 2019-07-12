<template>
  <div>
    <HeaderCom/>
    <RankBoy/>
    <RankGirl/>
    <RankTushu/>
    <Top/>
    <Footer/>
  </div>
</template>

<script>
import RankBoy from "components/rankBoy";
import RankGirl from "components/rankGirl";
import RankTushu from "components/rankTushu";

export default {
  name: "ranking",
  components: {
    RankBoy,
    RankGirl,
    RankTushu
  }
};
</script>

<style>
.list {
  width: 6.68rem;
  height: 6.8rem;
  margin: 0.1rem auto;
  border-bottom: 1px solid #ccc;
}
.list:nth-of-type(4){
  border: none;
}
/*list-header start*/
.list-header {
  width: 100%;
  height: 1rem;
}
.list-header .rankingList {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.32rem;
  font-weight: 900;
  display: inline-block;
}
.list-header span {
  display: block;
  width: 1.2rem;
  height: 0.56rem;
  line-height: 0.56rem;
  color: #ccc;
  border: 1px solid #eee;
  border-radius: 0.2rem;
  float: right;
  font-size: 0.28rem;
  text-align: center;
  margin-top: 0.2rem;
}
/*list-header end*/

/*list-single start*/
.list-single {
  width: 100%;
  height: 2.84rem;
  position: relative;
}
.list-single img {
  float: left;
  width: 2rem;
  height: 2.84rem;
}
.list-single .list-num {
  display: block;
  position: absolute;
  top: -0.08rem;
  left: 0.2rem;
  background: #f1c96d;
  color: #fff;
  width: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  text-align: center;
  font-size: 0.24rem;
  font-weight: 900;
  border-radius: 0rem 0rem 1.8rem 1.8rem / 0rem 0rem 2rem 2rem;
}
.list-msg {
  float: left;
  width: 4.44rem;
  height: 100%;
  margin-left: 0.2rem;
}
.list-msg .list-name {
  font-size: 0.32rem;
  line-height: 0.4rem;
}
.list-msg .list-intro {
  font-size: 0.28rem;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #aba59a;
}
.list-details {
  font-size: 0.28rem;
  color: #6c6358;
  line-height: 0.4rem;
  margin-top: 0.2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.rest {
  margin-top: 0.32rem;
  height: 0.32rem;
}
.rest-num {
  color: #6c6358;
  font-size: 0.24rem;
  display: inline-block;
  background: #fff;
  width: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  text-align: center;
  font-weight: 900;
}
.rest-num2 {
  display: inline-block;
  background: #b5b7be;
  color: #fff;
  width: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  text-align: center;
  font-size: 0.24rem;
  font-weight: 900;
  border-radius: 0rem 0rem 1.8rem 1.8rem / 0rem 0rem 2rem 2rem;
}
.rest-num3 {
  background: #e69e6b;
  display: inline-block;
  color: #fff;
  width: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  text-align: center;
  font-size: 0.24rem;
  font-weight: 900;
  border-radius: 0rem 0rem 1.8rem 1.8rem / 0rem 0rem 2rem 2rem;
}
.rest-name {
  color: #857d74;
  line-height: 0.32rem;
  font-size: 0.28rem;
  margin-left: 0.2rem;
}
</style>
