import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import song_list from '@/views/song_list'

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
    }
  ]
})
