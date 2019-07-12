<template>
    <div class="list_fl">
        <div class="gd_list">
         <strong>男生限时免费</strong><span>更多</span>
        </div>
        <ul>
            <v-touch tag="li" @tap="handleList(index)" class="list_play" v-for="(item,index) in BoyFree" :key="index">
                <div class="play_img">
                  <img :src="item.coverImage">
                  <div class="play_xm">限免</div>
                </div>
                  <div class="play_txt">
                  <h3>{{item.title}}</h3>
                  <p>{{item.author}}</p>
                  <p class="txt_jj">{{item.description}}</p>
                  <p><span class="txt_free">免费</span>
                  <del class="txt_pri">{{item.priority}}阅点</del>
                  </p>
                </div>
            </v-touch>
          </ul>
        </div>
</template>

<script>
import {getBoyLoveLook} from "api/boy";
export default {
  name:"boyFree",
  async created(){
    let data = await getBoyLoveLook();
    this.BoyFree = data.data;
    this.BoyFree.splice(0,3);
    this.BoyFree.length = 3;
  },
  data(){
    return {
      BoyFree:[],
   
    }
  },
  methods:{
    handleList(index){
      window.scrollTo(0,0)
    
     this.name = this.BoyFree[index].title
         this.$router.push({
         path:"/list",
         query:{key:this.name}
         }
        ) 
    }
  }
}
</script>

<style>

</style>
