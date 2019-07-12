<template>
    <div class="list_fl">
        <div class="gd_list">
         <strong>大家都在看</strong><span>更多</span>
        </div>
        <ul>
            <v-touch tag="li" @tap="handleList(index)" class="list_play" v-for="(item,index) in BoyLoveLook" :key="index">
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
import {getBoyLoveLook} from "api/boy";
export default {
  name:"boyLoveLook",
  async created(){
    let data = await getBoyLoveLook();
    this.BoyLoveLook = data.data;
    this.BoyLoveLook.length = 3;
  },
  data(){
    return {
      BoyLoveLook:[],
     
    }
  },
  methods:{
    handleList(index){
      window.scrollTo(0,0)
      
      this.name = this.BoyLoveLook[index].title
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
