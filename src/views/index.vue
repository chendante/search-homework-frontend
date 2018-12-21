<template>
<div class="index">
    <el-row class="index-row">
      当前本系统中有歌曲：{{song_number}} 首
    </el-row>
    <el-card>
      <el-row class="index-row">
        本网站用于信息检索作业展示
      </el-row>
      <el-row class="index-row">
        当前已完成该课程的第三次作业
      </el-row>
      <el-row class="index-row">
        作业一说明文档：
        <a href="http://47.95.200.233/search-homework/Documentation.pdf"><el-button type="primary">点击下载</el-button></a>
      </el-row>
      <el-row class="index-row">
        作业二说明文档：
        <a href="http://47.95.200.233/search-homework/Documentation2.pdf"><el-button type="primary">点击下载</el-button></a>
      </el-row>
      <el-row class="index-row">
        作业三说明文档：
        <a href="http://47.95.200.233/search-homework/Documentation3.pdf"><el-button type="primary">点击下载</el-button></a>
      </el-row>
      <el-row class="index-row" style="color: red">
        作业三展示于校内搜索模块
      </el-row>
      <el-row class="index-row">
        作业源码请从GitHub下载:
      </el-row>
      <el-row class="index-row">
        所有作业的前端项目地址：<a href="https://github.com/chendante/search-homework-frontend"><el-button type="primary">点击前往</el-button></a>
      </el-row>
      <el-row class="index-row"> 
        第一次作业后端项目地址：<a href="https://github.com/chendante/search-homework-backend/tree/homework1"><el-button type="primary">点击前往</el-button></a>
      </el-row>
      <el-row class="index-row"> 
        第二次作业后端项目地址：<a href="https://github.com/chendante/search-homework-backend/tree/homework2"><el-button type="primary">点击前往</el-button></a>
      </el-row>
      <el-row class="index-row"> 
        第三次作业后端项目地址：<a href="https://github.com/chendante/search-homework-backend/tree/homework3"><el-button type="primary">点击前往</el-button></a>
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
.index{
  text-align: center
}
</style>
