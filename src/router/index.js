import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import song_list from '@/views/song_list'
import inverted_index from '@/views/inverted_index'
import search_boolean from '@/views/search_boolean'
import search_vector from '@/views/search_vector'
import vector_index from '@/views/vector_index'
import ding from '@/views/ding'
import ding_search from'@/views/ding_search'

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
      meta:{
        navShow: true
      },
      component: song_list
    },
    {
      path: '/inverted-index',
      name: '倒排索引',
      meta:{
        navShow: true
      },
      component: inverted_index
    },
    {
      path: '/search-boolean',
      name: '歌词检索',
      meta:{
        navShow: true
      },
      component: search_boolean
    },
    {
      path: '/search-vector',
      name: '向量空间模型',
      meta:{
        navShow: true
      },
      component: search_vector
    },
    {
      path: '/vector-index',
      name: '权重矩阵',
      meta:{
        navShow: false
      },
      component: vector_index
    },
    {
      path: '/ding',
      name: 'Ding',
      meta:{
        navShow: false
      },
      component: ding
    },
    {
      path: '/ding/:page/:type/:query',
      name: 'Search',
      component: ding_search
    }
  ]
})
