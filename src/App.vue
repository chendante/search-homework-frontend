<template>
  <div id="app">
    <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" @click="gotoPage(1)">首页</el-menu-item>
  <el-menu-item index="2" @click="gotoPage(2)">
    歌曲列表
  </el-menu-item>
  <el-menu-item index="3"  @click="gotoPage(3)">
    歌曲查询
  </el-menu-item>
  <el-menu-item index="4" @click="gotoPage(4)">
    查看倒排索引
  </el-menu-item>
  <el-menu-item index="5" disabled>添加歌曲(尽情期待)</el-menu-item>
</el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeIndex: '',
      };
  },
  methods:{
    gotoPage(i){
      if(i==1)
      {
        this.$router.push({path:"/"})
      }
      else if(i==2)
      {
        this.$router.push({path:"/song-list"})
      }
      else if(i==3)
      {
        this.$router.push({path:"/search-boolean"})
      }
      else if(i==4)
      {
        this.$router.push({path:"/inverted-index"})
      }
    }
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:80%;
  margin: auto;
  position: relative;
}

.el-menu-demo {
  margin-bottom: 20px
}

a:link,a:visited{
 text-decoration:none;  /*超链接无下划线*/
}
a:hover{
 text-decoration:underline;  /*鼠标放上去有下划线*/
}
body {
  margin:0
  padding:0
}
</style>
