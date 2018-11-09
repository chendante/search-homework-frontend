import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import song_list from '@/views/song_list'
import inverted_index from '@/views/inverted_index'
import search_boolean from '@/views/search_boolean'
import search_vector from '@/views/search_vector'
import vector_index from '@/views/vector_index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/song-list',
      name: '歌曲列表',
      component: song_list
    },
    {
      path: '/inverted-index',
      name: '倒排索引',
      component: inverted_index
    },
    {
      path: '/search-boolean',
      name: '歌词检索',
      component: search_boolean
    },
    {
      path: '/search-vector',
      name: '向量空间模型',
      component: search_vector
    },
    {
      path: '/vector-index',
      name: '权重矩阵',
      component: vector_index
    }
  ]
})
