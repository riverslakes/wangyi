<template>
  <div>
    <div id="foot">
      <div class="input_wn">
        <input type="text" class="txt" placeholder="请输入作者或书名" />
        <button class="but">
          <i class="iconfont icon-fdj"></i>
        </button>
      </div>
      <div class="foot_n">
        <a href="#">下载网易云阅读客户端</a>
      </div>

      <div class="foot_m">
        <ul>
          <li>客户端</li>
          <li>帮助</li>
          <li>反馈</li>
          <li>触屏幕</li>
          <li>电脑版</li>
        </ul>
        <p>网易公司版权99999999</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style>
#foot {
  width: 100%;
  height: 3.2rem;
}

.input_wn {
  width: 6.68rem;
  height: 0.64rem;
  margin: 0.1rem auto;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #ccc;
}
.input_wn .txt {
  width: 5.36rem;
  height: 0.6rem;
  font-size: 0.3rem;
  border: 0;
  background: #f7f7f7;
  outline: none;
  border-radius: 0.3rem 0 0 0.3rem;
  padding-left: 0.2rem;
  float: left;
}
.but {
  background-color: #fff;
  border: 0;
  width: 1rem;
  height: 0.6rem;
  border-radius: 0rem 0.3rem 0.3rem 0rem;
  background: #f7f7f7;
  outline: none;
}
.but i {
  font-size: 0.4rem;
  text-align: center;
  color: #000;
}

.foot_n {
  width: 90%;
  height: 0.72rem;
  line-height: 0.72rem;
  border: 1px solid #ffffff;
  text-align: center;
  background: #e74c2e;
  margin: 0 auto;
  margin-top:0.3rem;
  border-radius: 6px;
}
.foot_n a {
  color: #ffffff;
}
.foot_m {
  width: 6.68rem;
  margin-top: 0.4rem;
}
.foot_m ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.foot_m ul li {
  margin-left: 0.56rem;
  font-size: 0.24rem;
}
.foot_m ul li:nth-child(4) {
  color: red;
}
.foot_m p {
  font-size: 0.28rem;
  color: #bbb;
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
  width: 6.68rem;
  margin: auto;
  margin-top: 0.2rem;
}
</style>
