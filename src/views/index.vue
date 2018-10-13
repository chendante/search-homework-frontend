<template>
    <el-row>
        <el-col :span="3">
          当前本系统中有歌曲：
        </el-col>
        <el-col :span="1" class="label_input">
          {{song_number}}
        </el-col>
    </el-row>
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
      this.$axios.get('http://127.0.0.1:8081/song/number')
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
  font-size: 20px;
}
</style>
