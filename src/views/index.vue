<template>
<div>
    <el-row class="index-row">
      当前本系统中有歌曲：{{song_number}} 首
    </el-row>
    <el-card>
      <el-row class="index-row">
        本网站用于信息检索作业展示
      </el-row>
      <el-row class="index-row">
        当前已完成该课程的第一次作业
      </el-row>
      <el-row class="index-row">
        作业源码请从GitHub下载:
      </el-row>
      <el-row class="index-row"> 
        第一次作业后端项目地址：<a href="https://github.com/chendante/search-homework-backend"><el-button type="primary">点击前往</el-button></a>
      </el-row>
      <el-row class="index-row">
        第一次作业前端项目地址：<a href="https://github.com/chendante/search-homework-frontend"><el-button type="primary">点击前往</el-button></a>
      </el-row>
    </el-card>
</div>
</template>
<script>

export default {
  data(){
    return {
      song_number: ''
    }
  },
  mounted(){
    this.get_song_number()
  },
  methods: {
    get_song_number () {
      this.axios.get('song/number')
        .then(res => {
          this.song_number = res.data
      })
    }
  }
}

</script>

<style>
.label_input {
  line-height: 25px;
  /* font-size: 20px; */
}
.index-row {
    margin-bottom: 10px;
    margin-top: 10px
}
</style>
