<template>
<div class="index">
    <el-card>
        <el-form :model="search_form" :rules="search_rules" ref="search_form" label-width="150px">
            <el-form-item label="布尔表达式：" prop="boolean">
                <el-input v-model="search_form.boolean"></el-input>
            </el-form-item>
            <el-row style="color:red" class="search-row">
                该布尔表达式只支持“AND”、“OR”，不支持“NOT”、“（”、“）”，“AND”、“OR”请大写。（例：凉 OR 山河 AND 的）运算规则为右合并
            </el-row>
            <el-form-item label="不包含词语：">
                <el-input v-model="search_form.dont"></el-input>
            </el-form-item>
            <el-row style="color:red" class="search-row">
                直接写不希望包含的词语即可。（例：天 永远）
            </el-row>
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
                label="ID"
                prop="id">
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
            search_form: {dont:'',boolean:'',kind: 0},
            loading: true,
            show: false,
            search_rules: {
                boolean: [
                    { required: true, message: '请输入布尔表达式', trigger: 'blur' }
                ]
            }
        }   
    },
    mounted() {
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
                        id: res.data[i][0]
                    })
                }
                this.loading = false
            })
        },
        search_song(form){
            this.show = true
            this.loading = true
            form.kind = parseInt(form.kind)
            this.song_search_list = []
            var str_list = form.boolean.trim().split(" ")
            this.axios.get('/search/boolean',{params:form}
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
                        id:  res.data.song_list[i][0],
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