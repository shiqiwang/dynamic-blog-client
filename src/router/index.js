import Vue from 'vue'
import Router from 'vue-router'
import DynamicBlog from '@/components/dynamic-blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DynamicBlog',
      component: DynamicBlog
    }
  ]
})
