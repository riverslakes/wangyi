<template>
    <div class="list_fl">
        <div class="gd_list">
         <strong>都市纯爱</strong><span>更多</span>
        </div>
        <ul>
            <v-touch tag="li" @tap="handleList()" class="list_play" v-for="(item,index) in GirlCityLove" :key="index">
                <div class="play_img">
                  <img :src="item.coverImage">
                  <div class="play_xm">限免</div>
                </div>
                  <div class="play_txt">
                  <h3>{{item.title}}</h3>
                  <p>{{item.author}}</p>
                  <p class="txt_jj">{{item.description}}</p>
                  <p><span class="txt_mf">已完结</span>
                  <span class="txt_mf">{{item.category}}</span>
                  <span class="txt_mf">{{item.showTotalCount}}</span></p>
                </div>
            </v-touch>
          </ul>
        </div>
</template>

<script>
import {getGirlChoiceness} from "api/girl";
export default {
  name:"girlCityLove",
  async created(){
    let data = await getGirlChoiceness();
    this.GirlCityLove = data.data;
    this.GirlCityLove.splice(0,6);
    this.GirlCityLove.length = 3;
  },
  data(){
    return {
      GirlCityLove:[]
    }
  },
  methods:{
    handleList(){
      this.$router.push("/list")
    }
  }
}
</script>

<style>

</style>
