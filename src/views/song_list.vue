<template>
    <el-table
      v-loading="loading"
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
      <el-table-column
        prop="id"
        label="倒排索引ID"
        width="180">
      </el-table-column>
    </el-table>
</template>

<script>
import Vue from 'vue'
    export default {
      data() {
        return {
          song_list_data: [],
          loading: true
        }
      },
      mounted() {
        this.get_song_list()
      },
      methods: {
          get_song_list(){
            this.axios.get('/song/list')
              .then(res => {
                for(var i=0 ; i<res.data.length;i++)
                {
                    Vue.set(this.song_list_data,i,{
                        song_id: res.data[i][0],
                        song_name: res.data[i][1],
                        id: res.data[i][2]
                    })
                    // this.song_list_data[i]={
                    //     song_id: res.data[i][0],
                    //     song_name: res.data[i][1]
                    // }
                }
                this.loading = false
            })
          }
      }
    }
</script>