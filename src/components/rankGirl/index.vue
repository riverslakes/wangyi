<template>
  <div class="list">
    <div class="list-header">
      <p class="rankingList">女生排行榜</p>
      <span>更多</span>
    </div>
    <div class="list-single">
      <img :src="Rankval[0].iconUrl" alt="">
      <span class="list-num">1</span>
      <div class="list-msg">
        <p class="list-name">{{Rankval[0].title}}</p>
        <p class="list-intro">{{Rankval[0].author}}/{{Rankval[0].category}}</p>
        <p class="list-details">{{Rankval[0].description}}</p>
      </div>
    </div>
    <div class="rest">
      <span class="rest-num2">2</span>
      <span class="rest-name">{{Rankval[1].title}}</span>
    </div>
    <div class="rest">
      <span class="rest-num3">3</span>
      <span class="rest-name">{{Rankval[2].title}}</span>
    </div>
    <div class="rest">
      <span class="rest-num">4</span>
      <span class="rest-name">{{Rankval[3].title}}</span>
    </div>
    <div class="rest">
      <span class="rest-num">5</span>
      <span class="rest-name">{{Rankval[4].title}}</span>
    </div>
  </div>
</template>

<script>
import { getRankGirl } from "api/rank";
export default {
  name: "rankBoy",
  async created() {
    let data = await getRankGirl();
    this.Rankval = data.data.books;
    this.Rankval.length = 5;
    console.log(this.Rankval);
  },
  data() {
    return {
      Rankval: []
    };
  }
};
</script>

<style>
</style>
