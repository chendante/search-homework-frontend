<template>
  <div id="app">
    <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  >
  <el-menu-item index="1" @click="gotoPage(1)">首页</el-menu-item>
  <el-menu-item index="2" @click="gotoPage(2)">
    歌曲列表
  </el-menu-item>
  <el-submenu index="3">
    <template slot="title">歌曲查询</template>
    
    <el-menu-item index="3-1"   @click="gotoPage(3)">布尔查询</el-menu-item>
    <el-menu-item index="3-2" @click="gotoPage(5)">向量空间模型</el-menu-item>
  </el-submenu>
  <el-menu-item index="4" @click="gotoPage(4)">
    查看倒排索引
  </el-menu-item>
    <el-menu-item index="5" @click="gotoPage(6)">
    查看权重矩阵
  </el-menu-item>
  <el-menu-item index="6" disabled>添加歌曲(尽情期待)</el-menu-item>
  <el-menu-item index="7" @click="gotoPage(7)">校内搜索</el-menu-item>
</el-menu>
    <router-view/>
    <!-- <foot ></foot> -->
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeIndex: '',
        page_index: 1
      };
  },
  methods:{
    gotoPage(i){
      if(i==1)
      {
        window.location.href
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
      else if(i==5)
      {
        this.$router.push({path:"/search-vector"})
      }
      else if(i==6)
      {
        this.$router.push({path:"/vector-index"})
      }
      else if(i==7)
      {
        this.$router.push({path:"/ding"})
      }
      this.page_index = i
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
  /* text-align: center; */
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
  margin:0;
  padding:0
}
</style>
