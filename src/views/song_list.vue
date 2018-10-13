<template>
    <el-table
      :data="song_list_data"
      style="width: 100%">
      <el-table-column
        prop="song_id"
        label="歌曲ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="song_name"
        label="歌名"
        width="180">
      </el-table-column>
    </el-table>
</template>

<script>
import Vue from 'vue'
    export default {
      data() {
        return {
          song_list_data: [
              {
                  song_id:1,
                  song_name: "sfadf"
              }
          ]
        }
      },
      mounted() {
        this.get_song_list()
      },
      methods: {
          get_song_list(){
            console.log(1)
            this.$axios.get('http://127.0.0.1:8081/song/list')
              .then(res => {
                for(var i=0 ; i<res.data.length;i++)
                {
                    Vue.set(this.song_list_data,i,{
                        song_id: res.data[i][0],
                        song_name: res.data[i][1]
                    })
                    // this.song_list_data[i]={
                    //     song_id: res.data[i][0],
                    //     song_name: res.data[i][1]
                    // }
                }
                console.log(this.song_list_data)
            })
          }
      }
    }
</script>