<template>
     <div class="list_boy">
        <ul>
            <li class="list_play" v-for="(item,index) in GirlBody" :key="index">
                <div class="play_img">
                  <img :src="item.iconUrl">
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
            </li>
          </ul>
        </div>
</template>

<script>
import {getGirlBody} from "api/girl";
export default {
  name:"girlBody",
  async created(){
  let data = await getGirlBody();
  this.GirlBody = data.data;
  this.GirlBody.splice(0,3);
  this.GirlBody.length = 3;
  },
  data(){
    return {
      GirlBody:[]
    }
  }
}
</script>

<style>

</style>
