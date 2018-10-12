<template>
    <el-row>
        <el-col :span="24">
            歌名：
        </el-col>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-row>
</template>
<script>

export default {
  data(){
    return {
      input: ''
    }
  }
}

</script>