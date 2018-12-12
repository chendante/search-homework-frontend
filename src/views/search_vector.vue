<template>
<div class="index">
    <el-card>
        <el-form :model="search_form" :rules="search_rules" ref="search_form" label-width="150px">
            <el-form-item label="搜索文本：" prop="boolean">
                <el-input type="textarea" :rows="2" v-model="search_form.text"></el-input>
            </el-form-item>
            <el-form-item label=" 搜索内容：">
                <el-radio-group v-model="search_form.kind" style="margin-left:auto">
                    <el-radio :label=0>歌词</el-radio>
                    <el-radio :label=1>歌名</el-radio>
                    <el-radio :label=2>歌词和歌名</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search_song(search_form)">搜索</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    <el-card v-show="show">
        <el-table
            v-loading='loading'
            :data="song_search_list"
            border
            style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props" >
                    <el-form label-position="top" inline class="table-expand-form">
                        <el-form-item label="歌名">
                            <div v-html="props.row.name2"></div>
                        </el-form-item>
                        <el-form-item label="歌词">
                            <div v-html="props.row.lyric"></div>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                label="倒排索引ID"
                prop="index_id">
            </el-table-column>
            <el-table-column
                label="歌名"
                prop="name">
            </el-table-column>
            <el-table-column
                label="加权相似度"
                prop="weight">
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
            song_search_list: [],
            id_search_index: [],
            search_form: {text:'',kind: 2},
            loading: true,
            show: false,
            search_rules: {
                boolean: [
                    { required: true, message: '请输入搜索内容', trigger: 'blur' }
                ]
            }
        }   
    },
    mounted() {
    },
    methods: {
        search_song(form){
            this.show = true
            this.loading = true
            form.kind = parseInt(form.kind)
            this.song_search_list = []
            var str_list = form.text.trim().split("")
            this.axios.get('/search/vector',{params:form}
            )
              .then(res => {
                for(var i=0 ; i<res.data.song_list.length;i++)
                {
                    var temp_str = res.data.song_list[i][3]
                    var temp_str2 = res.data.song_list[i][1]
                    for(var j=0;j<str_list.length;j++)
                    {
                        var reg = new RegExp(str_list[j],"g")
                        temp_str = temp_str.replace(reg,'<span class="highlight">'+str_list[j]+'</span>')
                        temp_str2 = temp_str2.replace(reg,'<span class="highlight">'+str_list[j]+'</span>')
                    }
                     
                    Vue.set(this.song_search_list,i,{
                        name2: temp_str2,
                        name: res.data.song_list[i][1],
                        lyric: temp_str,
                        weight:  res.data.song_list[i][4],
                        index_id: res.data.song_list[i][2]
                    })
                }
                this.loading = false
            })
        }
    }
}
</script>


<style>
.highlight{
    background-color: yellow
}
.search-row {
    margin-bottom: 10px;
    margin-top: 10px
}
.table-expand-form label {
    width: 90px;
    color: #99a9bf;
}
.index{
  text-align: center
}
</style>