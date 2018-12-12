<template>
<div class="index">
    <el-card class="box-card">
        <el-row class="inverted-index-row">
            下载歌词的倒排索引表：
            <a href="http://47.95.200.233/search-homework/song_lyric_index.json"><el-button type="primary">点击下载</el-button></a>
        </el-row>

        <el-row class="inverted-index-row">
            下载歌名的倒排索引表：
            <a href="http://47.95.200.233/search-homework/song_name_index.json"><el-button type="primary">点击下载</el-button></a>
        </el-row>
        <el-row style="color: red" class="inverted-index-row">
            如果点击后没有下载而是跳转，请点击鼠标右键-->链接另存为
        </el-row>
        <el-row class="inverted-index-row">
            倒排索引的词项是设过停用词的，停用词包括：（ '这', '作曲', '作词', '我', '你' ）
        </el-row>
        <el-row>
            更新倒排索引表：
            <el-button type="primary" disabled>点击更新</el-button>
            <p style="color: red">
            更新功能暂未开放
            </p>
        </el-row>

    </el-card>
    
    <el-card>
        <el-row class="inverted-index-row">
            歌词的倒排索引（只展示100条）：
        </el-row>
        <el-table
            v-loading="loading"
            :data="song_lyric_index"
            border
            style="width: 100%">
                <el-table-column
                    prop="word"
                    label="词项"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="包含文章数量"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="id_list"
                    label="倒排索引ID列表">
                </el-table-column>
        </el-table>
    </el-card>
    <el-card>
        <el-row class="inverted-index-row">
            歌名的倒排索引（只展示100条）：
        </el-row>
        <el-table
            v-loading="loading2"
            :data="song_name_index"
            border
            style="width: 100%">
                <el-table-column
                    prop="word"
                    label="词项"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="num"
                    label="包含文章数量"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="id_list"
                    label="倒排索引ID列表">
                </el-table-column>
        </el-table>
    </el-card>
</div>
</template>

<script>
import Vue from 'vue'
export default {
    data() {
        return {
            song_lyric_index: [],
            song_name_index: [],
            loading: true,
            loading2: true
        }
    },
    mounted() {
        this.get_lyric_index()
        this.get_name_index()
    },
    methods: {
        get_lyric_index(){
            this.axios.get('/search/lyric-index')
              .then(res => {
                for(var i=0 ; i<res.data.length;i++)
                {
                    Vue.set(this.song_lyric_index,i,{
                        word: res.data[i][1],
                        id_list: res.data[i][2],
                        id: res.data[i][0],
                        num: res.data[i][3]
                    })
                }
                this.loading = false
            })
        },
        get_name_index(){
            this.axios.get('/search/name-index')
              .then(res => {
                for(var i=0 ; i<res.data.length;i++)
                {
                    Vue.set(this.song_name_index,i,{
                        word: res.data[i][1],
                        id_list: res.data[i][2],
                        id: res.data[i][0],
                        num: res.data[i][3]
                    })
                }
                this.loading2 = false
            })
        }
    }
}
</script>


<style>

.inverted-index-row {
    margin-bottom: 10px;
    margin-top: 10px
}
.index{
  text-align: center
}
</style>

